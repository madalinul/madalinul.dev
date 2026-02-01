'use client';

import { useAvoidButton } from '@/hooks/useAvoidButton';
import { Heart } from 'lucide-react';
import { use, useEffect, useState } from 'react';
import './style.css';

export default function IubitPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const capitalizedSlug = slug.charAt(0).toUpperCase() + slug.slice(1);
    const [answered, setAnswered] = useState<'yes' | 'no' | null>(null);
    const { buttonRef, position } = useAvoidButton();

    useEffect(() => {
        document.title = `Iubit - ${capitalizedSlug}`;
    }, [capitalizedSlug]);

    return (
        <main className='fixed inset-0 h-screen w-screen overflow-hidden bg-gradient-to-b from-rose-100 via-pink-100 to-red-100 select-none'>
            {/* Floating Hearts Background */}
            <div className='absolute inset-0 overflow-hidden pointer-events-none'>
                {hearts.map((heart) => (
                    <FloatingHeart
                        key={heart.id}
                        delay={heart.delay}
                        left={heart.left}
                        size={heart.size}
                        duration={heart.duration}
                    />
                ))}
            </div>

            {/* Main Content */}
            <div className='relative z-10 flex flex-col items-center justify-center min-h-screen px-4'>
                <div className='text-center space-y-8'>
                    {/* Decorative Hearts */}
                    <div className='flex justify-center gap-4 mb-4'>
                        <Heart className='w-8 h-8 text-red-500 fill-red-500 animate-pulse' />
                        <Heart
                            className='w-10 h-10 text-pink-500 fill-pink-500 animate-pulse'
                            style={{ animationDelay: '0.2s' }}
                        />
                        <Heart
                            className='w-8 h-8 text-red-500 fill-red-500 animate-pulse'
                            style={{ animationDelay: '0.4s' }}
                        />
                    </div>

                    {/* Question */}
                    <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold text-rose-800 text-balance leading-tight'>
                        Este{' '}
                        <span className='text-4xl md:text-6xl lg:text-7xl font-extrabold'>
                            {capitalizedSlug}
                        </span>{' '}
                        cel mai bun iubit?
                    </h1>

                    {/* Buttons */}
                    <div className='flex flex-col sm:flex-row gap-4 justify-center mt-8'>
                        {answered === null ? (
                            <>
                                <button
                                    onClick={() => setAnswered('yes')}
                                    className='px-12 py-4 text-xl font-semibold bg-red-500 hover:bg-red-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer'
                                >
                                    DA
                                </button>
                                <button
                                    ref={buttonRef}
                                    className='px-12 py-4 text-xl font-semibold border-2 border-red-400 text-red-600 hover:bg-red-50 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-white cursor-pointer'
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
                                <p className='text-2xl md:text-3xl text-rose-700 font-medium'>
                                    Stiam! Este cel mai bun! 💕
                                </p>
                                <div className='flex justify-center gap-2'>
                                    {[...Array(5)].map((_, i) => (
                                        <Heart
                                            key={i}
                                            className='w-8 h-8 text-red-500 fill-red-500 animate-bounce'
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

function FloatingHeart({
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
            className='absolute animate-float text-pink-400 opacity-60'
            style={{
                left: `${left}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
                bottom: '-50px',
            }}
        >
            <Heart className='fill-current' style={{ width: size, height: size }} />
        </div>
    );
}

const hearts = [
    { id: 1, delay: 0, left: 5, size: 20, duration: 10 },
    { id: 2, delay: 2, left: 15, size: 35, duration: 12 },
    { id: 3, delay: 1, left: 25, size: 25, duration: 9 },
    { id: 4, delay: 3, left: 35, size: 40, duration: 14 },
    { id: 5, delay: 0.5, left: 45, size: 18, duration: 11 },
    { id: 6, delay: 4, left: 55, size: 30, duration: 13 },
    { id: 7, delay: 1.5, left: 65, size: 22, duration: 10 },
    { id: 8, delay: 2.5, left: 75, size: 38, duration: 12 },
    { id: 9, delay: 0.8, left: 85, size: 28, duration: 9 },
    { id: 10, delay: 3.5, left: 95, size: 32, duration: 11 },
    { id: 11, delay: 1.2, left: 10, size: 24, duration: 13 },
    { id: 12, delay: 2.8, left: 30, size: 36, duration: 10 },
    { id: 13, delay: 0.3, left: 50, size: 20, duration: 14 },
    { id: 14, delay: 4.2, left: 70, size: 42, duration: 12 },
    { id: 15, delay: 1.8, left: 90, size: 26, duration: 9 },
];
