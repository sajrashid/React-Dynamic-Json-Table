
import React from "react";
import Cells from './cells'
const row = props => {
    const options = props.options
    const styles = options.rowStyles || ''
    const cssClasses = ` ${styles}`
    const idColIdx = options.idCol ? Object.keys(props.json[0]).indexOf(options.idCol) : 0
    const json = props.json

    const createRows = () => {
        return json.map((row, index) => {
            const rowId = row[Object.keys(row)[idColIdx]] // eslint-disable-next-line
            return <tr className={cssClasses} onClick={props.rowClick} id={rowId} key={index} className={props.selectedRowId == rowId ? "selectedRow" : ""}><Cells row={row} options={options} /></tr>
        })
    }

    return (createRows())
}
export default row


