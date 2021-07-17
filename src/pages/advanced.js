import { ACTIONS } from "../components/react-dj-table/reducers/actions"
import React from "react"
import Table from '../components/react-dj-table/index'
import employees from '../Employees.json'

// import Table from 'react-dj-table'

export default function Advanced() {
    const options = {
        tableCss: 'table-fixed cursor-pointer w-full',
        searchInputCss: 'searchInputCss',
        cellCss: 'break-words  border p-4 ',
        pagerCss: 'pager',
        pageable: true,
        pageSize:5,
        theadCss: 'bg-blue-500 text-gray-200 px-8 py-4',
        sortable: true,
        editable:true,
        searchable: true,
        hiddenCols: ["last_name"],
        selectedRowCss: "selectedRow",
        labelCols: [{ gender: 'Gender' }],
        footer:"<div class'myfooter'>footer</div>",
        // eslint-disable-next-line no-template-curly-in-string
        dateCols: [{ RetiredDate: 'en-GB' }],
        dateOptions: { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' },
        iconCols: [{ email: '<i class="envelope icon"></i>Email' },
        { Avatar: '<i class="id badge icon"></i>Avatar' }],
        // eslint-disable-next-line no-template-curly-in-string
        customCols: [{ Avatar: '<div style="min-height:3em"><img  style="width:60px; height:60px"  decoding="async" src=${Avatar}></img></div' }] //adding min height reduces loading flash as image cells are not resized vertically
    }
    const [userMessage,setUserMessage]=React.useState('')
    

    const [msgClassName ,setMsgClassName]=React.useState('msgDiv')
    

    const handleRowClick = (row, oldRowData, action, dispatch ) => {
        console.log(action)
        if(action==='NOACTION'){
            // old data what do you want to do
            // user has not clicked the update button 
            // and they have attempted to move to a different row
            // warn user they will loose the changes and to accept or reject
           setUserMessage('Warning: you have not saved your changes, click OK to go back, then click update to save your changes! Click Undo to undo your changes.')
           setMsgClassName('msgDiv warning msgDivShow')
           dispatch({ type: ACTIONS.REJECTCHANGES})
        }
        if(action===ACTIONS.UPDATE){
            console.log(action)

            // confirm changes, with the use 
            //  or assume ok and commit to the DB
        }

    }

    return (
        <div className="w-full p-4 mb-2 bg-green-50">
            <div className="w-full mt-2 mb-2 bg-green-100 ">
                <div className="w-full p-4 mb-2 bg-white" >
                    <div className="w-full p-4 mb-4">
                        <div  className={msgClassName} >
                            <span>{userMessage} </span>
                            <div className="msgBtnDiv">
                            <button>OK</button>
                            <button>Undo</button>
                            </div>
                            
                           
                        </div>
                        <Table json={employees} rowClick={handleRowClick} options={options} />
                    </div>
                </div>
            </div>
        </div>)
}