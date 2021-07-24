import React, { useReducer } from 'react'

import { ACTIONS } from './reducers/actions'
import Crud from './children/crud'
import GlobalSearch from './children/globalsearch'
import Pager from './children/pager'
import PropTypes from "prop-types"
import Rows from './children/rows'
import { TableReducer } from './reducers/tableReducer'
import Thead from './children/thead'
import { createMarkup } from './utils/utils'

const Table = (props) => {
    // setup initial state
    const options = props.options || {}
    let json = props.json || []
    const colspan = Object.keys(json[0]).length
    const selectedRowCss = options.selectedRowCss || ''
    const sortDirection = 'asc'
    const searchInputCss = options.searchInputCss || ''
    const pagerInput = 1
    const pageNo = 1
    const pagerIcons = options.pagerIcons || { first: '&lsaquo;', previous: '&laquo;', next: '&raquo', last: '&rsaquo;' }
    const pageSize = options.pageSize || 10
    const totalPages = (Math.ceil(json.length / pageSize))
    const pageable = options.pageable || false
    const searchable = options.searchable || false
    const editable = options.editable || false
    let footer = false
    if (options.footer) {
        footer = true
    }
    const footerHtml = options.footer || ''
    const hiddenCols = options.hiddenCols || []
    const hiddenColsCount = hiddenCols.length
    // todo move into hook
    const paginate = (array, pageSize, pageNumber) => {
        return array.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize);
    }

    if (pageable) {
        json = paginate(json || [], pageSize, 0)
    }
    const crudBtns= {btnCancel:true, btnUpdate:true, btnCreate:false, btnInsert:true, btnDelete:true }

    const initialState = {
        json: json, jsonCopy: props.json, options: options, pageable: pageable, selectedRow: {}, selectedRowCopy: null, selectedRowCss: selectedRowCss,
        sortDirection: sortDirection, pagerInput: pagerInput, pageSize: pageSize, pageSizeCopy: pageSize, totalPages: totalPages,
        colspan: colspan, insertId: null, crudBtns:crudBtns , dataChanged:false, inserting: false,  userAction:'NOACTION',creating: false, editing: true, pageNo: pageNo, pagerIcons: pagerIcons, searchString: ''
    }
    const [state, dispatch] = useReducer(TableReducer, initialState)
  
    React.useEffect(() => {
        console.log("props:", props)
        dispatch({type: ACTIONS.UPDATEPROPS, payload: { updatedProps: props }})
    },[props])


    const styles = options.tableCss || ''
    const cssClasses = ` ${styles}`
    const pagerCss = options.pagerCss || ''
    const rowClick = (row, rowUnchanged,action) => {

    if (options.selectable !== false) {
        if (props.rowClick) {
            props.rowClick(row, rowUnchanged,action, dispatch)
        }
      }
    }

    return (
        <React.Fragment>
            <table className={cssClasses}>
                <thead>
                    {
                        searchable &&
                        <tr>
                            <td colSpan={colspan - hiddenColsCount} className={searchInputCss}>
                                <GlobalSearch state={state} dispatch={dispatch} />
                            </td>
                        </tr>
                    }

                    <tr ><Thead className={cssClasses} state={state} dispatch={dispatch}></Thead></tr>
                </thead>
                <tbody>
                    <Rows className={cssClasses} rowClick={rowClick} state={state} dispatch={dispatch} />
                </tbody>
                {footer &&
                    <tfoot>
                        <tr>
                            <td colSpan={colspan - hiddenColsCount} dangerouslySetInnerHTML={createMarkup(footerHtml)} >
                            </td>
                        </tr>
                    </tfoot>}
            </table>
            {
                pageable &&
                <div colSpan={colspan - hiddenColsCount} >
                    <div className={pagerCss} >
                        <Pager state={state} dispatch={dispatch} />
                    </div>
                </div>}
            {
                editable &&
                <Crud state={state} dispatch={dispatch} rowClick={rowClick} />
            }
        </React.Fragment>
    )
}
Table.propTypes = {
    /**
     * JSON object array json
     */
    json: PropTypes.array.isRequired,
    /**
     * Table options
     */
    options: PropTypes.object,
}

Table.defaultProps = {

    json: [],
    options: {
        tableCss: '',
        cellStyles: '',
        pageable: false,
        selectable: false,
    }
}
export default Table


