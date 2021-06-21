import { ACTIONS } from './actions'
import { compareValues } from './utils/utils'

export const TableReducer = (state, action) => {
    const options = state.data || {}

    //set up pagination

    const paginate = (array, page_size, page_number) => {
        return array.slice(page_number * page_size, (page_number + 1) * page_size);
    }


    switch (action.type) {

        case ACTIONS.INITIALSTATE:
            state.pageable = action.payload.pageable
            if (state.pageable) {
                state.json = paginate(state.json || [], state.pageSize, 0)
            } else {
                state.totalPages = (Math.ceil(state.json.length / state.pageSize))
            }
            return { ...state }
        case ACTIONS.GOTOPAGE:
            return { ...state }
        case ACTIONS.FIRST:
            state.pageNo=1
            state.json=(paginate(state.jsonCopy, state.pageSize, 0))
            return { ...state }
        case ACTIONS.LAST:
            state.totalpages
            state.json=(paginate(state.jsonCopy, state.pageSize, state.totalpages))
            return { ...state }
        case ACTIONS.NEXT:
            state.pageNo=state.pageNo >= state.totalpages ? state.pageNo : state.pageNo + 1
            state.json=(paginate(state.jsonCopy, state.pageSize, state.pageNo-1))

            return { ...state }
        case ACTIONS.LAST:
            state.pageNo=state.totalpages
            state.json=(paginate(state.jsonCopy, state.pageSize, state.pageNo-1))
            return { ...state }

        case ACTIONS.SELECTEDROW:
            state.selectedRow = action.payload.row
            return { ...state }
        case ACTIONS.SORT:
            let colName = action.payload.id
            let sortDirection = state.sortDirection
            state.json.sort(compareValues(colName, sortDirection));
            state.sortDirection === 'asc' ? state.sortDirection = 'desc' : state.sortDirection = 'asc'
            return { ...state }

        default:
            return state

    }
}