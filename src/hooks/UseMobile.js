import React, { useEffect, useState } from "react";

export function useMobile() {

    const [mobile, setMobile] = useState(false);
    const handleResize = (width) => {
        if(width < 768) setMobile(true);
        else setMobile(false);
    }

    useEffect(() => {
        window.addEventListener('load', e => {
            handleResize(e.currentTarget.innerWidth);
        })
        window.addEventListener('resize', e => {
            handleResize(e.target.innerWidth);
        })
    },[handleResize])

    return mobile;
}