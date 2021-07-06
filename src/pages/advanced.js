import React from "react"
import SyntaxHighlighter from 'react-syntax-highlighter'
import Table from '../components/react-dj-table/index'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import employees from '../Employees.json'

// import Table from 'react-dj-table'




















export default function Advanced() {
    const codeSimple = "const data=[\n {'num':0,'Name':'abc','IsReady':true},\n {'num':1,'Name':'XYZ','IsReady':false},\n {'num':3,'Name':'Cat','IsReady':true}\n ]\n \n <SuperTable json={data} /> "
    const codeSimpleOptions = "const options = {\n styles: 'table-fixed w-full',\n cellStyles: 'border px-8 py-4 ', \n theadStyles: 'bg-blue-100 border  px-8 py-4' \n } \n \n <SuperTable json={data} options={options} /> "
    const options = {
        tableCss: 'table-fixed cursor-pointer w-full',
        searchInputCss: 'searchInputCss',
        cellCss: 'break-words  border p-4 ',
        pagerCss: 'pager',
        pageable: true,
        theadCss: 'bg-blue-500 text-gray-200 px-8 py-4',
        sortable: true,
        searchable: true,
        filterCols: [{email:'123'}],
        selectedRowCss: "selectedRow",
        labelCols: [{ gender: 'Gender' }],
        // eslint-disable-next-line no-template-curly-in-string
        dateCols: [{ RetiredDate: 'en-GB' }],
        dateOptions: { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' },
        iconCols: [{ email: '<i class="envelope icon"></i>Email' },
        { Avatar: '<i class="id badge icon"></i>Avatar' }],
        // eslint-disable-next-line no-template-curly-in-string
        customCols: [{ Avatar: '<div style="min-height:6em"><img  decoding="async" src=${Avatar}></img></div' }] //adding min height reduces loading flash as image cells are not resized vertically
    }

    const handleRowClick = (row) => {
        console.log(row)

    }

    return (
        <div className="w-full p-4 mb-2 bg-green-50">
            <h2 className="w-full p-4 mb-2 text-xl bg-green-200 "> Simple example</h2>
            <SyntaxHighlighter language="javascript" style={docco}>
                {codeSimple}
            </SyntaxHighlighter>
            <div className="w-full mt-2 mb-2 bg-green-100 ">
                <h3 className="p-4 bg-yellow-50 "> Result</h3>
                <div className="w-full p-4 mb-2 bg-white" >
                    <div>
                        <Table json={employees} rowClick={handleRowClick} options={options} />
                    </div>
                </div>

            </div>

        </div>)
}