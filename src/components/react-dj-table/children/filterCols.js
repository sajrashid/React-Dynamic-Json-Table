import { ACTIONS } from "../reducers/actions"
import React from "react"

const FilterCols = ({ state, dispatch }) => {
    const options = state.options
    const customFilterColArr = options.filterCols || []
    const columns = state.filterColobj

    const searchFilterCh = (e) => {
        dispatch({ type: ACTIONS.SEARCH, payload: { search: { searchString: e.currentTarget.value, columns: [e.currentTarget.name] }, searchFilters: true } })
    }
    const filterColsCss = options.filterColsCss || ''
    const cssClasses = `${filterColsCss}`
    const cols = Object.keys(columns)
    const createFilters = () => {
        let placeholder = `search..${state.jsonCopy.length} records`

        return cols.map((key) => {
            //const isFilterCol = customFilterColArr.find(e => e === key) ? true : false;
            return <td key={key}>
                <input className={cssClasses} name={key} id={"f" + key} onChange={searchFilterCh} placeholder={placeholder} type='text' value={cols[key]}></input>
            </td>


            // return <td key={key}></td>
        })
    }

    return (
        createFilters()
    )
}
export default FilterCols
