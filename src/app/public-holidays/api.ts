export const getPublicHolidays = async () => {
    const response = await fetch('https://openholidaysapi.org/Countries', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data = await response.json();

    const holidays = data.map((country) => ({
        value: country.isoCode,
        label: country.name[0].text,
    }));

    return holidays;
};
