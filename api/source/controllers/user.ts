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
import Order from '../interfaces/Order';

dotenv.config();

const myCache = new NodeCache();

const newOrder = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let order: Order = req.body;

        const shippingMethodResponse = await axios.get(`https://yhua9e1l30.execute-api.us-east-1.amazonaws.com/sandbox/shipping-methods/${order.shipping_method}`, {
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
            order.internal_order_number = Date.now() + Math.floor(Math.random() * (100 - 0 + 1)) + 0;

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

                console.log('Rules not met');

                return;
            }

            if (!requestTime.validate(dayType, fromTimeOfDay, toTimeOfDay, todayBusinessDay)) {
                order = nullPromises.get(order);
                myCache.set(order.internal_order_number, order);

                console.log('Rules not met');

                return;
            }

            const selectedCase = cases.validate(casesList, todayBusinessDay);

            if (!selectedCase) {
                order = nullPromises.get(order);
                myCache.set(order.internal_order_number, order);

                console.log('Rules not met');

                return;
            }

            console.log('Pass');
        }
    } catch (err) {
        console.log(err);
    }
};

const getOrder = async (req: Request, res: Response, next: NextFunction) => {
    const id: number = Number(req.params.id);

    const order = await myCache.get(id);

    console.log(order);
};

export default { newOrder, getOrder };
