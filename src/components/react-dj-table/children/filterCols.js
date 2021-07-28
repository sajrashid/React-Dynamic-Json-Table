import { ACTIONS } from "../reducers/actions"
import React from "react"

const FilterCols = ({ state, dispatch }) => {
    const options = state.options
    const customFilterColArr = options.filterCols || []
    const columns = state.filterColobj
    const cols = Object.keys(columns)

    const searchFilterCh = (e) => {
        console.log(e)
        dispatch({ type: ACTIONS.SEARCH, payload: { search: { searchString: e.currentTarget.value, columns: [e.currentTarget.name] }, searchFilters: true } })
    }
    const filterColsCss = options.filterColsCss || ''
    const cssClasses = `${filterColsCss}`
    const createFilters = () => {
        let placeholder = `search..${state.jsonCopy.length} records`

        return cols.map((key) => {
            const filterCol = customFilterColArr.find((o) => o.hasOwnProperty(key))
            if (filterCol) {
                if (filterCol[key].type === 'text') {
                    return <td key={key}>
                        <input className={cssClasses} name={key} id={"f" + key} onChange={searchFilterCh} placeholder={placeholder} type='text' value={cols[key]}></input>
                    </td>
                }
                if (filterCol[key].type === 'number') {
                    return <td key={key}>
                        <input className={cssClasses} name={key} id={"f" + key} onChange={searchFilterCh} placeholder={placeholder} type='number' value={cols[key]}></input>
                    </td>
                }
                if (filterCol[key].type === 'checkbox') {
                    return <td key={key}>
                        <input className={cssClasses} name={key} id={"f" + key} onChange={searchFilterCh} placeholder={placeholder} type='checkbox' value={cols[key]}></input>
                    </td>
                }
                if (filterCol[key].type === 'range') {
                    return <td key={key}>
                        <input min={filterCol[key].min} max={filterCol[key].max} className={cssClasses} name={key} id={"f" + key} onChange={searchFilterCh} placeholder={placeholder} type='range' value={cols[key]}></input>
                    </td>
                }

            }

            return <td key={key}></td>
        })
    }

    return (
        createFilters()
    )
}
export default FilterCols
