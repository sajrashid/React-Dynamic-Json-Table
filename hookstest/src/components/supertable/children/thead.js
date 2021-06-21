import React,{useReducer, useState} from "react";

import { ACTIONS } from '../actions'
import _ from 'lodash';
import helper from '../helpers/helper';
import { useCustomContext } from "../customContext";

export default function Thead ({dispatch}) {
    const data= useCustomContext()
    const options = data.options
    const hiddenColumns = options.hiddenCols || []
    const columns = Object.keys(data.json[0])
    const labelColsArr = data.options.labelCols || []
    const styles = options.theadStyles || ''
    const cssClasses = ` ${styles}`
    const createHeader = () => {
        return columns.map((key) => {

            // Test if the options Hidden colums array matches the current column

            const isHidden = hiddenColumns.includes(key)

            // Test if we can find the current column in options Label array
            
            const isLabel =  _.find(labelColsArr, key)

            //if isHidden Return a null Column and exit 
            return isHidden ? null :
            //Return a Label Column and exit 
                isLabel ? <th className={cssClasses} id={key} key={key} onClick={(e) => dispatch({type:ACTIONS.SORT, payload:{id:e.currentTarget.id}})} dangerouslySetInnerHTML={helper.createMarkupLiteral(key, isLabel[key], key)}></th>
                  
                : <th  className={cssClasses}  id={key} key={key} onClick={(e) => dispatch({type:ACTIONS.SORT, payload:{id:e.currentTarget.id}})} >{key}</th>
        })
    }

    return (
        createHeader()
    )

}
