import type { Metadata } from 'next';
import { NextMetro } from './components/NextMetro';

export const metadata: Metadata = {
    title: 'Next Metro',
};

const MetroPage = () => {
    return (
        <div className='container mx-auto flex min-h-screen flex-col items-center justify-center p-6 space-y-6'>
            <h1 className='text-4xl font-bold'>😎</h1>
            <NextMetro />
        </div>
    );
};

export default MetroPage;
