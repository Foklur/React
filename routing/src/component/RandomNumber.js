import React, { useState } from 'react';

const RandomNumber = ({ min, max }) => {
    const [num, setNum] = useState(0);

    const NewNumber = () => {
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        setNum(randomNum);
    };

    return (
        <div >
            <p>Random Number: {num}</p>
            <button onClick={NewNumber}>New Number</button>
        </div>
    );
}

export default RandomNumber;