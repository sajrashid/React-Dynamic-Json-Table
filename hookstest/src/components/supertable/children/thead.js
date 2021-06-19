import React,{useState, useReducer} from "react";
import _ from 'lodash';
import helper from '../helpers/helper';
import { ACTIONS } from '../actions'
import { useCustomContext } from "../customContext";
export default function Thead ({sortDispatch}) {
    const data= useCustomContext()
    const options = data.options
    const hiddenColumns = options.hiddenCols || []
    const columns = Object.keys(data.json[0])
    const labelColsArr = data.options.labelCols || []
    const styles = options.theadStyles || ''
    const cssClasses = ` ${styles}`
    const createHeader = () => {
        return columns.map((key) => {
            const isHidden = hiddenColumns.includes(key)
            const isLabel = _.find(labelColsArr, key)
            return isHidden ? null :
                isLabel ? <th className={cssClasses} id={key} key={key} onClick={(e) => sortDispatch({type:ACTIONS.SORT, payload:{id:e.currentTarget.id}})} dangerouslySetInnerHTML={helper.createMarkupLiteral(key, isLabel[key], key)}></th>
                    : <th  className={cssClasses}  id={key} key={key} onClick={(e) => sortDispatch({type:ACTIONS.SORT, payload:{id:e.currentTarget.id}})} >{key}</th>
        })
    }

    return (
        createHeader()
    )

}
