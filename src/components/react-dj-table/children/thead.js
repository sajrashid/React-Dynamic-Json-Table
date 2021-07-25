import {createMarkup, createMarkupLiteral} from '../utils/utils'

import { ACTIONS } from '../reducers/actions'
import React from "react"

const Thead = ({ state, dispatch }) => {
    const options = state.options
    const hiddenColArr = options.hiddenCols || []
    const columns = Object.keys(state.jsonCopy[0]) || {}
    const labelColsArr = options.labelCols || []
    const iconColsArr = options.iconCols || []
    const styles = options.theadCss || ''
    const cssClasses = ` ${styles}`
    const createHeader = () => {
        return columns.map((key) => {

            // Test if the options Hidden colums array includes the current column
            // Test if we can find the current column in options Label array
            const isHidden = hiddenColArr.find(e => e === key) ? true: false;
            const isLabel = labelColsArr.find( (o) => o.hasOwnProperty(key) )
            const isIcon = iconColsArr.find( (o) => o.hasOwnProperty(key) )
          
            //if isHidden Return a null Column and exit

            if(isHidden) {
                return null
            }
            if(isLabel) {
                return <th className={cssClasses} id={key} key={key} onClick={(e) => dispatch({ type: ACTIONS.SORT, payload: { id: e.currentTarget.id } })} dangerouslySetInnerHTML={createMarkup(isLabel[key])}></th>
            }
            if(isIcon) {
                return <th className={cssClasses} id={key} key={key} onClick={(e) => dispatch({ type: ACTIONS.SORT, payload: { id: e.currentTarget.id } })} dangerouslySetInnerHTML={createMarkupLiteral(key, isIcon[key], key )}></th>
            }

            return <th className={cssClasses} id={key} key={key} onClick={(e) => dispatch({ type: ACTIONS.SORT, payload: { id: e.currentTarget.id } })} >{key}</th>
        })
    }

    return (
        createHeader()
    )

}
export default Thead
