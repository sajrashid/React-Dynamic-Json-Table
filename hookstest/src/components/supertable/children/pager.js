import { useCustomContext  } from '../customContext';
import React from "react";
import helper from "../helpers/helper"
import { ACTIONS } from '../actions';

function Pager ({ state, dispatch }) {
    const handleFocus = (e) => e.target.select();

    function handlePagingClick(e){
        let buttonName=e.currentTarget.id.toString().toUpperCase()
        dispatch({type:ACTIONS[buttonName]})
    }
    const pagingInputChange = (e) => {
        e.preventDefault()
        const el = e.currentTarget
        let inputValue = parseInt(el.value)
        if ((inputValue < state.totalpages + 1) && (inputValue > 0)) {
        }

        e.target.select();
    }

    const createPager = () => {
        let arr = Object.keys(state.pagerIcons)
      
        return arr.map((key, index) => {
            const html = state.pagerIcons[key]
           
            if ( index === 2) {
               return <React.Fragment key={index}>
                    <div><input onFocus={handleFocus} onChange={pagingInputChange} value={state.pagerInput} type="number" /></div>
                    <button id={key} onClick={handlePagingClick} dangerouslySetInnerHTML={helper.createMarkup(html)}></button>
                </React.Fragment>
            }
           
            if (index === 3) {
               return <React.Fragment key={index}>
                    <button id={key} onClick={handlePagingClick} dangerouslySetInnerHTML={helper.createMarkup(html)}></button>
                    <div className='pageCounter'>{state.pageNo}&nbsp;of&nbsp;{state.totalpages}&nbsp;pages</div>
                </React.Fragment>
            }

            return <button key={index} id={key} onClick={handlePagingClick} dangerouslySetInnerHTML={helper.createMarkup(html)}></button>
        })
    }

    return (
        createPager()
    )

}

export default Pager