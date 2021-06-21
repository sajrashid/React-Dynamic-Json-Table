import React, { useEffect, useReducer, useState } from 'react'

import { ACTIONS } from './actions'
import DataProvider from './customContext'
import Rows from './children/rows'
import { TableReducer } from './tableReducer'
import Thead from './children/thead'

export default React.memo(function Table(props) {
   // setup initial state
    const options = props.options || {}
    const  json =  props.json || []
    const sortDirection ='asc'
    const initialState = { json: json, jsonCopy:json, options: options, selectedRow:{},sortDirection:sortDirection }
    const [state, dispatch] = useReducer(TableReducer, initialState)
    
    // set up pager
    const pageSize = options.pageSize || 10
    const pagerIcons = options.pagerIcons || { first: '&lsaquo;', previous: '&laquo;', next: '&raquo', last: '&rsaquo;' }

    //run once
    useEffect(()=>{
        if(options.pageable && json.length > 0 ){

        //    updateJson(paginate(json || [], pageSize, 0))
         //   updateTotalPages(Math.ceil(json.length / pageSize))

        }else if (json.length > 0){

          //  updateJson(json);
          //  updateTotalPages(Math.ceil(json.length / pageSize))
        }
    },[options.pageable,json.length])

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
                        <tr ><Thead className={cssClasses} dispatch={dispatch} /></tr>
                    </thead>
                    <tbody>
                        <Rows className={cssClasses} rowClick={rowClick} state={state} dispatch={dispatch} />
                    </tbody>
                </table>
            </DataProvider.Provider>
        
    )
})
