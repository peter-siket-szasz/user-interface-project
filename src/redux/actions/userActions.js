import * as types from "../actionTypes/userActionTypes"

export const changeUserName = (name) => ({
    type: types.CHANGE_NAME,
    name
})

export const submit = (bool) => ({
    type: types.SUBMIT,
    bool
})