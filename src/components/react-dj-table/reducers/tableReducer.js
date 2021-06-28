import { ACTIONS } from './actions'
import { compareValues } from '../utils/utils'
import { matchSorter } from 'match-sorter'

export const TableReducer = (state, action) => {

    //set up pagination
    const paginate = (array, page_size, page_number) => {
        return array.slice(page_number * page_size, (page_number + 1) * page_size);
    }
    // https://github.com/kentcdodds/match-sorter
    function fuzzySearchMutipleWords(
        rows, // array of data [{a: "a", b: "b"}, {a: "c", b: "d"}]
        keys, // keys to search ["a", "b"]
        filterValue// potentially multi-word search string "two words"
      ) {
        if (!filterValue || !filterValue.length) {
          return rows
        }
      
        const terms = filterValue.split(' ')
        if (!terms) {
          return rows
        }
      
        // reduceRight will mean sorting is done by score for the _first_ entered word.
        return terms.reduceRight(
          (results, term) => matchSorter(results, term, {keys}),
          rows,
        )
      }

    switch (action.type) {

        case ACTIONS.INITIALSTATE:
            state.pageable = action.payload.pageable
            action.payload.pageable ? state.json = paginate(state.json || [], state.pageSize, 0) : state.totalPages = (Math.ceil(state.json.length / state.pageSize))
            return { ...state }
        case ACTIONS.SEARCHINPUTCHANGE:
            state.searchString = action.payload.search
            return { ...state }
        case ACTIONS.ITEMSPERPAGE:
            state.pageSize = action.payload.itemsPerPage
            state.totalPages = Math.ceil(state.jsonCopy.length / state.pageSize)
            state.pageNo = 1
            state.pagerInput = 1
            action.payload.itemsPerPage ? state.json = paginate(state.jsonCopy || [], state.pageSize, 0) : state.totalPages = (Math.ceil(state.json.length / state.pageSize))
            return { ...state }
        case ACTIONS.SEARCH:
            var result = null
            var searchString = action.payload.search
            //state.searchString = searchString
            // fuzzy search
            const objList = state.jsonCopy


            if (searchString.length > 0) {
                result = fuzzySearchMutipleWords(state.jsonCopy,Object.keys(state.jsonCopy[0]),searchString)
            }
            else {
                result = state.jsonCopy
            }
            state.searchFilter = searchString
            if (state.pageable) {
                state.pageNo = 1
                state.pagerInput = 1
                state.json = (paginate(result, state.pageSize, 0))
                state.totalPages = Math.ceil(result.length / state.pageSize)

            } else {
                state.json = result
                state.totalPages = 1
            }
            return { ...state }
        case ACTIONS.GOTOPAGE:
            const gotoPage = action.payload.gotoPage
            state.pageNo = gotoPage
            state.pagerInput = gotoPage
            state.json = (paginate(state.jsonCopy, state.pageSize, gotoPage - 1))
            return { ...state }

        case ACTIONS.FIRST:
            state.pageNo = 1
            state.pagerInput = 1
            state.json = (paginate(state.jsonCopy, state.pageSize, 0))
            return { ...state }

        case ACTIONS.LAST:
            state.json = (paginate(state.jsonCopy, state.pageSize, state.totalPages - 1))
            state.pageNo = state.totalPages
            state.pagerInput = state.totalPages
            return { ...state }

        case ACTIONS.NEXT:
            state.pageNo = state.pageNo >= state.totalPages ? state.pageNo : state.pageNo + 1
            state.pagerInput = state.pageNo
            state.json = (paginate(state.jsonCopy, state.pageSize, state.pageNo - 1))
            return { ...state }

        case ACTIONS.PREVIOUS:
            state.pageNo = state.pageNo < 2 ? state.pageNo : state.pageNo - 1
            state.pagerInput = state.pageNo
            state.json = (paginate(state.jsonCopy, state.pageSize, state.pageNo - 1))
            return { ...state }

        case ACTIONS.SELECTEDROW:
            state.selectedRow = action.payload.row
            return { ...state }

        case ACTIONS.SORT:
            let colName = action.payload.id
            let sortDirection = state.sortDirection
            if (state.pageable) {
                state.jsonCopy.sort(compareValues(colName, sortDirection));
                state.json = paginate(state.jsonCopy || [], state.pageSize, state.pageNo - 1)
            } else {
                state.json.sort(compareValues(colName, sortDirection));
            }
            state.sortDirection === 'asc' ? state.sortDirection = 'desc' : state.sortDirection = 'asc'
            return { ...state }

        default:
            return state

    }
}