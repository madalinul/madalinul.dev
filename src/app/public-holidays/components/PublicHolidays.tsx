'use client';
import { Combobox, ComboboxOption } from '@/components/ui/comobox';
import { useState } from 'react';
import { useGetPublicHolidays } from '../hooks/useGetPublicHolidays';
import QueryProvider from './QueryProvider';

type PublicHolidayProps = {
    countries: ComboboxOption[];
};

export const PublicHolidays = ({ countries }: PublicHolidayProps) => {
    const [selectedCountry, setSelectedCountry] = useState('');
    const { data } = useGetPublicHolidays(selectedCountry);

    return (
        <div className='flex flex-col items-center justify-center gap-4'>
            <Combobox options={countries} onChange={(value: string) => setSelectedCountry(value)} />
            {data?.map((holiday) => (
                <div key={holiday.id}>{holiday.name[0].text}</div>
            ))}
        </div>
    );
};

export const PublicHolidaysContainer = ({ countries }: PublicHolidayProps) => {
    return (
        <QueryProvider>
            <PublicHolidays countries={countries} />
        </QueryProvider>
    );
};
