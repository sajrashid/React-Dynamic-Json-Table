import { ACTIONS } from './actions'
import { compareValues, fuzzySearchMutipleWords } from '../utils/utils'

export const TableReducer = (state, action) => {

    //set up pagination
    const paginate = (array, pageSize, pageNumber) => {
        return array.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize);
    }

    switch (action.type) {

        case ACTIONS.UPDATEPROPS:
             state.json = action.payload.updatedProps.json
             state.jsonCopy =action.payload.updatedProps.json
             if (state.options.pageable) {
                 state.json = paginate(state.json || [], state.options.pageSize || 10, 0)
              } else {
                  state.totalPages = (Math.ceil(state.json.length / state.options.pageSize || 10))
              }
             return { ...state }
        case ACTIONS.ITEMSPERPAGE:
            state.pageSize = action.payload.itemsPerPage
            state.totalPages = Math.ceil(state.jsonCopy.length / state.pageSize)
            state.pageNo = 1
            if (action.payload.itemsPerPage) {
                state.json = paginate(state.jsonCopy || [], state.pageSize, 0)
             } else {
                 state.totalPages = (Math.ceil(state.json.length / state.pageSize))
             }
            return { ...state }
        case ACTIONS.SEARCH:
            var result = null
            var searchString = action.payload.search.searchString
            var columns = action.payload.search.columns
            //state.searchString = searchString
            // fuzzy search
            if (searchString.length > 0) {
                result = fuzzySearchMutipleWords(state.jsonCopy, columns, searchString)
            }
            else {
                result = state.jsonCopy
            }
            state.searchString = searchString

            if (state.pageable) {
                state.pageNo = 1
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
            state.json = (paginate(state.jsonCopy, state.pageSize, 0))
            return { ...state }

        case ACTIONS.LAST:
            state.json = (paginate(state.jsonCopy, state.pageSize, state.totalPages - 1))
            state.pageNo = state.totalPages
            return { ...state }

        case ACTIONS.NEXT:
            state.pageNo = state.pageNo >= state.totalPages ? state.pageNo : state.pageNo + 1
            state.json = (paginate(state.jsonCopy, state.pageSize, state.pageNo - 1))
            return { ...state }

        case ACTIONS.PREVIOUS:
            state.pageNo = state.pageNo < 2 ? state.pageNo : state.pageNo - 1
            state.json = (paginate(state.jsonCopy, state.pageSize, state.pageNo - 1))
            return { ...state }

        case ACTIONS.CREATESELECTEDROWCOPY:
            state.selectedRowCopy = JSON.parse(JSON.stringify(state.selectedRow))
            return { ...state }
        case ACTIONS.SELECTEDROW:
            state.selectedRow = action.payload.row
            state.crudBtns.btnCancel=false
            state.crudBtns.btnCreate=true
            state.crudBtns.btnDelete=false

            return { ...state }
        case ACTIONS.UPDATEROW:
            var item = action.payload.item
            var value = action.payload.value
            state.dataChanged=true
            state.selectedRow[item] = value
            if(state.editing){
                state.crudBtns.btnUpdate=false
            }
            if(state.inserting){
                state.crudBtns.btnInsert=false
            }
            state.crudBtns.btnDelete=true
            return { ...state }

        case ACTIONS.REJECTCHANGES:
            state.dataChanged=false
            if(state.inserting){
                // delete the row
                state.json.splice(state.pageSize,1);
            }
            var a = [state.selectedRow, state.selectedRowCopy]
            state.selectedRow = Object.assign(...a)
            state.selectedRow = {}
            state.selectedRowCopy = {}
            state.creating = false
            state.editing = true
            state.inserting=false
            state.crudBtns.btnCreate=false
            state.crudBtns.btnInsert=true
            state.crudBtns.btnCancel=true
            state.crudBtns.btnUpdate=true
            state.userAction = 'REJECT'
            return { ...state }
        case ACTIONS.COMMITROW:
            state.selectedRowCopy = state.selectedRow
            return { ...state }
        case ACTIONS.UPDATECHECKBOX:
            var checkbox = action.payload.item
            var checked = action.payload.checked
            state.dataChanged=true
            state.selectedRow[checkbox] = checked
            if(state.editing){
                state.crudBtns.btnUpdate=false
            }
            if(state.inserting){
                state.crudBtns.btnInsert=false
            }
            state.crudBtns.btnDelete=true
            return { ...state }
        case ACTIONS.SORT:
            const sortable = state.options.sortable || false

            if (!sortable) {
                return { ...state }
            } else {
                const colName = action.payload.id
                const sortDirection = state.sortDirection
                if (state.pageable) {
                    state.jsonCopy.sort(compareValues(colName, sortDirection));
                    state.json = paginate(state.jsonCopy || [], state.pageSize, state.pageNo - 1)
                } else {
                    state.json.sort(compareValues(colName, sortDirection));
                }
                state.sortDirection = state.sortDirection === 'asc' ? 'desc' : 'asc'
                return { ...state }

            }
        case ACTIONS.CANCEL:
            state.dataChanged=false
            var b = [state.selectedRow, state.selectedRowCopy]
            state.selectedRow = Object.assign(...b)
            state.editing = true
            if(state.inserting){
                // delete the row
                state.json.splice(state.pageSize,1);
                state.jsonCopy.splice(state.pageSize,1);
            }
            state.inserting=false
            state.editing=true
            state.selectedRow = {}
            state.selectedRowCopy = {}
            state.dataChanged=false
            state.crudBtns.btnCancel=true
            state.crudBtns.btnUpdate=true
            state.crudBtns.btnInsert=true
            state.crudBtns.btnCreate=false
            state.crudBtns.btnDelete=true

            state.userAction = 'CANCEL'
            return { ...state }
        case ACTIONS.CREATE:
            state.inserting=true
            state.editing=false
            state.crudBtns.btnCancel=false
            state.userAction = 'CREATE'
             const clone = JSON.parse(JSON.stringify(state.json[0]));
             const dateColArr = state.options.dateCols  || {}

             let skip=false
             Object.keys(clone).forEach(key => {
                const isDateCol   =  dateColArr.find((o) => o.hasOwnProperty(key))
                if(isDateCol) {
                    skip=true // dont set to blank string re-use exisitng date
                }

                if( typeof clone[key] === "boolean"){
                    //reset value
                    clone[key] =false
                    skip=true
                }

                if( typeof clone[key] === "number") {
                    clone[key] =0
                    skip=true
                }

                if(!skip) {
                    clone[key]=''
                }
                skip=false
              })
              state.json.splice(state.pageSize, 0, clone);
              state.jsonCopy.splice(state.pageSize, 0, clone);
              state.selectedRow=clone
              state.selectedRowCopy={}

            return { ...state }
        case ACTIONS.DELETE:
            state.editing = true
            state.userAction = 'DELETE'
            return { ...state }
        case ACTIONS.INSERT:
            state.editing = true
            state.inserting=false
            state.userAction = 'INSERT'
            return { ...state }
        case ACTIONS.UPDATE:
            state.creating = false
            state.userAction = 'UPDATE'
            state.editing = true
            return { ...state }
       case ACTIONS.CONFIRMUPDATE:
                state.crudBtns.btnCancel=true
                state.crudBtns.btnUpdate=true
                state.crudBtns.btnCreate=false
                state.selectedRow = {}
                state.selectedRowCopy = null
                state.creating = false
                state.editing = true
                state.userAction = "CONFIRMUPDATE"
         return { ...state }
       case ACTIONS.CONFIRMDELETE:
            state.jsonCopy.includes(state.selectedRow) && state.jsonCopy.splice(state.jsonCopy.indexOf(state.selectedRow), 1)
            state.selectedRow = {}
            state.selectedRowCopy = {}
            state.crudBtns.btnCancel=true
            state.crudBtns.btnDelete=true
            state.crudBtns.btnCreate=false
            state.userAction = 'DELETE'
            state.json = (paginate(state.jsonCopy, state.pageSize, state.pageNo - 1))
            return { ...state }
        case ACTIONS.CONFIRMINSERT:
            const idColIdx = state.options.idCol ? Object.keys(state.json[0]).indexOf(state.options.idCol) : 0
            const idColName = [Object.keys(state.json[0])[idColIdx]]
            if(action!==undefined && action.payload !==undefined){
                if(action.payload.id!==undefined) {
                    state.selectedRow[idColName]=action.payload.id
                }
            }
            state.selectedRowCopy = {}
            state.crudBtns.btnCancel=true
            state.crudBtns.btnInsert=true
            state.selectedRow = {}
            state.userAction = 'CONFIRMINSERT'
             return { ...state }
         case ACTIONS.RETURNSTATE:
             return state
        default:
            return state

    }
}
