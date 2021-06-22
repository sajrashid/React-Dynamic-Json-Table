import { ACTIONS } from '../actions'
import React from "react";
import helper from '../helpers/helper';

export default function Thead({ state, dispatch }) {
    const options = state.options
    const hiddenColumns = options.hiddenCols || []
    const columns = Object.keys(state.jsonCopy[0]) || {}
    const labelColsArr = options.labelCols || []
    const iconColsArr = options.iconCols || []
    const styles = options.theadStyles || ''
    const cssClasses = ` ${styles}`
    const createHeader = () => {
        return columns.map((key) => {

            // Test if the options Hidden colums array includes the current column

            const isHidden = hiddenColumns.includes(key)

            // Test if we can find the current column in options Label array

            const isLabel =  labelColsArr.find(e => e ===  key)
            const isIcon = iconColsArr.find(e => e === key)

            //if isHidden Return a null Column and exit 
            return isHidden ? null :
                //Return a Label Column and exit 
                isLabel ? <th className={cssClasses} id={key} key={key} onClick={(e) => dispatch({ type: ACTIONS.SORT, payload: { id: e.currentTarget.id } })} dangerouslySetInnerHTML={helper.createMarkup(key, isLabel[key], key)}></th> :
                    isIcon ? <th className={cssClasses} id={key} key={key} onClick={(e) => dispatch({ type: ACTIONS.SORT, payload: { id: e.currentTarget.id } })} dangerouslySetInnerHTML={helper.createMarkupLiteral(key, isIcon[key], key )}></th> :
                        <th className={cssClasses} id={key} key={key} onClick={(e) => dispatch({ type: ACTIONS.SORT, payload: { id: e.currentTarget.id } })} >{key}</th>
        })
    }

    return (
        createHeader()
    )

}
