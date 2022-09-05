import {BURGER_TOGGLE} from "./types";

export const toggleBurger = (type) => {
    return {
        type: BURGER_TOGGLE,
        payload: {
            opType: type
        }
    }
}