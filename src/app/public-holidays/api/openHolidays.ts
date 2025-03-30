import { paths } from './types';

type CountryResponse =
    paths['/Countries']['get']['responses']['200']['content']['application/json'];

export const getSupportedCountries = async () => {
    const response = await fetch('https://openholidaysapi.org/Countries', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data = (await response.json()) as CountryResponse;

    const holidays = data.map((country) => ({
        value: country.isoCode,
        label: country.name[0].text,
    }));

    return holidays;
};

export type PublicHolidaysResponse =
    paths['/PublicHolidays']['get']['responses']['200']['content']['application/json'];

const firstDate = new Date(new Date().getFullYear(), 0, 1);
const lastDate = new Date(new Date().getFullYear(), 11, 31);

export const getPublicHolidays = async (countryIsoCode: string) => {
    const response = await fetch(
        `https://openholidaysapi.org/PublicHolidays?countryIsoCode=${countryIsoCode}&validFrom=${
            firstDate.toISOString().split('T')[0]
        }&validTo=${lastDate.toISOString().split('T')[0]}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );

    const data = (await response.json()) as PublicHolidaysResponse;

    return data;
};
