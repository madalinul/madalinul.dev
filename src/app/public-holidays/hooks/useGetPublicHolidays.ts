import { useQuery } from '@tanstack/react-query';
import { getPublicHolidays } from '../api/openHolidays';

export const useGetPublicHolidays = (countryIsoCode: string, selectedYear?: number) => {
    const query = useQuery({
        queryKey: ['public-holidays', countryIsoCode, selectedYear],
        enabled: !!countryIsoCode && !!selectedYear,
        queryFn: () => getPublicHolidays(countryIsoCode, selectedYear ?? new Date().getFullYear()),
    });

    return query;
};
