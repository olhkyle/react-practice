import React, { useState, useEffect } from 'react';


function Counter () {
    const [state, setState] = useState<number>(0);
    const handleClick = () => {
        setState((state) => state + 1);
    }

    useEffect(() => {
        console.log('count');
    }, [state])
    return (
        <div>
            <h1>hello This is Kyle's world</h1>
            <div>count : {state}</div>
            <button onClick={handleClick}>click</button>
        </div>
    )
}

export default Counter;
