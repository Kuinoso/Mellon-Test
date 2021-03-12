import Order from '../interfaces/Order';

const get = (order: Order): Order => {
    order.pack_promise_min = null;
    order.pack_promise_max = null;
    order.ship_promise_min = null;
    order.ship_promise_max = null;
    order.delivery_promise_min = null;
    order.delivery_promise_max = null;
    order.ready_pickup_promise_min = null;
    order.ready_pickup_promise_max = null;

    return order;
};

export default { get };