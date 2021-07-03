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
function Cells({ state, row}){
    const options = state.options 
    const styles = options.cellCss || ''
    const cssClasses = ` ${styles}`
    const customColArr = options.customCols || []
    const hiddenColArr = options.hiddenCols  || []
    const dateColArr = options.dateCols  || []
    const dateOptions = options.dateOptions || {}
    const columns = Object.keys(row)

    
    const createCells = (row) => {
        return columns.map((key) => {

            // we need to test to determine the types
            // prefe in some sort of order
            // testing for hidden colums first as we can just step out
            // if we match hidden
            const isHidden = _.includes(hiddenColArr, key)

            // for a hidden column we want to return null 
            if(isHidden) return null 

            // next test a bool type as it quick and we can eliminate as effeciently as possible
            const isCheckBox = typeof row[key] === "boolean"

            // return a checkbox unless options set to false
            if(isCheckBox && options.checkBox !== false) return <td className={cssClasses} key={key}> <input readOnly type='checkbox' checked={row[key]}></input></td>  

            // next we can test if it's a custom type
            const isCustom = _.find(customColArr, key)
            // the markup is sanitised and returned before being inserted into the dom
            // dompurify is used in the utility function to clean the input
            if(isCustom) return <td className={cssClasses} key={key} dangerouslySetInnerHTML={createMarkupLiteral(key, isCustom[key], row[key])}></td> 
           
            // date types are tricky as you know
            // probabaly need a few to cover as many scenarious as possible
            // first check if the dateCol has been specified
            // then go with the user options
            const isDateCol = _.includes(dateColArr, key)
            // get the locale is specified from options.dateOptions
            const locale= isDateCol ? dateColArr[key] :''

            console.log(locale)
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
     state: PropTypes.object.isRequired,
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