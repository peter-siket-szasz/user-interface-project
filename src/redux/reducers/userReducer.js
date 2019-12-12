import * as types from "../actionTypes/userActionTypes"

const initialState = {
    userName: "Click a button",
    submitted: false
}

export default (state = initialState, action) => {
    switch (action.type) {

        case types.CHANGE_NAME:
            return {
                ...state,
                userName: action.name
            }

        case types.SUBMIT:
            return {
                ...state,
                submitted: action.bool
            }

        default:
            return state
    }
}
