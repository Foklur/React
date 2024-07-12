import React, { useState, useEffect } from 'react';


const TimeApi = () => {
    const [time, setTime] = useState(null);
    const [error, setError] = useState(null);

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

    return (
        <>
            <div>
                <h1>Time in Kyiv:</h1>
                {error ? <p>{error}</p> : <h2>{time ? time.toLocaleTimeString() : "Loading"}</h2>}
            </div>
        </>
    );
}

export default TimeApi;