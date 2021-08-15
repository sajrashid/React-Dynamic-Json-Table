import React, { createContext, useReducer } from 'react'

import { ACTIONS } from './reducers/actions'
import Crud from './children/crud'
import FilterCols from '../react-dj-table/children/filterCols'
import GlobalSearch from './children/globalsearch'
import Pager from './children/pager'
import PropTypes from "prop-types"
import Rows from './children/rows'
import { TableReducer } from './reducers/tableReducer'
import Thead from './children/thead'
import { createMarkup } from './utils/utils'

export const TableContext = createContext();

const Table = (props) => {
    // Create a provider for components to consume and subscribe to changes
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
    const paginate = (array, pageSizeLoc, pageNumber) => {
        return array.slice(pageNumber * pageSizeLoc, (pageNumber + 1) * pageSizeLoc);
    }

    if (pageable) {
        json = paginate(json || [], pageSize, 0)
    }
    const crudBtns = { btnCancel: true, btnUpdate: true, btnCreate: false, btnInsert: true, btnDelete: true }

    const colums = Object.keys(props.json[0])

    const filterColobj = {}

    colums.forEach(propname => {
        filterColobj[propname] = {}
    })
    const filterColArr = options.filterCols || []

    filterColArr.map((obj) => {
        var keys = Object.keys(obj)
        keys.forEach(objName => {
            if (obj[objName].hasOwnProperty('type')) {
                if (obj[objName].type === 'dualRange') {
                    // set addtional state options
                    filterColobj[objName]['min'] = obj[objName].min
                    filterColobj[objName]['max'] = obj[objName].max

                }

                if (obj[objName].type === 'text') {
                    // set addtional state options
                    //obj[objName]['value'] = "yo"
                    // console.log(objName)
                    filterColobj[objName]['value'] = ''
                    // filterColobj[obj] = {}
                    // console.log(filterColobj)
                    // filterColobj[obj][objName] = {}
                    // console.log(filterColobj)

                    // filterColobj[obj][objName]['value'] = ''
                    //   console.log(filterColobj)
                    //   filterColobj[obj][objName]['y'] = "n"
                    // filterColobj[obj][objName]['y'] = {}
                    //    filterColobj[objName]['searchString'] = ''
                    // filterColobj[obj]['searchString'] = obj[objName].min

                }
            }

        })
        return obj
    })


    if (filterColArr.type === 'dualRange') {
        // set addtional state options
    }


    const initialState = {
        json: json, jsonCopy: props.json, options: options, pageable: pageable, selectedRow: {}, selectedRowCopy: null, selectedRowCss: selectedRowCss,
        sortDirection: sortDirection, pagerInput: pagerInput, pageSize: pageSize, pageSizeCopy: pageSize, totalPages: totalPages,
        jsonFiltered: json, filtered: false, filterColobj: filterColobj, colspan: colspan, insertId: null, crudBtns: crudBtns, dataChanged: false, inserting: false, userAction: 'NOACTION', creating: false, editing: true, pageNo: pageNo, pagerIcons: pagerIcons, searchString: ''
    }
    const [state, dispatch] = useReducer(TableReducer, initialState)

    React.useEffect(() => {
        dispatch({ type: ACTIONS.UPDATEPROPS, payload: { updatedProps: props } })
    }, [props])


    const styles = options.tableCss || ''
    const cssClasses = ` ${styles}`
    const pagerCss = options.pagerCss || ''
    const rowClick = (row, rowUnchanged, action) => {

        if (options.selectable !== false) {
            if (props.rowClick) {
                props.rowClick(row, rowUnchanged, action, dispatch)
            }
        }
    }

    return (
        <React.Fragment>
            <TableContext.Provider value={[state, dispatch]}>
                <table className={cssClasses}>
                    <thead>
                        {
                            searchable &&
                            <tr>
                                <td colSpan={colspan - hiddenColsCount} className={searchInputCss}>
                                    <GlobalSearch />
                                </td>
                            </tr>
                        }
                        <tr><FilterCols /></tr>
                        <tr ><Thead className={cssClasses} ></Thead></tr>
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
                            <Pager />
                        </div>
                    </div>}
                {
                    editable &&
                    <Crud rowClick={rowClick} />
                }
            </TableContext.Provider>

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


