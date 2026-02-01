'use client';

import { useAvoidButton } from '@/hooks/useAvoidButton';

export default function NoButton() {
    const { buttonRef, position } = useAvoidButton();

    return (
        <button
            ref={buttonRef}
            className='px-12 py-4 text-xl font-semibold border-2 border-green-500 text-green-700 hover:bg-green-50 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-white cursor-pointer'
            style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
                transition: 'transform 0.3s ease-out',
            }}
        >
            No
        </button>
    );
}
