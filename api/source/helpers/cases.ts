import requestTime from './requestTime';

const checkPriority = (casesList: any[], priority: number): any => {
    const selected = casesList.filter((item) => item.priority === priority)[0];

    return selected;
};

const validate = (casesList: any[], todayBusinessDay: boolean) => {
    let priority: number = 1;

    let selected = false;
    let selectedCase;

    while (!selected) {
        const found = checkPriority(casesList, priority);

        if (!found) {
            return false;
        }

        const { dayType, fromTimeOfDay, toTimeOfDay } = found.condition.byRequestTime;

        if (requestTime.validate(dayType, fromTimeOfDay, toTimeOfDay, todayBusinessDay)) {
            selected = true;
            selectedCase = found;
        } else {
            priority++;
        };
    };

    return selectedCase;
};

export default { validate };