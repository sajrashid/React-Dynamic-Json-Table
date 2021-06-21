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
            action.payload.pageable ?  state.json = paginate(state.json || [], state.pageSize, 0):state.totalPages = (Math.ceil(state.json.length / state.pageSize))
            return { ...state }
        case ACTIONS.GOTOPAGE:
            const gotoPage =action.payload.gotoPage
            state.pageNo=gotoPage
            state.pagerInput=gotoPage
            state.json=(paginate(state.jsonCopy, state.pageSize, gotoPage-1))
            return { ...state }
        case ACTIONS.FIRST:
            state.pageNo=1
            state.pagerInput=1
            state.json=(paginate(state.jsonCopy, state.pageSize, 0))
            return { ...state }
        case ACTIONS.LAST:
            state.json=(paginate(state.jsonCopy, state.pageSize, state.totalPages-1))
            state.pageNo=state.totalPages
            state.pagerInput=state.totalPages
            return { ...state }
        case ACTIONS.NEXT:
            state.pageNo=state.pageNo >= state.totalPages ? state.pageNo : state.pageNo + 1
            state.pagerInput=state.pageNo
            state.json=(paginate(state.jsonCopy, state.pageSize, state.pageNo-1))
            return { ...state }
        case ACTIONS.PREVIOUS:
            state.pageNo= state.pageNo <2 ? state.pageNo : state.pageNo - 1
            state.pagerInput=state.pageNo
            state.json=(paginate(state.jsonCopy, state.pageSize, state.pageNo-1))
            return { ...state }

        case ACTIONS.SELECTEDROW:
            state.selectedRow = action.payload.row
            return { ...state }
        case ACTIONS.SORT:
            let colName = action.payload.id
            let sortDirection = state.sortDirection
            if(state.pageable){
            state.jsonCopy.sort(compareValues(colName, sortDirection));
            state.json=state.jsonCopy
            }else{
                state.json.sort(compareValues(colName, sortDirection));
            }
            state.sortDirection === 'asc' ? state.sortDirection = 'desc' : state.sortDirection = 'asc'
            return { ...state }

        default:
            return state

    }
}