import { Combobox } from '@/components/ui/comobox';
import { getPublicHolidays } from './api';

const PublicHolidaysPage = async () => {
    const holidays = await getPublicHolidays();

    return (
        <div className='container mx-auto flex flex-col items-center justify-center py-12 space-y-6'>
            <h1 className='text-4xl font-bold'>Public Holidays</h1>
            <Combobox options={holidays} />
        </div>
    );
};

export default PublicHolidaysPage;
