import Product from './Product';

interface Shipping_Method {
    id: number;
    name: string;
}

interface Order {
    seller_store: string;
    shipping_method: Shipping_Method;
    external_order_number: string;
    buyer_full_name: string;
    buyer_phone_number: string;
    buyer_email: string;
    shipping_adress: string;
    shipping_city: string;
    shipping_region: string;
    shipping_country: string;
    line_items: Product[];
    pack_promise_min: number | string | null;
    pack_promise_max: number | string | null;
    ship_promise_min: number | string | null;
    ship_promise_max: number | string | null;
    delivery_promise_min: number | string | null;
    delivery_promise_max: number | string | null;
    ready_pickup_promise_min: number | string | null;
    ready_pickup_promise_max: number | string | null;
    creation_date: string;
    internal_order_number: number;
}

export default Order;