import { useQuery } from '@tanstack/react-query';
import { getPublicHolidays } from '../api/openHolidays';

export const useGetPublicHolidays = (countryIsoCode: string) => {
    const query = useQuery({
        queryKey: ['public-holidays', countryIsoCode],
        enabled: !!countryIsoCode,
        queryFn: () => getPublicHolidays(countryIsoCode),
    });

    return query;
};
