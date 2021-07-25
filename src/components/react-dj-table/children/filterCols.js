import { ACTIONS } from "../reducers/actions"
import React from "react"

const FilterCols= ({ state, dispatch }) => {
    const options = state.options
    const customFilterColArr = options.filterCols || []
    const columns = Object.keys(state.jsonCopy[0])

    const searchFilterCh = (e) => {
            dispatch({ type: ACTIONS.SEARCH, payload: {search:{searchString:e.currentTarget.value, columns:[e.currentTarget.id] }   } })
    }


    const createFilters = () => {

        return columns.map((key) => {
            const isFilterCol = customFilterColArr.find(e => e === key) ? true: false;

            if (isFilterCol) {
             return <td key={key}>
                        <input id={"f" + key} onChange={searchFilterCh} placeholder="Search..." type='text' value={state.filterColArr[0][key]}></input>
                    </td>
         }

         return <td key={key}></td>
        })
    }

    return (
        createFilters()
    )
}
export default FilterCols
