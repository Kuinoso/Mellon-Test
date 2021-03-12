import Product from '../interfaces/Product';

const validate = (min: number, max: number, line_items: Product[]): boolean => {
    let orderWeight: number = line_items[0].weight;
    for (let i = 1; i < line_items.length; i++) {
        orderWeight = orderWeight + (line_items[i].weight * line_items[i].qty);
    };
    return orderWeight > min && orderWeight < max;
};

export default { validate };