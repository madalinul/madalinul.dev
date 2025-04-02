import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Experience } from '../data/developer';

type ExperienceCardProps = {
    experience: Experience;
};

export const ExperienceCard = ({ experience }: ExperienceCardProps) => (
    <div className='transition duration-300 ease-in-out transform hover:scale-105'>
        <Card className='p-6 rounded-2xl shadow-md border mb-6'>
            <div className='flex items-center space-x-4 mb-4'>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={experience.image}
                    alt={experience.company}
                    className='w-16 h-16 rounded-full'
                />
                <div>
                    <h3 className='text-2xl font-semibold text-gray-900'>{experience.role}</h3>
                    <h4 className='text-lg text-primary font-medium'>{experience.company}</h4>
                </div>
            </div>
            <p className='text-sm text-muted-foreground mb-2'>
                {experience.duration} | {experience.location}
            </p>
            <ul className='list-disc list-inside space-y-1 text-sm text-gray-700'>
                {experience.description.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>
            <Button variant='link' className='mt-4 p-0 text-blue-500' asChild>
                <a href={experience.link}>View Project</a>
            </Button>
        </Card>
    </div>
);
