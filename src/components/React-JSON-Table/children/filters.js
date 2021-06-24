import { ACTIONS } from "../reducers/actions"
import React from "react"
import { useDebounce } from "use-debounce";

function Filters({ state, dispatch }) {
    const options = state.options
    const searchInputCss = options.searchInputCss || ''
   // const [debouncedText] = useDebounce(state.searchString, 5);
    const searchFilterChange = (e) => {
        dispatch({ type: ACTIONS.SEARCHINPUTCHANGE, payload: { search: e.currentTarget.value } })
       // if (debouncedText || debouncedText.length < 1) {
            dispatch({ type: ACTIONS.SEARCH, payload: { search: e.currentTarget.value } })
       // }
    }
    return (<td className={searchInputCss}>
        <span>
            <input placeholder="Search..." onChange={searchFilterChange} type='text' value={state.searchString}></input>
        </span>
    </td>
    )


}
export default Filters