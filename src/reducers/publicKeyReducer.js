import { types } from "../types/types";


export const publicKeyReducer = (state = {}, action) => {

    switch (action.type) {

        case types.public_keys:
            return {
                public_key: action.payload.public_key
            }
            

        default:
            return state;
    }

}