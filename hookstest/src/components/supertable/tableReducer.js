import { ACTIONS } from './actions'
import { useCustomContext } from "../supertable/customContext";

export const TableReducer = (state, action) => {
    const json = state.json
    const data = state.data || {}
    const options = data 
    switch (action.type) {
        case ACTIONS.SELECTROW:
            let selectedRow=action.payload.row
            state.selectedRow=selectedRow
            return { ...state}
           
        case ACTIONS.SORT:
            let colName=action.payload.id
            json.sort((a, b) => (a[colName]) - (b[colName]));
            return { ...state }

        default:
            return state
    
}
}