'use client';
import { Combobox, ComboboxOption } from '@/components/ui/comobox';
import { useState } from 'react';
import { useGetPublicHolidays } from '../hooks/useGetPublicHolidays';
import { HolidaysGrid } from './HolidaysGrid';
import QueryProvider from './QueryProvider';
import { YearSelector } from './YearSelector';

type PublicHolidayProps = {
    countries: ComboboxOption[];
};

const defaultYear = new Date().getFullYear();

export const PublicHolidays = ({ countries }: PublicHolidayProps) => {
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedYear, setSelectedYear] = useState(defaultYear);
    const { data } = useGetPublicHolidays(selectedCountry, selectedYear);

    return (
        <div className='w-full'>
            <div className='flex flex-col items-center justify-center gap-4'>
                <div className='flex flex-col md:flex-row items-center justify-center gap-6 pb-2'>
                    <Combobox
                        options={countries}
                        onChange={(value: string) => setSelectedCountry(value)}
                        selectOptionText='Select country'
                        searchOptionsText='Search country ...'
                    />
                    <YearSelector
                        defaultYear={defaultYear}
                        onYearChange={(year) => setSelectedYear(year)}
                    />
                </div>
            </div>
            {data && <HolidaysGrid countryIsoCode={selectedCountry} holidays={data} />}
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
