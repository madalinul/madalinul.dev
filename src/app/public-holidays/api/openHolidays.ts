import { paths } from './types';

type CountryResponse =
    paths['/Countries']['get']['responses']['200']['content']['application/json'];

export const getSupportedCountries = async () => {
    const response = await fetch('https://openholidaysapi.org/Countries', {
        method: 'GET',
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

export const getPublicHolidays = async (countryIsoCode: string, year: number) => {
    const firstDate = new Date(year, 0, 1);
    const lastDate = new Date(year, 11, 31);
    const response = await fetch(
        `https://openholidaysapi.org/PublicHolidays?countryIsoCode=${countryIsoCode}&validFrom=${
            firstDate.toISOString().split('T')[0]
        }&validTo=${lastDate.toISOString().split('T')[0]}`,
        {
            method: 'GET',
        }
    );

    const data = (await response.json()) as PublicHolidaysResponse;

    return data;
};
