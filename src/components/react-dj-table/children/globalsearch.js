import { ACTIONS } from "../reducers/actions"
import React from "react"

function GlobalSearch({ state, dispatch }) {

    const placeholder = ` search ${state.jsonCopy.length} records`

    const searchFilterChange = (e) => {
        const columns = Object.keys(state.jsonCopy[0])
        dispatch({ type: ACTIONS.SEARCH, payload: { search: { searchString: e.currentTarget.value, columns: columns } } })
    }
    return (
        <div>
            <input placeholder={placeholder} onChange={searchFilterChange} type='text' value={state.searchString}></input>
        </div>
    )


}
export default GlobalSearch
