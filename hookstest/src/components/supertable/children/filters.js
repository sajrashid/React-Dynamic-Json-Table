import React, { useState } from "react"

const Filters = props => {
    const options = props.options
    const searchInputCss=options.searchInputCss || ''
    let [searchFilter, updateSearchFilter] = useState('')
    const createfilters = () => {
        const searchFilterChange = (e) => {
            updateSearchFilter(e.currentTarget.value)
            props.searchFilter(e.currentTarget.value)
        }

        return <td className={searchInputCss}>
            <span>
                <input placeholder="Search..." onChange={searchFilterChange} type='text' value={searchFilter}></input>
            </span>
        </td>
    }

    return (
        createfilters()
    )

}
export default Filters