import { useReducer, useContext } from 'react';
import { SampleStateContext, SampleDispatchContext } from './SampleContext';


function ReducerSample() {

    const state = useContext(SampleStateContext);
    const { count, text ,color, isGood } = state;

    const dispatch = useContext(SampleDispatchContext);    

    const setCount = () => dispatch({type: 'set_count', count: state.count + 1});
    const setText = () => dispatch({type: 'set_text', text: 'bye'});
    const setColor = () => dispatch({type: 'set_color', color: 'blue'});
    const toggleGood = () => dispatch({type: 'toggle_good'});

    return (
        <div>
            <p>
                <code>count: </code> {count}
            </p>
            <p>
                <code>text: </code> {text}
            </p>
            <p>
                <code>color: </code> {color}
            </p>
            <p>
                <code>isGood: </code> {isGood ? 'true' : 'false'}
            </p>
            <div>
                <button onClick={setCount}>SET_COUNT</button>
                <button onClick={setText}>SET_TEXT</button>
                <button onClick={setColor}>SET_COLOR</button>
                <button onClick={toggleGood}>TOGGLE_GOOD</button>
            </div>
    </div>
    );
}

export default ReducerSample;