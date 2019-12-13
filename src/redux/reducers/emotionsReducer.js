import * as types from "../actionTypes/emotionsActionTypes"

const initialState = {
    selected: []
}

export default (state = initialState, action) => {
    switch (action.type) {

        case types.TOGGLE_EMOTION:
            let selectedEmotions = state.selected;
            if (selectedEmotions.map(x => x.name).includes(action.emotion.name)) {
                selectedEmotions = selectedEmotions.filter(x => x.name !== action.emotion.name)
            } else {
                selectedEmotions = [...selectedEmotions, action.emotion]
            }
            return {
                ...state,
                selected: selectedEmotions
            }

        default:
            return state
    }
}
