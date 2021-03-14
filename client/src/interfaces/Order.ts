import Product from './Product';
import ShippingMethod from './ShippingMethod';

interface Order {
    seller_store: string;
    shipping_method: ShippingMethod;
    external_order_number: string;
    buyer_full_name: string;
    buyer_phone_number: string;
    buyer_email: string;
    shipping_adress: string;
    shipping_city: string;
    shipping_region: string;
    shipping_country: string;
    line_items: Product[] | undefined;
}

export default Order;