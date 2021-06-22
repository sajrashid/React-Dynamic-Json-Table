import React from "react";
import _ from 'lodash';
import helper from "../helpers/helper";
import { useCustomContext } from '../customContext';

function Cells({ state, row}) {
    const data = useCustomContext()
    const options = state.options || {}
    const styles = options.cellStyles || ''
    const cssClasses = ` ${styles}`
    const customColArr = options.customCols
    const cellColorArr = options.cellColor
    const hiddenColArr = options.hiddenCols
    const dateColArr = options.dateCols
    const dateOptions = options.dateOptions || {}
    const columns = Object.keys(row)

    const createCells = (row) => {
        return columns.map((key) => {
            const isHidden = _.includes(hiddenColArr, key)
            const isCustom = _.find(customColArr, key)
            const isCellColorArr = _.includes(cellColorArr, key)
            const isCheckBox = typeof row[key] === "boolean"
            const isDate = _.find(dateColArr, key)
            const locale = isDate ? dateColArr[key] : ''
            return isHidden ? null :
                isCustom ? <td className={cssClasses} key={key} dangerouslySetInnerHTML={helper.createMarkupLiteral(key, isCustom[key], row[key])}></td> :
                    isCellColorArr ? <td className={cssClasses} style={{ backgroundColor: row[key] }} key={key}></td> :
                        isCheckBox && options.checkBox !== false ? <td className={cssClasses} key={key}> <input readOnly type='checkbox' checked={row[key]}></input></td> :
                            isDate ? <td className={cssClasses} key={key}>{new Date(row[key]).toLocaleDateString(locale, dateOptions)}</td> :
                                <td className={cssClasses} key={key}>{row[key].toString()}</td>

        })
    }
    return (createCells(row))
}
export default Cells;