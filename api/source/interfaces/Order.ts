import Product from './Product';

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
    creation_date: string;
    internal_order_number: number;
}

export default Order;