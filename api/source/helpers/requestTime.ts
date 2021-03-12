const validate = (dayType: string, fromTimeOfDay: number, toTimeOfDay: number, todayBusinessDay: boolean): boolean => {
    if (dayType === 'BUSINESS' && todayBusinessDay === false) {
        return false;
    }

    const now = new Date();
    const hour: number = now.getHours();

    return fromTimeOfDay <= hour && hour <= toTimeOfDay;
};

export default { validate };
