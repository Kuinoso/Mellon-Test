import Order from '../interfaces/Order';

const setPromise = (businessDays: string[], type: string, order: any, orderPromise: string, deltaH: number, deltaD: number, deltaTime: number): Order => {
    const now = new Date();
    const hour: number = now.getHours();

    if (type === 'DELTA-HOURS') {
        const deltaHours: number = deltaH;

        order[orderPromise] = hour + deltaHours;
    } else if (type === 'DELTA-BUSINESSDAYS') {
        const deltaBusinessDays: number = deltaD;
        const timeOfDay: number = deltaTime;
        const date = businessDays[deltaBusinessDays - 1];
        const AmOrPm = timeOfDay >= 12 ? 'pm' : 'am';
        const hourF = timeOfDay % 12 || 12;
        const formatter = new Intl.DateTimeFormat('en', { month: 'short' });
        const month = date.split('-');
        const month2 = formatter.format(new Date(`${month[0]} ${month[1]} ${month[2]}`));

        order[orderPromise] = `${month2} ${month[2]} at ${hourF}${AmOrPm}`;
    } else if (type === 'NULL') {
        order[orderPromise] = null;
    }

    return order;
};

const validate = async (order: Order, workingCase: any, businessDays: string[]) => {
    order = await setPromise(
        businessDays,
        workingCase.packPromise.min.type,
        order,
        'pack_promise_min',
        workingCase.packPromise.min.deltaHours,
        workingCase.packPromise.min.deltaBusinessDays,
        workingCase.packPromise.min.timeOfDay
    );

    order = await setPromise(
        businessDays,
        workingCase.packPromise.max.type,
        order,
        'pack_promise_max',
        workingCase.packPromise.max.deltaHours,
        workingCase.packPromise.max.deltaBusinessDays,
        workingCase.packPromise.max.timeOfDay
    );

    order = await setPromise(
        businessDays,
        workingCase.shipPromise.min.type,
        order,
        'ship_promise_min',
        workingCase.shipPromise.min.deltaHours,
        workingCase.shipPromise.min.deltaBusinessDays,
        workingCase.shipPromise.min.timeOfDay
    );

    order = await setPromise(
        businessDays,
        workingCase.shipPromise.max.type,
        order,
        'ship_promise_max',
        workingCase.shipPromise.max.deltaHours,
        workingCase.shipPromise.max.deltaBusinessDays,
        workingCase.shipPromise.max.timeOfDay
    );

    order = await setPromise(
        businessDays,
        workingCase.deliveryPromise.min.type,
        order,
        'delivery_promise_min',
        workingCase.deliveryPromise.min.deltaHours,
        workingCase.deliveryPromise.min.deltaBusinessDays,
        workingCase.deliveryPromise.min.timeOfDay
    );

    order = await setPromise(
        businessDays,
        workingCase.deliveryPromise.max.type,
        order,
        'delivery_promise_max',
        workingCase.deliveryPromise.max.deltaHours,
        workingCase.deliveryPromise.max.deltaBusinessDays,
        workingCase.deliveryPromise.max.timeOfDay
    );

    order = await setPromise(
        businessDays,
        workingCase.readyPickUpPromise.min.type,
        order,
        'ready_pickup_promise_min',
        workingCase.readyPickUpPromise.min.deltaHours,
        workingCase.readyPickUpPromise.min.deltaBusinessDays,
        workingCase.readyPickUpPromise.min.timeOfDay
    );

    order = await setPromise(
        businessDays,
        workingCase.readyPickUpPromise.max.type,
        order,
        'ready_pickup_promise_max',
        workingCase.readyPickUpPromise.max.deltaHours,
        workingCase.readyPickUpPromise.max.deltaBusinessDays,
        workingCase.readyPickUpPromise.max.timeOfDay
    );

    return order;
};

export default { validate };
