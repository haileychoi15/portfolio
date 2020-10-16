import { useCallback, useEffect, useRef} from 'react';

export function useAnimation (direction, delay, duration) {

    if(direction === undefined) direction = 'up';
    if(duration === undefined) duration = '1';
    if(delay === undefined) delay = '0';

    const dom = useRef();

    const handleDirection = direction => {
        switch (direction) {
            case 'up':
                return 'translate3d(0, 30%, 0)';
            case 'down':
                return 'translate3d(0, -30%, 0)';
            case 'left':
                return 'translate3d(30%, 0, 0)';
            case 'right':
                return 'translate3d(-30%, 0, 0)';
            default:
                return 'translate3d(0, 0, 0)';
        }
    };

    const handleScroll = useCallback(([entry]) => {
        const { current } = dom;
        if (entry.isIntersecting) {
            current.style.transitionProperty = 'opacity transform';
            current.style.transitionDuration = `${duration}s`;
            current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)';
            current.style.transitionDelay = `${delay}s`;
            current.style.opacity = 1;
            current.style.transform = 'translate3d(0, 0, 0)';
        }
    }, [delay, duration]);

    useEffect(() => {
        let observer;
        const { current } = dom;
        const options = { threshold: 0.7 };

        if (current) {
            observer = new IntersectionObserver(handleScroll, options);
            observer.observe(current);
        }
        return () => observer && observer.disconnect();

    }, [handleScroll]);

    return {
        ref: dom,
        style: {
            opacity: 0,
            transform: handleDirection(direction)
        }
    };
}