import { LOGIN_USER, SIGN_OUT_USER } from './authConstants'
import { createReducer } from '../../app/common/util/reducerUtil'

const intitialState = {
    currentUser: {}
}

export const loginUser = (state, payload) => {
    return{
        ...state,
        authenticated: true,
        currentUser: payload.creds.email,
        pass: payload.creds.password
    }
}

export const signOutUSer = (state, payload) => {
    return {
        ...state,
        authenticated: false,
        currentUser: {}
    }
}

export default createReducer(intitialState, {
    [LOGIN_USER]: loginUser,
    [SIGN_OUT_USER]: signOutUSer
})