import * as types from "../actionTypes/emotionsActionTypes"

export const toggleEmotion = (emotion) => ({
    type: types.TOGGLE_EMOTION,
    emotion
})