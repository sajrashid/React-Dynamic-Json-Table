import { ACTIONS } from "../reducers/actions"
import React from "react"

const FilterCols = ({ state, dispatch }) => {
    const options = state.options
    const customFilterColArr = options.filterCols || []
    const columns = state.filterColobj
    const cols = Object.keys(columns)

    const searchFilterCh = (e) => {
        dispatch({ type: ACTIONS.SEARCH, payload: { search: { searchString: e.currentTarget.value, columns: [e.currentTarget.name] }, searchFilters: true } })
    }


    const onDualSliderChange = (e) => {
        let name = e.currentTarget.name
        if (name.includes("Min")) {
            name = name.replace('Min', '')
            dispatch({ type: ACTIONS.DUALSLIDERCHANGE, payload: { name: name, value: e.currentTarget.value, type: 'min' } })
        } else {
            name = name.replace('Max', '')
            dispatch({ type: ACTIONS.DUALSLIDERCHANGE, payload: { name: name, value: e.currentTarget.value, type: 'max' } })

        }
    };


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
                if (filterCol[key].type === 'dualRange') {

                    const minforMax = filterCol[key].min / 2;
                    const maxforMin = filterCol[key].max / 2;

                    return <td key={key}>
                        <label className="minlabel" for="minRange">
                            {state.filterColobj[key].min}
                        </label>
                        <input
                            name={key + "Min"}
                            type="range"
                            min={filterCol[key].min}
                            max={maxforMin}
                            onChange={onDualSliderChange}
                            value={state.filterColobj[key].min}
                        />

                        <input
                            name={key + "Max"}
                            type="range"
                            min={maxforMin}
                            max={filterCol[key].max}
                            onChange={onDualSliderChange}
                            value={state.filterColobj[key].max}
                        />
                        <label className="maxLabel" for="maxRange">
                            {state.filterColobj[key].max}
                        </label>
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
