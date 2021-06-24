import React, { useEffect, useReducer } from 'react'

import { ACTIONS } from './reducers/actions'
import Filters from './children/filters'
import Pager from './children/pager'
import PropTypes from "prop-types"
import Rows from './children/rows'
import { TableReducer } from '../React-JSON-Table/reducers/tableReducer'
import Thead from './children/thead'

/**
 * Component for displaying json data in a HTML Table.
 *
 * @component
 * @example
 * 
 * const json= [{
    id:1,
    name: "Yoda Master",
    age: 30
  }]
 * const options = {
    tableCss: 'table-fixed cursor-pointer w-full',
    cellStyles: 'break-words  border p-4 ',
    pageable: true,
    selectable: true,
    customCols: [{ 'Avatar': '<div style="min-height:6em"><img  decoding="async" src=${Avatar}></img></div' }] //adding min height reduces loading flash as image cells are not resized vertically
}
 * return (
 *   <Table json={json} options={options} />
 * )
 */

const Table = (props) => {
    // setup initial state
    const options = props.options || {}
    const json = props.json || []
    const colspan=Object.keys(json[0]).length 
    const selectedRowCss = options.selectedRowCss || ''
    const sortDirection = 'asc'
    const searchInputCss = options.searchInputCss || ''
    const pagerInput = 1
    const pageNo = 1
    const pagerIcons = options.pagerIcons || { first: '&lsaquo;', previous: '&laquo;', next: '&raquo', last: '&rsaquo;' }
    const pageSize = options.pageSize || 10
    const totalPages = (Math.ceil(json.length / pageSize))
    const initialState = {
        json: json, jsonCopy: json, options: options, selectedRow: {}, selectedRowCss: selectedRowCss,
        sortDirection: sortDirection, pagerInput: pagerInput, pageSize: pageSize, totalPages: totalPages,
        pageNo: pageNo, pagerIcons: pagerIcons, searchString: ''
    }
    const [state, dispatch] = useReducer(TableReducer, initialState)
    //run once
    useEffect(() => {
        if (options.pageable && json.length > 0) {
            dispatch({ type: ACTIONS.INITIALSTATE, payload: { pageable: true } })
            //    updateJson(paginate(json || [], pageSize, 0))
            //   updateTotalPages(Math.ceil(json.length / pageSize))

        } else if (json.length > 0) {

            //  updateJson(json);
            //  updateTotalPages(Math.ceil(json.length / pageSize))
        }
    }, [options.pageable, json.length])

    const styles = options.tableCss || ''
    const cssClasses = ` ${styles}`
    const pagerCss = options.pagerCss || ''
    const rowClick = (e) => {
        if (options.selectable !== false) {
            if (props.rowClick) {
                props.rowClick(state.selectedRow)
            }
        }
    }
    return (


        <table className={cssClasses}>
            <thead>
                {
                    options.filters &&
                    <tr><td colSpan={colspan} className={searchInputCss}>
                        <Filters state={state} dispatch={dispatch} />
                    </td>
                    </tr>
                }
                <tr ><Thead className={cssClasses} state={state} dispatch={dispatch}></Thead></tr>
            </thead>
            <tbody>
                <Rows className={cssClasses} rowClick={rowClick} state={state} dispatch={dispatch} />
            </tbody>
            <tfoot>
                <tr>{
                    options.pageable &&
                    <td colSpan={colspan} >
                        <div className={pagerCss} >
                            <Pager state={state} dispatch={dispatch} />
                        </div>
                    </td>}
                </tr>
            </tfoot>
        </table>



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

    json: [{
        id: 1,
        name: "Yoda Master",
        age: 950
    }],
    options: {
        tableCss: 'table-fixed cursor-pointer w-full',
        cellStyles: 'break-words  border p-4 ',
        pageable: true,
        selectable: true,
    }
}
export default React.memo(Table)