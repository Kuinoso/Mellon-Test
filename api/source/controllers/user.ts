import { NextFunction, Request, Response } from 'express';
import axios from 'axios';
import NodeCache from 'node-cache';
import dotenv from 'dotenv';

dotenv.config();

const myCache = new NodeCache();

interface Product {
    name: string;
    qty: number;
    weigth: number;
}

interface Order {
    seller_store: string;
    shipping_method: number;
    external_order_number: number;
    buyer_full_name: string;
    buyer_phone_number: string;
    buyer_email: string;
    shipping_adress: string;
    shipping_city: string;
    shipping_region: string;
    shipping_country: string;
    line_items: Product[];
    pack_promise_min: string | null;
    pack_promise_max: string | null;
    ship_promise_min: string | null;
    ship_promise_max: string | null;
    delivery_promise_min: string | null;
    delivery_promise_max: string | null;
    ready_pickup_promise_min: string | null;
    ready_pickup_promise_max: string | null;
}

const newOrder = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const formData = req.body;

        const shippingMethodResponse = await axios.get(`https://yhua9e1l30.execute-api.us-east-1.amazonaws.com/sandbox/shipping-methods/${formData.shipping_method}`, {
            headers: {
                'x-api-key': process.env.X_API_KEY
            }
        });

        if (shippingMethodResponse.data) {
            const rules = shippingMethodResponse.data.rules;

            const now = new Intl.DateTimeFormat('fr-CA', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(Date.now());

            const offDaysResponse = await axios.get('https://yhua9e1l30.execute-api.us-east-1.amazonaws.com/sandbox/off-days', {
                headers: {
                    'x-api-key': process.env.X_API_KEY
                }
            });

            const offDays = offDaysResponse.data;

            let dayMS: number = 86400000;

            const nextBusinessDays: string[] = [];

            while (nextBusinessDays.length < 10) {
                const today = Date.now() + dayMS;
                if (new Date(today).getDay() !== 6) {
                    const day = new Intl.DateTimeFormat('fr-CA', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(today);
                    if (!offDays.includes(day)) {
                        nextBusinessDays.push(day);
                    }
                }

                dayMS = dayMS + 86400000;
            }

            console.log(offDays);

            console.log('--', nextBusinessDays);
        }
    } catch (err) {
        console.log(err);
    }
};

export default { newOrder };
