import { ACTIONS } from './actions'
import { compareValues } from './utils/utils'

export const TableReducer = (state, action) => {
    const json = state.json
    const data = state.data || {}
    const options = data
    switch (action.type) {
        case ACTIONS.SELECTEDROW:
            let selectedRow = action.payload.row
            state.selectedRow = selectedRow
            return { ...state }
        case ACTIONS.SORT:
            let colName = action.payload.id
            let sortDirection = state.sortDirection
            json.sort(compareValues(colName, sortDirection));
            state.sortDirection === 'asc' ? state.sortDirection = 'desc': state.sortDirection = 'asc'
            return { ...state }

        default:
            return state

    }
}