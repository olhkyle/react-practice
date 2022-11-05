import React, { useReducer } from 'react';

// type Action = { type : 'increase'} | {type : 'decrease'};
interface Action {
    type: 'increase' | 'decrease'
}

const initCount = 0;

const reducer = (state: number, action: Action):number => {
    switch (action.type) {
        case 'increase' :
            return state + 1;

        case 'decrease' :
            return state - 1;
        default: 
            throw new Error('unhandled action');
    }
}

function NewCounter() {
    const [count, dispatch] = useReducer(reducer, initCount);

    return (
        <div>
            <h1>
                {count}
            </h1>
            <div>
                <button onClick={() => dispatch({type: 'increase'})}>+1</button>
                <button onClick={() => dispatch({type: 'decrease'})}>-1</button>
            </div>
        </div>
    );
}

export default NewCounter;