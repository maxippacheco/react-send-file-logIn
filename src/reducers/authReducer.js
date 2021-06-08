import { types } from "../types/types";


export const authReducer = (state = {}, action) => {

    switch (action.type) {
        case types.login:
            return{
                email: action.payload.email,
                name: action.payload.displayName,
                uid: action.payload.uid,
            }    
   
        // case types.public_key:
        //     return{
        //     }
        
        case types.logout:
            return {}
    
        default:
            return state;
    }

}