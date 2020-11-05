import {useCallback, useContext, useEffect, useRef, useState} from 'react';
import {NavContext} from "../Context";

export function useLocation(id) {

    if(id === undefined) id = 'home';

    const dom = useRef();
    //const [items, setItems] = useContext(NavContext);

    const handleScroll = useCallback(([entry]) => {
        if (entry.isIntersecting) {
            /*setItems(items
                .filter(item => !item.scrolling)
                .map(item => (
                item.href === id
                    ? {...item, active: true}
                    : {...item, active: false}
            )));
            items.map(item => console.log(item.scrolling));*/
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