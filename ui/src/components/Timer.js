import React, { useState, useEffect, useRef } from 'react';

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [time, setTime] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isPause, setIsPause] = useState(false);
    const timerRef = useRef(null);

    const handleStart = () => {
        setTime(seconds);
        setIsActive(true);
        setIsPause(false);
    }

    const handleStop = () => {
        clearInterval(timerRef.current);
        setIsActive(false);
        setIsPause(false);
        setTime(0);
        setSeconds(0);
    }

    const handlePause = () => {
        setIsPause(!isPause);
    }

    useEffect(() => {
        if (isActive && !isPause) {
            timerRef.current = setInterval(() => {
                setTime((prev) => (prev > 0 ? prev - 1 : 0))
            }, 1000);
        } else if (!isActive && time !== 0 && !isPause) {
            clearInterval(timerRef.current);
        }
        return () => clearInterval(timerRef.current)
    }, [isActive, isPause, time]);

    const inputStyle = {
        padding: '10px',
        fontSize: '16px',
        marginRight: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        outline: 'none',
        width: '100px'
    };

    const buttonStyle = {
        padding: '10px 20px',
        fontSize: '16px',
        margin: '10px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
    };

    const startButtonStyle = {
        ...buttonStyle,
        backgroundColor: 'green',
        color: 'white'
    };

    const pauseButtonStyle = {
        ...buttonStyle,
        backgroundColor: 'orange',
        color: 'white'
    };

    const stopButtonStyle = {
        ...buttonStyle,
        backgroundColor: 'red',
        color: 'white'
    };

    return (
        <>
            <div>
                <input
                    type='number'
                    value={seconds}
                    onChange={(e) => setSeconds(e.target.value)}
                    disabled={isActive}
                    style={inputStyle}
                />
                <button
                    onClick={handleStart}
                    style={startButtonStyle}
                >
                    Start
                </button>
                <button
                    onClick={handlePause}
                    disabled={!isActive}
                    style={pauseButtonStyle}
                >
                    {isPause ? 'Resume' : 'Pause'}
                </button>
                <button
                    onClick={handleStop}
                    style={stopButtonStyle}
                >
                    Stop
                </button>
                <div>
                    <h1>Time Left : {time}</h1>
                </div>
            </div>
        </>
    );
}

export default Timer;
