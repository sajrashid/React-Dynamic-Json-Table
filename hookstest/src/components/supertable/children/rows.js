import { DataContext } from '../supertable';
import React, {useContext} from "react";
import Cells from './cells'
const Row = props => {
    const data = useContext(DataContext)
    const json = data.json || []
    const options = data.options || {}
    const styles = options.rowStyles || ''
    const cssClasses = ` ${styles}`
    const idColIdx = options.idCol ? Object.keys(data.json[0]).indexOf(options.idCol) : 0
    const createRows = () => {
        return json.map((row, index) => {
            const rowId = row[Object.keys(row)[idColIdx]] // eslint-disable-next-line
            return <tr className={cssClasses} onClick={props.rowClick} id={rowId} key={index} className={props.selectedRowId == rowId ? "selectedRow" : ""}><Cells row={row} options={options} /></tr>
        })
    }

    return (createRows())
}
export default Row


