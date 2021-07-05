import { ACTIONS } from "../reducers/actions"
import React from "react"

function Filters({ state, dispatch }) {
    // const [debouncedText] = useDebounce(state.searchString, 5);
    const searchFilterChange = (e) => {
        // if (debouncedText || debouncedText.length < 1) {
        dispatch({ type: ACTIONS.SEARCH, payload: { search: e.currentTarget.value } })
        // }
    }
    return (
        <span>
            <input placeholder="Search..." onChange={searchFilterChange} type='text' value={state.searchString}></input>
        </span>
    )


}
export default Filters