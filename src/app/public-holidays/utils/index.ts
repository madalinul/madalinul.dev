import { components } from '../api/types';

export function formatDate(dateString: string, countryIsoCode: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString(countryIsoCode, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

// Get the badge color based on holiday type
export function getHolidayTypeColor(type: components['schemas']['HolidayType']): string {
    switch (type) {
        case 'Public':
            return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
        case 'Bank':
            return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
        case 'Optional':
            return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
        case 'School':
            return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
        default:
            return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    }
}
