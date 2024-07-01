import React, { useState, useEffect } from 'react';
const Stoplight = ({ startLight }) => {
    const [currentLight, setCurrentLight] = useState(startLight);

    useEffect(() => {
        const lightOrder = ['red', 'yellow', 'green'];
        const currentIndex = lightOrder.indexOf(currentLight);

        const timer = setTimeout(() => {
            setCurrentLight(lightOrder[(currentIndex + 1) % lightOrder.length]);
        }, 1000);

        return () => clearTimeout(timer);
    }, [currentLight]);

    return (
        <div className="traffic-light">
            <div className={`light red ${currentLight === 'red' ? 'active' : ''}`}></div>
            <div className={`light yellow ${currentLight === 'yellow' ? 'active' : ''}`}></div>
            <div className={`light green ${currentLight === 'green' ? 'active' : ''}`}></div>
        </div>
    );
}
export default Stoplight;