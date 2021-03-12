const get = (offDays: string[]): string[] => {
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

    return nextBusinessDays;
};

export default { get };
