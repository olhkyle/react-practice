import React, { createContext, useReducer, useContext } from 'react';

// type Color = 'red' | 'orange' | 'yellow';

interface State {
    count: number;
    text: string;
    color: string;
    isGood: boolean;
}


type Action = 
    | { type: 'set_count'; count : number }
    | { type: 'set_text'; text : string }
    | { type: 'set_color'; color : string }
    | { type: 'toggle_good' }


    type SampleDispatch = React.Dispatch<Action>;

    const initState:State = {
        count: 0,
        text: 'hello',
        color: 'red',
        isGood: true,
    }

    export const SampleStateContext = createContext<State>(initState)
    export const SampleDispatchContext = createContext<SampleDispatch>(() => null)
    

    function reducer (state: State, action: Action):State  {
        switch (action.type) {
            case 'set_count' :
                return {...state, count : action.count}
            case 'set_text' :
                return {...state, text : action.text}
            case 'set_color' :
                return {...state, color: action.color}
            case 'toggle_good' :
                return {...state, isGood: !state.isGood}
            default:
                throw new Error('wrong action type');
        }
    }

function SampleProvider (props : {children : React.ReactNode}){
        const [state, dispatch] = useReducer(reducer, initState)

        return (
            <SampleStateContext.Provider value={state}>
                <SampleDispatchContext.Provider value={dispatch}>
                    {props.children}
                </SampleDispatchContext.Provider>
            </SampleStateContext.Provider>
        )
    }


export default SampleProvider;

// export function useSampleState() {
//     const state = useContext(SampleStateContext);
//     if (!state) throw new Error('Cannot find SampleProvider'); // 유효하지 않을땐 에러를 발생
//     return state;
//   }
  
//   export function useSampleDispatch() {
//     const dispatch = useContext(SampleDispatchContext);
//     if (!dispatch) throw new Error('Cannot find SampleProvider'); // 유효하지 않을땐 에러를 발생
//     return dispatch;
//   }