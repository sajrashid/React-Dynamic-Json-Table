import { ACTIONS } from "../components/react-dj-table/reducers/actions"
import React from "react"
import Table from '../components/react-dj-table/index'
import cars from "../data.json"
import employees from '../Employees.json'
import products from '../Products.json'

let mydispatch = null
let currentDataSet = products

export default function Advanced() {
    const options = {
        tableCss: 'table-fixed cursor-pointer w-full',
        searchInputCss: 'searchInputCss',
        cellCss: 'break-words  border p-4 ',
        pagerCss: 'pager',
        pageable: true,
        editable: true,
        pageSize: 5,
        theadCss: 'bg-blue-500 text-gray-200 px-8 py-4',
        sortable: true,
        searchable: true,
        filterColsCss: 'filterCols',
        readOnly: ['id'],
        selectedRowCss: "selectedRow",
        labelCols: [{ gender: 'Gender' }],
        // filterCols: [{ Avatar: { type: 'text' }, id: { type: 'range', min: 1, max: 11 }, IsRetired: { type: 'checkbox' } }],
        filterCols: [{ Product: { type: 'text' }, Price: { type: 'dualRange', min: 1, max: 1000 }, InStock: { type: 'checkbox' } }],

        footer: "<div class'myfooter'></div>",
        // eslint-disable-next-line no-template-curly-in-string
        dateCols: [{ DateScanned: 'en-GB' }],
        dateOptions: { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' },
        iconCols: [{ email: '<i class="envelope icon"></i>Email' },
        { Avatar: '<i class="id badge icon"></i>Avatar' }],
        // eslint-disable-next-line no-template-curly-in-string
        customCols: [{ Avatar: '<div style="min-height:3em"><img  style="width:60px; height:60px"  decoding="async" src=${Avatar}></img></div' }] //adding min height reduces loading flash as image cells are not resized vertically
    }

    const [json, setJson] = React.useState(currentDataSet)


    const [userMessage, setUserMessage] = React.useState('')


    const [msgClassName, setMsgClassName] = React.useState('msgDiv')

    const handleRowClick = (row, oldRowData, action, dispatch) => {
        mydispatch = dispatch

        if (action === 'SELECT') {
            console.log(action, row)
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
            console.log(action, row, oldRowData)
            // put or post data to DB or confirm changes, with the user
            dispatch({ type: ACTIONS.CONFIRMUPDATE })
            // save to DB
            // incase of failure call rejectchanges
        }

        if (action === "CREATE") {
            // informational
            // user has clicked create
            console.log(action)
            // no confirm is needed as it's a temp UI change
            // action will be triggered next is insert unless users decides to cancel

        }
        if (action === "DELETE") {
            console.log(action)
            // delete from DB, once confirmed delete from table JSON
            // no need to refresh your data
            dispatch({ type: ACTIONS.CONFIRMDELETE })
        }
        if (action === "INSERT") {
            console.log(action, row)
            // insert DB, once confirmed  from DB confirm
            // incase of failure call rejectchanges
            // no need to refresh your data
            dispatch({ type: ACTIONS.CONFIRMINSERT, payload: { id: 29 } })
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
        if (btnName === "switchData") {
            console.log("Toggle Data")
            if (currentDataSet === 'cars') {
                currentDataSet = 'employees'
                setJson(employees)
            } else {
                currentDataSet = 'cars'
                setJson(cars)
            }
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
                        <button className="switchBtn" name="switchData" onClick={btnClickHandler}>switch data</button>
                        <Table json={json} rowClick={handleRowClick} options={options} />
                    </div>
                </div>
            </div>
        </div>
    )
}