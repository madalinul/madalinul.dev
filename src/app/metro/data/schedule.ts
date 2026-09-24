// Departure times, keyed by hour, as listed on the station timetable.
const rawSchedule: Record<number, number[]> = {
    4: [50],
    5: [8, 25, 44, 58],
    6: [8, 18, 32, 44, 55],
    7: [7, 19, 30, 42, 54],
    8: [6, 18, 30, 42, 54],
    9: [6, 18, 30, 42, 56],
    10: [12, 31, 49],
    11: [7, 25, 43],
    12: [1, 19, 37, 54],
    13: [5, 15, 27, 39, 51],
    14: [3, 15, 27, 39, 51],
    15: [3, 15, 27, 39, 51],
    16: [3, 15, 27, 38, 51],
    17: [3, 15, 27, 39, 51],
    18: [3, 15, 27, 39, 51],
    19: [3, 15, 27, 39, 55],
    20: [11, 29, 47],
    21: [5, 23, 41, 59],
    22: [17, 35, 53],
    23: [11, 27],
};

// Departures as minutes since midnight, sorted ascending.
export const departures: number[] = Object.entries(rawSchedule)
    .flatMap(([hour, minutes]) => minutes.map((minute) => Number(hour) * 60 + minute))
    .sort((a, b) => a - b);
