import { useEffect, useRef, useState } from 'react';

export function useAvoidButton() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const buttonRef = useRef<HTMLButtonElement>(null);
    const initialPositionRef = useRef<{ x: number; y: number } | null>(null);
    const isAtTopRef = useRef(false);

    useEffect(() => {
        const moveButton = (clientX: number, clientY: number) => {
            if (!buttonRef.current) return;

            const buttonRect = buttonRef.current.getBoundingClientRect();

            // Store initial position
            if (!initialPositionRef.current) {
                initialPositionRef.current = {
                    x: buttonRect.left,
                    y: buttonRect.top,
                };
            }

            const buttonCenterX = buttonRect.left + buttonRect.width / 2;
            const buttonCenterY = buttonRect.top + buttonRect.height / 2;

            const distanceX = clientX - buttonCenterX;
            const distanceY = clientY - buttonCenterY;
            const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

            // If cursor/touch is within 150px, jump to top or bottom
            if (distance < 150) {
                // Alternate between top and bottom of the page
                const horizontalPadding = 20; // Fixed padding for horizontal to prevent going off screen
                const minVerticalPadding = 20;
                const maxVerticalPadding = 200;
                const verticalPadding =
                    Math.random() * (maxVerticalPadding - minVerticalPadding) + minVerticalPadding;

                const randomX =
                    Math.random() * (window.innerWidth - buttonRect.width - horizontalPadding * 2) +
                    horizontalPadding;
                let targetY: number;

                if (isAtTopRef.current) {
                    // Jump to bottom
                    targetY = window.innerHeight - buttonRect.height - verticalPadding;
                } else {
                    // Jump to top
                    targetY = verticalPadding;
                }

                isAtTopRef.current = !isAtTopRef.current;

                // Calculate offset from initial position
                setPosition({
                    x: randomX - initialPositionRef.current.x,
                    y: targetY - initialPositionRef.current.y,
                });
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            moveButton(e.clientX, e.clientY);
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (e.touches.length > 0) {
                moveButton(e.touches[0].clientX, e.touches[0].clientY);
            }
        };

        const handleTouchStart = (e: TouchEvent) => {
            if (e.touches.length > 0) {
                moveButton(e.touches[0].clientX, e.touches[0].clientY);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchmove', handleTouchMove, { passive: true });
        window.addEventListener('touchstart', handleTouchStart, { passive: true });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchstart', handleTouchStart);
        };
    }, []);

    return { buttonRef, position };
}
