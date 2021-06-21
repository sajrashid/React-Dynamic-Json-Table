import React, { useEffect, useReducer } from 'react'

import { ACTIONS } from './actions'
import DataProvider from './customContext'
import Rows from './children/rows'
import { TableReducer } from './tableReducer'
import Thead from './children/thead'
import Pager from './children/pager'
import Filters from './children/filters'
export default React.memo(function Table(props) {
    // setup initial state
    const options = props.options || {}
    const json = props.json || []
    const sortDirection = 'asc'
    const pagerInput = 1
    const pageNo = 1
    const pagerIcons = options.pagerIcons || { first: '&lsaquo;', previous: '&laquo;', next: '&raquo', last: '&rsaquo;' }
    const pageSize = options.pageSize || 10
    const totalPages = (Math.ceil(json.length / pageSize))
    const initialState = {
        json: json, jsonCopy: json, options: options, selectedRow: {},
        sortDirection: sortDirection, pagerInput: pagerInput, pageSize: pageSize, totalPages: totalPages,
        pageNo: pageNo, pagerIcons: pagerIcons, searchFilter: ''
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

    const rowClick = (e) => {
        if (options.selectable !== false) {
            if (props.rowClick) {
                props.rowClick(state.selectedRow)
            }
        }
    }
    return (

        <DataProvider.Provider value={initialState}>
            <table className={cssClasses}>
                <thead>
                    {
                        options.filters &&
                        <tr><Filters state={state} dispatch={dispatch} /></tr>
                    }
                    <tr ><Thead className={cssClasses} dispatch={dispatch}></Thead></tr>
                </thead>
                <tbody>
                    <Rows className={cssClasses} rowClick={rowClick} state={state} dispatch={dispatch} />
                </tbody>
                <tfoot>
                    <tr>{
                        options.pageable &&
                        <td >
                            <div className='pagerDiv' >
                                <Pager state={state} dispatch={dispatch} />
                            </div>
                        </td>}
                    </tr>
                </tfoot>
            </table>

        </DataProvider.Provider>

    )
})
