import { Separator } from '@/components/ui/separator';
import { Github, Linkedin } from 'lucide-react';
import { developer, experiences } from '../data/developer';
import { ExperienceCard } from './ExperienceCard';

export const Portfolio = () => {
    return (
        <div className='min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-8'>
            <header className='text-center mb-10'>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={developer.image}
                    alt='Developer'
                    width={128}
                    height={128}
                    className='w-32 h-32 rounded-full mx-auto mb-4'
                />
                <h1 className='text-4xl font-extrabold text-gray-800'>{developer.name}</h1>
                <p className='text-muted-foreground mt-2 max-w-xl mx-auto'>
                    {developer.description}
                </p>
                <div className='flex justify-center items-center gap-6 mt-4'>
                    <a
                        href={developer.github}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-gray-600 hover:text-black'
                    >
                        <Github size={28} />
                    </a>
                    <a
                        href={developer.linkedin}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-gray-600 hover:text-blue-700'
                    >
                        <Linkedin size={28} />
                    </a>
                </div>
            </header>
            <Separator className='my-6' />
            <div className='max-w-4xl mx-auto space-y-6'>
                {experiences.map((exp, index) => (
                    <ExperienceCard key={index} experience={exp} />
                ))}
            </div>
        </div>
    );
};
