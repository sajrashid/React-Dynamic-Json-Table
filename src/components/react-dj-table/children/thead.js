import {createMarkup, createMarkupLiteral} from '../utils/utils'

import { ACTIONS } from '../reducers/actions'
import React from "react"
import _ from 'lodash'

function Thead  ({ state, dispatch })  {
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
            const isHidden = _.includes(hiddenColArr, key)
            const isLabel = _.find(labelColsArr, key)
            const isIcon = _.find(iconColsArr, key)
            //if isHidden Return a null Column and exit 
            return isHidden ? null :
                //Return a Label Column and exit 
                isLabel ? <th className={cssClasses} id={key} key={key} onClick={(e) => dispatch({ type: ACTIONS.SORT, payload: { id: e.currentTarget.id } })} dangerouslySetInnerHTML={createMarkup(isLabel[key])}></th> :
                    isIcon ? <th className={cssClasses} id={key} key={key} onClick={(e) => dispatch({ type: ACTIONS.SORT, payload: { id: e.currentTarget.id } })} dangerouslySetInnerHTML={createMarkupLiteral(key, isIcon[key], key )}></th> :
                        <th className={cssClasses} id={key} key={key} onClick={(e) => dispatch({ type: ACTIONS.SORT, payload: { id: e.currentTarget.id } })} >{key}</th>
        })
    }

    return (
        createHeader()
    )

}
export default Thead