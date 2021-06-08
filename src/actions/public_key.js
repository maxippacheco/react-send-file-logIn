import { types } from "../types/types"

export const startLoadingPublicKey = () => {
    
    return (dispatch) => {
        
        dispatch(publicKey('K$a_j3fvmd34tr34f'))

    }

}

const publicKey = (public_key) => ({
    type: types.public_keys,
    payload: {
        public_key
    }
})