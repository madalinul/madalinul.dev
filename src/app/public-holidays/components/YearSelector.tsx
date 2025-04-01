'use client';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

interface YearSelectorProps {
    startYear?: number;
    endYear?: number;
    defaultYear?: number;
    onYearChange?: (year: number) => void;
    label?: string;
}

export function YearSelector({
    startYear = 2020,
    endYear = new Date().getFullYear(),
    defaultYear = new Date().getFullYear(),
    onYearChange,
    label = 'Select Year:',
}: YearSelectorProps) {
    const years = Array.from({ length: endYear - startYear + 1 }, (_, i) =>
        (startYear + i).toString()
    );

    const handleYearChange = (value: string) => {
        const year = Number.parseInt(value, 10);
        if (onYearChange) {
            onYearChange(year);
        }
    };

    return (
        <div className='flex items-center gap-3 overflow-x-auto'>
            <span className='text-sm font-medium whitespace-nowrap'>{label}</span>
            <Select defaultValue={defaultYear.toString()} onValueChange={handleYearChange}>
                <SelectTrigger className='w-[120px]'>
                    <SelectValue placeholder='Select year' />
                </SelectTrigger>
                <SelectContent>
                    {years.map((year) => (
                        <SelectItem key={year} value={year}>
                            {year}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
}
