import { NextFunction, Request, Response } from 'express';
import axios from 'axios';
import NodeCache from 'node-cache';
import dotenv from 'dotenv';
import nextBusinessDays from '../helpers/nextBussinesDays';
import weight from '../helpers/weight';
import nullPromises from '../helpers/nullPromises';
import today from '../helpers/today';
import requestTime from '../helpers/requestTime';
import cases from '../helpers/cases';
import promise from '../helpers/promise';

dotenv.config();

const myCache = new NodeCache();

const newOrder = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let order = req.body;

        const shippingMethodResponse = await axios.get(`https://yhua9e1l30.execute-api.us-east-1.amazonaws.com/sandbox/shipping-methods/${order.shipping_method.id}`, {
            headers: {
                'x-api-key': process.env.X_API_KEY
            }
        });

        if (shippingMethodResponse.data) {
            const rules = shippingMethodResponse.data.rules;
            const { min, max } = rules.availability.byWeight;
            const { dayType, fromTimeOfDay, toTimeOfDay } = rules.availability.byRequestTime;
            const casesList = rules.promisesParameters.cases;

            order.creation_date = new Intl.DateTimeFormat('fr-CA', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(Date.now());
            order.internal_order_number = `MSE-${Date.now()}-${Math.floor(Math.random() * (100 - 0 + 1)) + 0}`;

            const offDaysResponse = await axios.get('https://yhua9e1l30.execute-api.us-east-1.amazonaws.com/sandbox/off-days', {
                headers: {
                    'x-api-key': process.env.X_API_KEY
                }
            });

            const offDays = offDaysResponse.data;
            const todayBusinessDay = today.check(offDays);
            const businessDays = nextBusinessDays.get(offDays);

            if (!weight.validate(min, max, order.line_items)) {
                order = nullPromises.get(order);
                myCache.set(order.internal_order_number, order);

                res.status(200).send('Rules not met, order saved');

                return;
            }

            if (!requestTime.validate(dayType, fromTimeOfDay, toTimeOfDay, todayBusinessDay)) {
                order = nullPromises.get(order);
                myCache.set(order.internal_order_number, order);

                res.status(200).send('Rules not met, order saved');

                return;
            }

            const workingCase = cases.validate(casesList, todayBusinessDay);

            if (!workingCase) {
                order = nullPromises.get(order);
                myCache.set(order.internal_order_number, order);

                res.status(200).send('Rules not met, order saved');

                return;
            }

            order = await promise.validate(order, workingCase, businessDays);
            myCache.set(order.internal_order_number, order);

            res.status(200).send('Order saved');

            return;
        }
    } catch (err) {
        console.log(err);
    }
};

// const getOrder = async (req: Request, res: Response, next: NextFunction) => {
//     const id: string = req.params.id;

//     const order = await myCache.get(id);

//     res.send(order);
// };

const getAllOrders = async (req: Request, res: Response, next: NextFunction) => {
    const cacheOrders = Object.values(myCache.data);
    const allOrders: any[] = [];

    cacheOrders.forEach((order) => {
        allOrders.push(order.v);
    });
    res.send(allOrders);
};

const shippingMethods = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const shippingResponse = await axios.get('https://yhua9e1l30.execute-api.us-east-1.amazonaws.com/sandbox/shipping-methods', {
            headers: {
                'x-api-key': process.env.X_API_KEY
            }
        });

        if (shippingResponse.data) {
            res.send(shippingResponse.data)
        };
    } catch (err) {
        console.log(err);
    }
};

export default { newOrder, getAllOrders, shippingMethods };
