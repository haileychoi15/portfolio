import {createContext} from 'react';

const direction = 'up'
const distance = 300;
const initialItems = [{
    direction,
    distance,
    delay: '2',
    href: 'home',
    active: true,
    scrolling: false,
    text: 'home'
},
    {
        direction,
        distance,
        delay: '2.2',
        href: 'first',
        active: false,
        scrolling: false,
        text: '01'
    },
    {
        direction,
        distance,
        delay: '2.4',
        href: 'second',
        active: false,
        scrolling: false,
        text: '02'
    },
    {
        direction,
        distance,
        delay: '2.6',
        href: 'third',
        active: false,
        scrolling: false,
        text: '03'
    }];

export const NavContext = createContext(initialItems);