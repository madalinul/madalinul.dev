import { Metadata } from 'next';
import { Portfolio } from './components/Portofolio';
import { developer } from './data/developer';

export const metadata: Metadata = {
    title: developer.name,
};

export default function Home() {
    return <Portfolio />;
}
