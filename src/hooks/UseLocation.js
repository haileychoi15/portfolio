import {useCallback, useEffect, useRef } from 'react';

export function useLocation(id) {

    if(id === undefined) id = 'home';

    const dom = useRef();

    const handleScroll = useCallback(([entry]) => {
        const { current } = dom;
        if (entry.isIntersecting) {
            const navs = document.querySelectorAll('.nav-item');
            navs.forEach(item => {
                item.classList.remove('active');
                if(item.classList.contains(current.id)) {
                    item.classList.add('active');
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
        ref: dom,
        id: id
    };
}