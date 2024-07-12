import React, { useState, useEffect } from 'react';

const TimeNow = () => {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString())

    const setTime = () => {
        setCurrentTime(new Date().toLocaleTimeString());
    }

    useEffect(() => {
        let handlerTime = setInterval(setTime, 1000);
        return () => {
            clearInterval(handlerTime);
        }
    }, [])

    return (
        <>
            <div>
                <h1>{currentTime}</h1>
            </div>
        </>
    );
}

export default TimeNow;