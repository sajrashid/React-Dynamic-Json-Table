import React from "react";
import helper from "../helpers/helper"

const pager = props => {
    const handleFocus = (e) => e.target.select();

    const createPager = () => {
        let arr = Object.keys(props.pagerIcons)
      
        return arr.map((key, index) => {
            const html = props.pagerIcons[key]
           
            if (index === 2) {
               
               return <React.Fragment key={index}>
                    <div><input onFocus={handleFocus} onChange={props.pagingInputChange} value={props.pagerInput} type="number" /></div>
                    <button id={key} onClick={props.pagingClick} dangerouslySetInnerHTML={helper.createMarkup(html)}></button>
                </React.Fragment>
            }
           
            if (index === 3) {
               
               return <React.Fragment key={index}>
                    <button id={key} onClick={props.pagingClick} dangerouslySetInnerHTML={helper.createMarkup(html)}></button>
                    <div className='pageCounter'>{props.pageNo}&nbsp;of&nbsp;{props.totalpages}&nbsp;pages</div>
                </React.Fragment>
            }

            return <button key={index} id={key} onClick={props.pagingClick} dangerouslySetInnerHTML={helper.createMarkup(html)}></button>
        })
    }

    return (
        createPager()
    )

}

export default pager