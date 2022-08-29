import {BURGER_TOGGLE} from "../types";

const initialState = {
    visibility: false
}

export const burgerReducer = (state = initialState, action) => {
    switch (action.type) {
        case BURGER_TOGGLE:
            return {...state, visibility: !state.visibility}
        default:
            return state
    }
}