import { ACTIONS } from './actions'

export const TableReducer = (state, action) => {

    switch (action.type) {
        case ACTIONS.TESTSTATE:
            state.testValue = action.payload.testValue
            state.testValue ++
            return { ...state }
        default:
            return state

    }
}