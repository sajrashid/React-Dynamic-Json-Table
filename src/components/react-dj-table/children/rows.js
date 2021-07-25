import { ACTIONS } from '../reducers/actions'
import Cells from './cells'
import React from "react"

const Rows = ({ state, dispatch, rowClick }) => {
    const options = state.options || {}
    const styles = options.rowCss || ''
    const selectedRowCss = options.selectedRowCss || ''
    const cssClasses = `selected ${selectedRowCss} ${styles}`
    const idColIdx = options.idCol ? Object.keys(state.json[0]).indexOf(options.idCol) : 0
    const isEditable = options.editable || false

    function handleRowClick(e) {
        let selectedRow = {}
        state.json.forEach(row => {
            const rowId = row[Object.keys(row)[idColIdx]]
            if (rowId.toString() === e.currentTarget.id.toString()) {
                selectedRow = row
            }
        });
  
        const isRowSelected = e.currentTarget.classList.contains('selected')

        if (!isRowSelected) {
            // selected row dows not contain selected class
            // it is not the currently selected row (if any)
            // if this is the first select then we should  be in here
            // the previous row should not exist or should be zapped by cancel
            // or any button actions like put/post/deleted
            // so lets test if the previosuly selectedRow exits
            if (state.selectedRowCopy === null) {
                dispatch({ type: ACTIONS.SELECTEDROW, payload: { row: selectedRow } })
                rowClick(selectedRow, null, "SELECT")
                dispatch({ type: ACTIONS.CREATESELECTEDROWCOPY, payload: { row: selectedRow } })
                return
            } else {
                if (JSON.stringify(state.selectedRow) !== (JSON.stringify(state.selectedRowCopy) || state.selectedRowCopy !== {})) {
                    // oops previous row exist
                    // check if data in selectedRow has changed
                    rowClick(selectedRow, state.selectedRowCopy, "VALIDATE")
                } else {

                        dispatch({ type: ACTIONS.SELECTEDROW, payload: { row: selectedRow } })
                        rowClick(selectedRow, null, "SELECT")
                        dispatch({ type: ACTIONS.CREATESELECTEDROWCOPY, payload: { row: selectedRow } })

                }
            }
        }

    }


    const createRows = (row) => {
        return state.json.map((row, index) => {
            const rowId = row[Object.keys(row)[idColIdx]] // eslint-disable-next-line
            if (state.selectedRow === row && isEditable === true) {
                return <tr  key={index} className={state.selectedRow === row ? `${cssClasses}` : ""} id={rowId} onClick={handleRowClick} >
                    <Cells dispatch={dispatch} state={state} row={row} editable={true} />
                </tr>
            } else {
                return <tr   key={index} className={state.selectedRow === row ? `${cssClasses}` : ""} id={rowId} onClick={handleRowClick} >
                    <Cells dispatch={dispatch} state={state} row={row} editable={false} />
                </tr>
            }

        })
    }

    return (createRows())
}
export default Rows
