import * as types from "../actionTypes/userActionTypes"

const initialState = {
    userName: "Test User"
}

export default (state = initialState, action) => {
    switch (action.type) {

        case types.CHANGE_NAME:
            return {
                ...state,
                userName: action.name
            }

        default:
            return state
    }
}
