import { ACTIONS } from '../reducers/actions';
import React from "react";
import { createMarkup } from '../utils/utils'

function Pager({ state, dispatch }) {
    const handleFocus = (e) => e.target.select();

    function handlePagingClick(e) {
        let buttonName = e.currentTarget.id.toString().toUpperCase()
        dispatch({ type: ACTIONS[buttonName] })
    }
    const pagingInputChange = (e) => {
        e.preventDefault()
        const el = e.currentTarget
        let pagerInputValue = parseInt(el.value)
        if ((pagerInputValue < state.totalPages + 1) && (pagerInputValue > 0)) {
            dispatch({ type: ACTIONS.GOTOPAGE, payload: { gotoPage: pagerInputValue } })
        }

        e.target.select();
    }
    const itemsPerPageInputChange = (e) => {
        const el = e.currentTarget
        let itemsPerPage = parseInt(el.value)
        if ((itemsPerPage > 0) && (itemsPerPage < state.jsonCopy.length + 1)) {
            dispatch({ type: ACTIONS.ITEMSPERPAGE, payload: { itemsPerPage: itemsPerPage } })
        }
    }

    const createShowOptions=()=>{
        const showOptions = []
        if (state.jsonCopy.length < 10) showOptions.push(<option value={state.json.length}>Show {state.json.length}</option>)
        if (state.jsonCopy.length > 9)  showOptions.push(<option value={10}>Show {10}</option>)
        if (state.jsonCopy.length > 19)  showOptions.push(<option value={20}>Show {20}</option>)
        if (state.jsonCopy.length > 29)  showOptions.push(<option value={30}>Show {30}</option>)
        if (state.jsonCopy.length > 49)  showOptions.push(<option value={50}>Show {50}</option>)
        if (state.jsonCopy.length > 99)  showOptions.push(<option value={100}>Show {100}</option>)
        return showOptions
    }

    const createPager = () => {
        let arr = Object.keys(state.pagerIcons)


        // make show options object
      

        return arr.map((key, index) => {
            const html = state.pagerIcons[key]
            var disabled = false

            if (key === 'first') {
                state.pageNo < 2 ? disabled = true : disabled = false
                return <React.Fragment key={index}>
                    <button data-content={key} disabled={disabled} key={index} id={key} onClick={handlePagingClick} dangerouslySetInnerHTML={createMarkup(html)}></button>

                </React.Fragment>
            }

            if (key === 'previous') {
                state.pageNo < 2 ? disabled = true : disabled = false
                return <button data-content={key} disabled={disabled} key={index} id={key} onClick={handlePagingClick} dangerouslySetInnerHTML={createMarkup(html)}></button>

            }

            if (key === 'next') {
                state.pageNo === state.totalPages ? disabled = true : disabled = false
                return <React.Fragment key={index}>
                    <button data-content={key} disabled={disabled} id={key} onClick={handlePagingClick} dangerouslySetInnerHTML={createMarkup(html)}></button>
                </React.Fragment>
            }

            if (key === 'last') {
                state.pageNo === state.totalPages ? disabled = true : disabled = false
                return <React.Fragment key={index}>
                    <button data-content={key} disabled={disabled} id={key} onClick={handlePagingClick} dangerouslySetInnerHTML={createMarkup(html)}></button>
                    <div>Go to page<input data-content='page no' onFocus={handleFocus} onChange={pagingInputChange} value={state.pagerInput} type="number" /></div>
                   
                    <div className="numberOfPages">
                        {state.pageNo}&nbsp;of&nbsp;{state.totalPages}&nbsp;pages
                    </div>
                    <div>
                        <select data-content='items per page' onChange={itemsPerPageInputChange} type="number" max="10000" value={state.pageSize} >
                            {createShowOptions()}
                        </select >
                    </div>
                </React.Fragment>
            }

            return <button key={index} id={key} onClick={handlePagingClick} dangerouslySetInnerHTML={createMarkup(html)}></button>
        })
    }

    return (
        createPager()
    )

}

export default Pager