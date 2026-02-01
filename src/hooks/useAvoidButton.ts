import { useEffect, useRef, useState } from 'react';

export function useAvoidButton() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const buttonRef = useRef<HTMLButtonElement>(null);
    const initialPositionRef = useRef<{ x: number; y: number } | null>(null);

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

            // If cursor/touch is within 150px, jump to random position
            if (distance < 150) {
                // Generate random position anywhere on screen
                const maxX = window.innerWidth - buttonRect.width - 20;
                const maxY = window.innerHeight - buttonRect.height - 20;

                const minDistance = 300; // Minimum distance from current position
                const minDistanceFromInitial = 250; // Minimum distance from initial area to avoid overlapping with other buttons
                let randomX: number;
                let randomY: number;
                let attempts = 0;

                // Keep generating random positions until we find one far enough away
                do {
                    randomX = Math.random() * maxX + 10;
                    randomY = Math.random() * maxY + 10;

                    const currentX = buttonRect.left;
                    const currentY = buttonRect.top;
                    const distToNew = Math.sqrt(
                        Math.pow(randomX - currentX, 2) + Math.pow(randomY - currentY, 2),
                    );

                    // Also check distance from initial position area to avoid overlapping with nearby buttons
                    const distFromInitial = Math.sqrt(
                        Math.pow(randomX - initialPositionRef.current.x, 2) +
                            Math.pow(randomY - initialPositionRef.current.y, 2),
                    );

                    if (distToNew >= minDistance && distFromInitial >= minDistanceFromInitial)
                        break;
                    attempts++;
                } while (attempts < 30);

                // Calculate offset from initial position
                setPosition({
                    x: randomX - initialPositionRef.current.x,
                    y: randomY - initialPositionRef.current.y,
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
