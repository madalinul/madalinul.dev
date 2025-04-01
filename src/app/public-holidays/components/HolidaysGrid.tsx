import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarIcon } from 'lucide-react';
import { PublicHolidaysResponse } from '../api/openHolidays';
import { formatDate, getHolidayTypeColor } from '../utils';

type HolidaysGridProps = {
    holidays: PublicHolidaysResponse;
    countryIsoCode: string;
};

export const HolidaysGrid = ({ holidays, countryIsoCode }: HolidaysGridProps) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {holidays?.map((holiday) => (
                <Card key={holiday.id} className='overflow-hidden'>
                    <CardHeader className='pb-2'>
                        <div className='flex justify-between items-start'>
                            <CardTitle className='text-lg'>{holiday.name[0].text}</CardTitle>
                            <Badge className={getHolidayTypeColor(holiday.type)}>
                                {holiday.type.charAt(0).toUpperCase() + holiday.type.slice(1)}
                            </Badge>
                        </div>
                        <CardDescription className='flex items-center mt-1'>
                            <CalendarIcon className='h-4 w-4 mr-1' />
                            {formatDate(holiday.startDate, countryIsoCode)}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className='text-sm text-muted-foreground'>{holiday.comment?.[0].text}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};
