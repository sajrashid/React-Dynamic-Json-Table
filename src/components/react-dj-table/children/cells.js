import PropTypes from "prop-types"
import React from "react"
import _ from 'lodash'
import {createMarkupLiteral} from '../utils/utils'

/**
 * Component for displaying cells in the Table.
 *
 * @component
 * 
 * const state= {...
  }
 * const row = {...
    
}
 * return (
 *   <Cells />
 * )
 */
const Cells=({ state, row})=>{
    const options = state.options 
    const styles = options.cellCss || ''
    const cssClasses = ` ${styles}`
    const customColArr = options.customCols || []
    const hiddenColArr = options.hiddenCols  || []
    const dateColArr = options.dateCols  || {}
    const dateOptions = options.dateOptions || {}
    const columns = Object.keys(row)
    const createCells = (row) => {
        return columns.map((key) => {
            // we need to test to determine the types
            // pref in some sort of performant order
            // testing for hidden colums first as we can just step out
            // if we match hidden
            const isHidden = _.includes(hiddenColArr, key)
            if(isHidden) return null 

            // next test a bool type as it's quick and we can eliminate as effeciently as possible
            const isCheckBox = typeof row[key] === "boolean"
            if(isCheckBox && options.checkBox !== false) return <td className={cssClasses} key={key}> <input readOnly type='checkbox' checked={row[key]}></input></td>  

            // Test if it's a custom type
            const isCustom = _.find(customColArr, key)
            // the markup is sanitised and returned before being inserted into the dom
            if(isCustom) return <td className={cssClasses} key={key} dangerouslySetInnerHTML={createMarkupLiteral(key, isCustom[key], row[key])}></td> 
           
            // Check if  date 
            // then go with the user options
            const isDateCol = _.find(dateColArr, key)
            // get the locale is specified from options.dateOptions
            const locale= isDateCol ? dateColArr[key] :''

            if(isDateCol) return  <td className={cssClasses} key={key}>{new Date(row[key]).toLocaleDateString(locale,dateOptions)}</td>

             //default return string 

            return <td className={cssClasses} key={key}>{row[key].toString()}</td>

        })
    }
    return (createCells(row))
}
Cells.propTypes = {
    /**
     * JSON object array json
     */
    /**
     * Table options
     */
    row: PropTypes.object,
}

Cells.defaultProps = {

    row: {
        
    }
}
export default Cells