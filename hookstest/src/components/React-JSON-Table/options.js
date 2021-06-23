import PropTypes from "prop-types"

/**
 * Optional options object changes table properties
 * @component
 * @type {Object}
 * 
 * const options = {
    tableCss: 'table-fixed cursor-pointer w-full',
    cellStyles: 'break-words  border p-4 ',
    pageable: true,
    selectable: fasle, // default true  
    customCols: [{ 'Avatar': '<div style="min-height:6em"><img  decoding="async" src=${Avatar}></img></div' }] //adding min height reduces loading flash as image cells are not resized vertically
}
 * return (
 *   {options}
 * )
 */

const options={
    INITIALSTATE:'initialState',
    SELECTEDROW:'selectedRow',
    SORT:'sort',
    FIRST:'first',
    LAST:'last',
    NEXT:'next',
    PREVIOUS:'Previous',
    GOTOPAGE:'goToPage',
    ITEMSPERPAGE:'itemsPerPage',
    SEARCH:'search'
}

options.propTypes = {
    /**
     * options
     */
    options: PropTypes.object,
}

options.defaultProps = {
     options: {
        tableCss: 'table-fixed cursor-pointer w-full',
        cellStyles: 'break-words  border p-4 ',
        pageable: false, // default
        selectable: true,
    }
}

export default options