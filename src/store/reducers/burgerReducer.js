import {BURGER_TOGGLE} from "../types";

const initialState = {
    visibility: false,
    type: 'none'
}

export const burgerReducer = (state = initialState, action) => {
    switch (action.type) {
        case BURGER_TOGGLE:
            return {...state, visibility: !state.visibility, type: action.payload.opType}
        default:
            return state
    }
}