import { ACTIONS } from "../components/react-dj-table/reducers/actions"
import React from "react"
import Table from '../components/react-dj-table/index'
import employees from '../Employees.json'

//import cars from "../data.json"


// import Table from 'react-dj-table'
let mydispatch = null


export default function Advanced() {
    const options = {
        tableCss: 'table-fixed cursor-pointer w-full',
        searchInputCss: 'searchInputCss',
        cellCss: 'break-words  border p-4 ',
        pagerCss: 'pager',
        pageable: true,
        pageSize: 5,
        theadCss: 'bg-blue-500 text-gray-200 px-8 py-4',
        sortable: true,
        editable: true,
        searchable: true,
        hiddenCols: ["last_name"],
        selectedRowCss: "selectedRow",
        labelCols: [{ gender: 'Gender' }],
        footer: "<div class'myfooter'>footer</div>",
        // eslint-disable-next-line no-template-curly-in-string
        dateCols: [{ RetiredDate: 'en-GB' }],
        dateOptions: { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' },
        iconCols: [{ email: '<i class="envelope icon"></i>Email' },
        { Avatar: '<i class="id badge icon"></i>Avatar' }],
        // eslint-disable-next-line no-template-curly-in-string
        customCols: [{ Avatar: '<div style="min-height:3em"><img  style="width:60px; height:60px"  decoding="async" src=${Avatar}></img></div' }] //adding min height reduces loading flash as image cells are not resized vertically
    }
    const [userMessage, setUserMessage] = React.useState('')


    const [msgClassName, setMsgClassName] = React.useState('msgDiv')

    const handleRowClick = (row, oldRowData, action, dispatch) => {
        mydispatch = dispatch
        
        if (action === 'SELECT') {
            console.log(action,row)
         // informational
         // returns row
        
        }
        if (action === 'VALIDATE') {
            console.log("VALIDATE")
            // old data what do you want to do
            // user has not clicked the update button 
            // and they have attempted to move to a different row
            // warn user they will loose the changes and to accept or reject
            setUserMessage('Warning: you have not saved your changes, click OK to go back, then click update to save your changes! Click Undo to undo your changes.')
            setMsgClassName('msgDiv warning msgDivShow')
            //dispatch({ type: ACTIONS.REJECTCHANGES})
        }
        if (action === "UPDATE") {
            console.log(action,row,oldRowData)
            // put or post data to DB or confirm changes, with the user 
            dispatch({ type: ACTIONS.CONFIRMUPDATE})  
             // save to DB
             // incase of failure call rejectchanges
        }

        if (action === "CREATE"){
            // informational 
            // user has clicked create
            console.log(action)
            // no confirm is needed as it's a temp UI change
            // action will be triggered next is insert unless users decides to cancel
           
        }
        if (action === "DELETE"){
            console.log(action)
            // delete from DB, once confirmed delete from table JSON
            // no need to refresh your data
            dispatch({ type: ACTIONS.CONFIRMDELETE})  
        }
        if (action === "INSERT"){
            console.log(action,row)
            // insert DB, once confirmed  from DB confirm
            // incase of failure call rejectchanges
            // no need to refresh your data
            dispatch({ type: ACTIONS.CONFIRMINSERT})  
        }
    }

  


    const btnClickHandler = (e) => {
        const btnName = e.currentTarget.name
        if (btnName === "ok") {
            //  dispath nothing 
            setMsgClassName('msgDiv')
        }
        if (btnName === "undo") {
            console.log(ACTIONS.REJECTCHANGES)
            console.log(mydispatch)
            setMsgClassName('msgDiv')
            mydispatch({ type: ACTIONS.REJECTCHANGES })
        }

    }
    return (
        <div className="w-full p-4 mb-2 bg-green-50">
            <div className="w-full mt-2 mb-2 bg-green-100 ">
                <div className="w-full p-4 mb-2 bg-white" >
                    <div className="w-full p-4 mb-4">
                        <div className={msgClassName} >
                            <span>{userMessage} </span>
                            <div className="msgBtnDiv">
                                <button name="ok" onClick={btnClickHandler}>OK</button>
                                <button name="undo" onClick={btnClickHandler}>Undo</button>
                            </div>


                        </div>
                      
                        <Table json={employees} rowClick={handleRowClick} options={options} />
                    </div>
                </div>
            </div>
        </div>
        )
}