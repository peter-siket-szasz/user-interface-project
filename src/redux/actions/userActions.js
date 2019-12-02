import * as types from "../actionTypes/userActionTypes"

export const changeUserName = (name) => ({
    type: types.CHANGE_NAME,
    name
})
