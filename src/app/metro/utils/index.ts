import { departures } from '../data/schedule';

const TIME_ZONE = 'Europe/Bucharest';
export const MINUTES_IN_DAY = 24 * 60;
export const FIRST_DEPARTURE = departures[0];
export const LAST_DEPARTURE = departures[departures.length - 1];

// No service between the last train leaving and the first train of the next day.
export const isClosed = (now: number) => now > LAST_DEPARTURE || now < FIRST_DEPARTURE;

// Current time in Bucharest as minutes since midnight, regardless of the device's timezone.
export const getNowInMinutes = () => {
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
export const getUpcoming = (now: number, count: number) => {
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

export const formatClock = (minutes: number) =>
    `${String(Math.floor(minutes / 60)).padStart(2, '0')}:${String(minutes % 60).padStart(2, '0')}`;

export const formatWait = (minutes: number) => {
    if (minutes === 0) return 'now';
    if (minutes < 60) return `${minutes} min`;
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return m === 0 ? `${h} h` : `${h} h ${m} min`;
};

// Parses "HH:MM" into minutes since midnight, or null if it isn't a valid time.
export const parseClock = (value: string | undefined) => {
    const match = value?.match(/^(\d{1,2}):(\d{2})$/);
    if (!match) return null;
    const minutes = Number(match[1]) * 60 + Number(match[2]);
    return minutes < MINUTES_IN_DAY ? minutes : null;
};
