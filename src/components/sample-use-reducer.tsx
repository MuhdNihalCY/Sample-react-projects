import { useEffect, useReducer } from "react";

interface State {
    count: number;
    error: string | null;
}

interface Action {
    type: 'increment' | 'decrement';
}

function reducer(state: State, action: Action) {
    const { type } = action;

    switch (type) {
        case 'increment':
            var newCount = state.count + 1;
            var hasErr = newCount > 5;
            return {
                ...state,
                count: !hasErr ? newCount : state.count,
                error: hasErr ? `Counter Reacher Maximum ${state.count}` : null,
            }
        case 'decrement':
            var newCount = state.count - 1;
            var hasErr = newCount < 0;
            return {
                ...state,
                count: !hasErr ? newCount : state.count,
                error: hasErr ? `Counter reacher minimum:  ${state.count}` : null,
            }

        default:
            return state;
    }
}

export default function SampleReducer() {
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        error: null
    });

    const handleKeyPress = (e: any) => {
        // console.log('handleKeyPress: ', e.key);
        if (e.key === "ArrowUp") {
            dispatch({ type: 'increment' })
        } else if (e.key === "ArrowDown") {
            dispatch({ type: 'decrement' })
        }
    }
    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);
    }, [])

    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'increment' })}>increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>decrement</button>
            {state.error && <p>{state.error}</p>}
            <p>This is a sample counter using useReducer hook.</p>
            <p></p>
        </div>
    );
}