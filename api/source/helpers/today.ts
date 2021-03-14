const check = (offDays: string[]): boolean => {
    const today = Date.now();
    const day = new Intl.DateTimeFormat('fr-CA', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(today);

    return new Date(today).getDay() !== 6 && !offDays.includes(day);
};

export default { check };
