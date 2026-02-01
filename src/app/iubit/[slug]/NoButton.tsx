'use client';

import { useAvoidButton } from '@/hooks/useAvoidButton';

export default function NoButton() {
    const { buttonRef, position } = useAvoidButton();

    return (
        <button
            ref={buttonRef}
            className='px-12 py-4 text-xl font-semibold border-2 border-red-400 text-red-600 hover:bg-red-50 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-white cursor-pointer'
            style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
                transition: 'transform 0.3s ease-out',
            }}
        >
            Nu
        </button>
    );
}
