import React, { useState, useEffect } from 'react';


const TimeApi = () => {
    const [time, setTime] = useState(null);
    const [error, setError] = useState(null);
    const [mode, setMode] = useState('short');
    useEffect(() => {
        const fetchTime = async () => {
            try {
                const resp = await fetch('http://worldtimeapi.org/api/timezone/Europe/Kyiv');
                const data = await resp.json();
                setTime(new Date(data.datetime));
            }
            catch (err) {
                setError('Error fetching');
            }
        };

        fetchTime();
        const updateTime = setInterval(fetchTime, 1000);
        return () => clearInterval(updateTime);
    }, []);


    const changeMode = () => {
        setMode(prevMode => (prevMode === 'short' ? 'extended' : 'short'));
    }

    const formatTime = time => {
        if (!time) return 'loading';
        return mode === 'short' ? time.toLocaleTimeString() : `${time.toLocaleDataString()} ${time.toLocaleTimeString()}`
    }


    return (
        <>
            <div>
                <h1>Time in Kyiv:</h1>
                {error ? <p>{error}</p> : <h2>{time ? time.toLocaleTimeString() : "Loading"}</h2>}
                <button onClick={changeMode}>Change to {mode === 'short' ? 'Extended' : 'Short'} View</button>
            </div>
        </>
    );
}

export default TimeApi;