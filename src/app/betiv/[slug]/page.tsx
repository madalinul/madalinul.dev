'use client';

import { useAvoidButton } from '@/hooks/useAvoidButton';
import Image from 'next/image';
import { use, useEffect, useState } from 'react';
import './style.css';

const bottles = [
    { id: 1, delay: 0, left: 5, size: 60, duration: 10 },
    { id: 2, delay: 2, left: 15, size: 90, duration: 12 },
    { id: 3, delay: 1, left: 25, size: 70, duration: 9 },
    { id: 4, delay: 3, left: 35, size: 100, duration: 14 },
    { id: 5, delay: 0.5, left: 45, size: 56, duration: 11 },
    { id: 6, delay: 4, left: 55, size: 80, duration: 13 },
    { id: 7, delay: 1.5, left: 65, size: 64, duration: 10 },
    { id: 8, delay: 2.5, left: 75, size: 96, duration: 12 },
    { id: 9, delay: 0.8, left: 85, size: 76, duration: 9 },
    { id: 10, delay: 3.5, left: 95, size: 84, duration: 11 },
    { id: 11, delay: 1.2, left: 10, size: 68, duration: 13 },
    { id: 12, delay: 2.8, left: 30, size: 92, duration: 10 },
    { id: 13, delay: 0.3, left: 50, size: 60, duration: 14 },
    { id: 14, delay: 4.2, left: 70, size: 104, duration: 12 },
    { id: 15, delay: 1.8, left: 90, size: 72, duration: 9 },
];

function FloatingBottle({
    delay,
    left,
    size,
    duration,
}: {
    delay: number;
    left: number;
    size: number;
    duration: number;
}) {
    return (
        <div
            className='absolute animate-float opacity-70'
            style={{
                left: `${left}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
                bottom: '-50px',
            }}
        >
            <Image
                src='/img/heineken-bottle.jpg'
                alt='Heineken bottle'
                width={size}
                height={size * 2}
            />
        </div>
    );
}

export default function BeerPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const capitalizedSlug = slug.charAt(0).toUpperCase() + slug.slice(1);
    const [answered, setAnswered] = useState<'yes' | 'no' | null>(null);
    const { buttonRef, position } = useAvoidButton();

    useEffect(() => {
        document.title = `Betiv - ${capitalizedSlug}`;
    }, [capitalizedSlug]);

    return (
        <main className='relative min-h-screen overflow-hidden bg-gradient-to-b from-green-100 via-emerald-100 to-green-200 select-none'>
            {/* Floating Beers Background */}
            <div className='absolute inset-0 overflow-hidden pointer-events-none'>
                {bottles.map((bottle) => (
                    <FloatingBottle
                        key={bottle.id}
                        delay={bottle.delay}
                        left={bottle.left}
                        size={bottle.size}
                        duration={bottle.duration}
                    />
                ))}
            </div>

            {/* Main Content */}
            <div className='relative z-10 flex flex-col items-center justify-center min-h-screen px-4'>
                <div className='text-center space-y-8'>
                    {/* Decorative Bottles */}
                    <div className='flex justify-center items-end gap-4 mb-4'>
                        <Image
                            src='/img/heineken-bottle.jpg'
                            alt='Heineken bottle'
                            width={140}
                            height={280}
                            className='animate-pulse'
                        />
                        <Image
                            src='/img/heineken-bottle.jpg'
                            alt='Heineken bottle'
                            width={180}
                            height={360}
                            className='animate-pulse'
                            style={{ animationDelay: '0.2s' }}
                        />
                        <Image
                            src='/img/heineken-bottle.jpg'
                            alt='Heineken bottle'
                            width={140}
                            height={280}
                            className='animate-pulse'
                            style={{ animationDelay: '0.4s' }}
                        />
                    </div>

                    {/* Question */}
                    <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold text-green-950 text-balance leading-tight'>
                        Este{' '}
                        <span className='text-4xl md:text-6xl lg:text-7xl font-extrabold'>
                            {capitalizedSlug}
                        </span>{' '}
                        cel mai mare betiv?
                    </h1>

                    {/* Buttons */}
                    <div className='flex flex-col sm:flex-row gap-4 justify-center mt-8'>
                        {answered === null ? (
                            <>
                                <button
                                    onClick={() => setAnswered('yes')}
                                    className='px-12 py-4 text-xl font-semibold bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer'
                                >
                                    DA
                                </button>
                                <button
                                    ref={buttonRef}
                                    className='px-12 py-4 text-xl font-semibold border-2 border-green-500 text-green-700 hover:bg-green-50 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-white cursor-pointer'
                                    style={{
                                        transform: `translate(${position.x}px, ${position.y}px)`,
                                        transition: 'transform 0.3s ease-out',
                                    }}
                                >
                                    NU
                                </button>
                            </>
                        ) : (
                            <div className='space-y-4 animate-in fade-in duration-500'>
                                <p className='text-2xl md:text-3xl text-green-800 font-medium'>
                                    Stiam! Este un betiv notoriu! 🍺
                                </p>
                                <div className='flex justify-center gap-2'>
                                    {[...Array(5)].map((_, i) => (
                                        <Image
                                            key={i}
                                            src='/img/heineken-bottle.jpg'
                                            alt='Heineken bottle'
                                            width={48}
                                            height={96}
                                            className='animate-bounce'
                                            style={{ animationDelay: `${i * 0.1}s` }}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
