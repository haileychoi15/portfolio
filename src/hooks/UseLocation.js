import {useCallback, useEffect, useRef } from 'react';

export function useLocation(id) {

    if(id === undefined) id = 'home';

    const dom = useRef();

    const handleScroll = useCallback(([entry]) => {
        if (entry.isIntersecting) {
            const items = document.querySelectorAll('.nav-item');
            items.forEach(item => {
                if (!item.classList.contains('scrolling')) {
                    item.classList.remove('active');
                    if(item.classList.contains(id)) item.classList.add('active');
                }
            });
        }
    }, []);

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
        ref: dom
    };
}