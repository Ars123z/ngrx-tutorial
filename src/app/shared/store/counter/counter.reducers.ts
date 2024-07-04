import { createReducer, on } from "@ngrx/store";
import { initialState } from "./counter.state";
import { customincrement, decrement, increment, rename, reset } from "./counter.actions";

export const counterReducer = createReducer(initialState,
    on(increment, (state)=> {
        return {
            ...state,
            counter: state.counter + 1
        }
    }),
    on(decrement, (state)=> {
        return {
            ...state, 
            counter: state.counter - 1
        }
    }),
    on(reset, (state)=> {
        return {
            ...state,
            counter: 0
        }
    }),
    on(customincrement, (state, action)=> {
        if (action.action === "add"){
        return {
            ...state,
            counter: state.counter + action.value
        }
    } else {
        return {
            ...state,
            counter: state.counter - action.value
        }
    }
    }),
    on(rename, (state, action)=>{
        return {
            ...state,
            name: action.name
        }
    })
)