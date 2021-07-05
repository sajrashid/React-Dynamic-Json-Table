import { ACTIONS } from '../reducers/actions'
import Cells from './cells'
import React from "react"

const Rows =  ({ state, dispatch,rowClick }) => {
    const options = state.options || {}
    const styles = options.rowCss || ''
    const selectedRowCss = options.selectedRowCss || ''
    const cssClasses = ` ${styles}`
    const idColIdx = options.idCol ? Object.keys(state.json[0]).indexOf(options.idCol) : 0

    function handleRowClick(e) {
        let selectedRow ={}
        state.json.forEach(row => {
             const rowId = row[Object.keys(row)[idColIdx]]
            if (rowId.toString() === e.currentTarget.id.toString())
            selectedRow=row
        });
        rowClick(selectedRow)
        dispatch({ type: ACTIONS.SELECTEDROW, payload: { row: selectedRow }})
    }

    const createRows = () => {
        return state.json.map((row, index) => {
            const rowId = row[Object.keys(row)[idColIdx]] // eslint-disable-next-line
            return <tr className={cssClasses} key={index} className={state.selectedRow === row ? `${selectedRowCss}` : ""} id={rowId} onClick={handleRowClick} >
                <Cells state={state} row={row} />
            </tr>
        })
    }

    return (createRows())
}
export default Rows


