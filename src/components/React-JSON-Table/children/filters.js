import { ACTIONS } from "../reducers/actions"
import React from "react"

function Filters({ state, dispatch }) {
    const options = state.options
    const searchInputCss = options.searchInputCss || 'yoyo'
  
        const searchFilterChange = (e) => {
            dispatch({ type: ACTIONS.SEARCH, payload: { search: e.currentTarget.value } })
        }
        return( <td className={searchInputCss}>
            <span>
                <input placeholder="Search..." onChange={searchFilterChange} type='text' value={state.searchFilter}></input>
            </span>
        </td>
 )


}
export default Filters