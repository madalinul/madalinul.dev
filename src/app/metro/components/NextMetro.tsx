'use client';

import { useEffect, useState } from 'react';
import { departures } from '../data/schedule';

const TIME_ZONE = 'Europe/Bucharest';
const MINUTES_IN_DAY = 24 * 60;
const UPCOMING_COUNT = 4;
const FIRST_DEPARTURE = departures[0];
const LAST_DEPARTURE = departures[departures.length - 1];

// No service between the last train leaving and the first train of the next day.
const isClosed = (now: number) => now > LAST_DEPARTURE || now < FIRST_DEPARTURE;

// Current time in Bucharest as minutes since midnight, regardless of the device's timezone.
const getNowInMinutes = () => {
    const parts = new Intl.DateTimeFormat('en-GB', {
        timeZone: TIME_ZONE,
        hour: '2-digit',
        minute: '2-digit',
        hourCycle: 'h23',
    }).formatToParts(new Date());
    const hour = Number(parts.find((p) => p.type === 'hour')?.value);
    const minute = Number(parts.find((p) => p.type === 'minute')?.value);
    return hour * 60 + minute;
};

// Next departures from `now`, wrapping around to the next day after the last train.
const getUpcoming = (now: number, count: number) => {
    const startIndex = departures.findIndex((d) => d >= now);
    const upcoming: { time: number; waitMinutes: number }[] = [];
    for (let i = 0; i < count; i++) {
        const index = startIndex === -1 ? i : startIndex + i;
        const time = departures[index % departures.length];
        const dayOffset = Math.floor(index / departures.length) + (startIndex === -1 ? 1 : 0);
        upcoming.push({ time, waitMinutes: time + dayOffset * MINUTES_IN_DAY - now });
    }
    return upcoming;
};

const formatClock = (minutes: number) =>
    `${String(Math.floor(minutes / 60)).padStart(2, '0')}:${String(minutes % 60).padStart(2, '0')}`;

const formatWait = (minutes: number) => {
    if (minutes === 0) return 'now';
    if (minutes < 60) return `${minutes} min`;
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return m === 0 ? `${h} h` : `${h} h ${m} min`;
};

export const NextMetro = () => {
    const [now, setNow] = useState<number | null>(null);

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>;

        // For testing: `?time=HH:MM` starts the clock at that time and lets it run from there.
        const simulated = new URLSearchParams(window.location.search).get('time')?.match(/^(\d{1,2}):(\d{2})$/);
        const offset = simulated
            ? Number(simulated[1]) * 60 + Number(simulated[2]) - getNowInMinutes()
            : 0;

        const tick = () => {
            const current = (getNowInMinutes() + offset + MINUTES_IN_DAY) % MINUTES_IN_DAY;
            setNow(current);

            // Wake at the start of the next minute, or when service resumes if closed.
            const minutesUntilNextTick = isClosed(current)
                ? (FIRST_DEPARTURE - current + MINUTES_IN_DAY) % MINUTES_IN_DAY
                : 1;
            timeout = setTimeout(tick, minutesUntilNextTick * 60_000 - (Date.now() % 60_000));
        };
        tick();

        return () => clearTimeout(timeout);
    }, []);

    if (now === null) return null;

    if (isClosed(now)) {
        return (
            <div className='flex flex-col items-center gap-2'>
                <span className='text-sm uppercase tracking-wide text-muted-foreground'>
                    No more trains today
                </span>
                <span className='text-lg text-muted-foreground'>
                    First metro at {formatClock(FIRST_DEPARTURE)}
                </span>
            </div>
        );
    }

    const [next, ...later] = getUpcoming(now, UPCOMING_COUNT);

    return (
        <div className='flex flex-col items-center gap-8 w-full max-w-sm'>
            <div className='flex flex-col items-center gap-2'>
                <span className='text-sm uppercase tracking-wide text-muted-foreground'>
                    Next metro in
                </span>
                <span className='text-7xl font-bold tabular-nums'>{formatWait(next.waitMinutes)}</span>
                <span className='text-lg text-muted-foreground'>at {formatClock(next.time)}</span>
            </div>
            <ul className='w-full divide-y border rounded-lg'>
                {later.map((d) => (
                    <li key={d.time} className='flex justify-between px-4 py-3 tabular-nums'>
                        <span>{formatClock(d.time)}</span>
                        <span className='text-muted-foreground'>in {formatWait(d.waitMinutes)}</span>
                    </li>
                ))}
            </ul>
            <span className='text-xs text-muted-foreground'>Now {formatClock(now)}</span>
        </div>
    );
};
