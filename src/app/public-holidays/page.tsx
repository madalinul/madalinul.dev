import { getSupportedCountries } from './api/openHolidays';
import { PublicHolidaysContainer } from './components/PublicHolidays';

const PublicHolidaysPage = async () => {
    const countries = await getSupportedCountries();

    return (
        <div className='container mx-auto flex flex-col items-center justify-center py-12 space-y-6'>
            <h1 className='text-4xl font-bold'>Public Holidays</h1>
            <PublicHolidaysContainer countries={countries} />
        </div>
    );
};

export default PublicHolidaysPage;
