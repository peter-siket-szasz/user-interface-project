import * as types from "../actionTypes/emotionsActionTypes"

const initialState = {
    selected: []
}

export default (state = initialState, action) => {
    switch (action.type) {

        case types.TOGGLE_EMOTION:
            console.log(state);
            let selectedEmotions = state.selected;
            if (selectedEmotions.map(x => x.name).includes(action.emotion.name)) {
                selectedEmotions = [...selectedEmotions, action.emotion]
            } else {
                selectedEmotions = selectedEmotions.filter(x => x.name !== action.emotion.name)
            }
            console.log(selectedEmotions)
            return {
                ...state,
                selected: selectedEmotions
            }

        default:
            return state
    }
}
