import React, {useReducer} from 'react'

import GlobalSearch from './children/globalsearch'
import Pager from './children/pager'
import PropTypes from "prop-types"
import Rows from './children/rows'
import { TableReducer } from '../react-dj-table/reducers/tableReducer'
import Thead from './children/thead'
import {createMarkup} from '../react-dj-table/utils/utils'

/**
 * Component for displaying json data in a HTML Table.
 *
 * @component
 * @example
 * 
 * const json= [{
    id:1,
    name: "Yoda Master",
    age: 30
  }]
 * const options = {
    tableCss: 'table-fixed cursor-pointer w-full',
    cellStyles: 'break-words  border p-4 ',
    pageable: true,
    selectable: true,
    customCols: [{ 'Avatar': '<div style="min-height:6em"><img  decoding="async" src=${Avatar}></img></div' }] //adding min height reduces loading flash as image cells are not resized vertically
}
 * return (
 *   <Table json={json} options={options} />
 * )
 */

const Table = (props) => {
    // setup initial state
    const options = props.options || {}
    let json = props.json || []
    const colspan = Object.keys(json[0]).length
    const selectedRowCss = options.selectedRowCss || ''
    const sortDirection = 'asc'
    const searchInputCss = options.searchInputCss || ''
    const pagerInput = 1
    const pageNo = 1
    const pagerIcons = options.pagerIcons || { first: '&lsaquo;', previous: '&laquo;', next: '&raquo', last: '&rsaquo;' }
    const pageSize = options.pageSize || 10
    const totalPages = (Math.ceil(json.length / pageSize))
    const pageable = options.pageable || false
    const searchable = options.searchable || false
    const editable=options.editable|| false
    let footer =false
    if (options.footer) footer=true
    const footerHtml= options.footer || ''
    const hiddenCols = options.hiddenCols|| []
    const hiddenColsCount=hiddenCols.length 
    // todo move into hook
    const paginate = (array, page_size, page_number) => {
        return array.slice(page_number * page_size, (page_number + 1) * page_size);
    }

    if (pageable) {
        json = paginate(json || [], pageSize, 0)
    }


    const initialState = {
        json: json, jsonCopy: props.json, options: options, pageable: pageable, selectedRow: {},selectedRowCopy: {}, selectedRowCss: selectedRowCss,
        sortDirection: sortDirection, pagerInput: pagerInput, pageSize: pageSize, pageSizeCopy: pageSize, totalPages: totalPages,
        pageNo: pageNo, pagerIcons: pagerIcons, searchString: ''
    }

    const [state, dispatch] = useReducer(TableReducer, initialState)

    const styles = options.tableCss || ''
    const cssClasses = ` ${styles}`
    const pagerCss = options.pagerCss || ''
    const rowClick = (row) => {
        if (options.selectable !== false) {
            if (props.rowClick) {
                props.rowClick(row)
            }
        }
    }
    return (
        <React.Fragment>


            <table className={cssClasses}>
                <thead>
                    {
                        searchable &&
                        <tr>
                            <td colSpan={colspan - hiddenColsCount} className={searchInputCss}>
                                <GlobalSearch state={state} dispatch={dispatch} />
                            </td>
                        </tr>
                    }

                    <tr ><Thead className={cssClasses} state={state} dispatch={dispatch}></Thead></tr>
                </thead>
                <tbody>
                    <Rows className={cssClasses} rowClick={rowClick} state={state} dispatch={dispatch} />
                </tbody>
                {footer && 
                <tfoot>
                    <tr>
                    <td colSpan={colspan - hiddenColsCount} dangerouslySetInnerHTML= {createMarkup(footerHtml)} >
                     </td>
                    </tr>
                </tfoot>}
            </table>
            {
                pageable &&
                <div colSpan={colspan - hiddenColsCount} >
                    <div className={pagerCss} >
                        <Pager state={state} dispatch={dispatch} />
                    </div>
                </div>}
                {
                editable &&
                <div className="crudDiv"> 
                    <button >Update</button>
                    <button >Cencel</button>
                    <button>Create</button>
                    <button>Delete</button>
                </div>
                }
        </React.Fragment>
    )
}
Table.propTypes = {
    /**
     * JSON object array json
     */
    json: PropTypes.array.isRequired,
    /**
     * Table options
     */
    options: PropTypes.object,
}

Table.defaultProps = {

    json: [],
    options: {
        tableCss: '',
        cellStyles: '',
        pageable: false,
        selectable: false,
    }
}
export default React.memo(Table)