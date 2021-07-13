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

    const handleRowClick = (row) => {
        console.log(row)
    }

    return (
        <div className="w-full p-4 mb-2 bg-green-50">
            <div className="w-full mt-2 mb-2 bg-green-100 ">
                <div className="w-full p-4 mb-2 bg-white" >
                    <div className="w-full p-4 mb-4">
                        <Table json={employees} rowClick={handleRowClick} options={options} />
                    </div>
                </div>
            </div>
        </div>)
}