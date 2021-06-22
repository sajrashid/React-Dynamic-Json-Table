import './simple.css'

import Banner from '../components/banner'
import React from "react";
import SyntaxHighlighter from 'react-syntax-highlighter'
import Table from '../components/supertable/Table'
import cars from '../data.json'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import employees from '../Employees.json'

const Simple = props => {
    const data = [{ 'num': 0, 'Name': 'abc', 'IsReady': true }, { 'num': 1, 'Name': 'XYZ', 'IsReady': false }, { 'num': 3, 'Name': 'Cat', 'IsReady': true }]
    const options = {
        tableCss: 'table-fixed cursor-pointer w-full',
        searchInputCss:'searchInputCss',
        cellStyles: 'break-words  border p-4 ',
        pageable:true,
        theadStyles: 'bg-blue-500 text-gray-200 px-8 py-4',
        filters:true,
        selectable:true,
        iconCols:[{'email':'<i class="envelope icon"></i>Email'},
                  {'Avatar':'<i class="id badge icon"></i>Avatar'}],
        // eslint-disable-next-line no-template-curly-in-string
        customCols:[{'Avatar': '<div style="min-height:6em"><img src=${Avatar}></img></div' }] //adding min height reduces loading flash as image cells are not resized vertically
    }

    const codeSimple = "const data=[\n {'num':0,'Name':'abc','IsReady':true},\n {'num':1,'Name':'XYZ','IsReady':false},\n {'num':3,'Name':'Cat','IsReady':true}\n ]\n \n <SuperTable json={data} /> "
    const codeSimpleOptions = "const options = {\n styles: 'table-fixed w-full',\n cellStyles: 'border px-8 py-4 ', \n theadStyles: 'bg-blue-100 border  px-8 py-4' \n } \n \n <SuperTable json={data} options={options} /> "

    return (
        <div className="w-full h-full mb-4 text-left ">
            <Banner/>

            <div className="fixed w-1/6 p-4 right-2">
                <ul className="" >
                    <li className='p-2 bg-gray-800'><a className="text-white underline " href="#simple">Simple</a></li>
                    <li className='p-2 bg-gray-600'><a className="text-white underline " href="#addcss">Add CSS</a></li>
                    <li className='p-2 bg-gray-800'><a className="text-white underline " href="#hide">Hide Colums</a></li>
                    <li className='p-2 bg-gray-600'><a className="text-white underline " href="#hide">Without Id</a></li>

                </ul>
            </div>
            <div id="simple" className="w-full h-full p-2">
               <div className="w-full p-4 mb-2 bg-green-50">
                <h2 className="w-full p-4 mb-2 text-xl bg-green-200 "> Simple example</h2>
                <SyntaxHighlighter language="javascript" style={docco}>
                    {codeSimple}
                </SyntaxHighlighter>
                <div className="w-full mt-2 mb-2 bg-green-100 ">
                    <h3 className="p-4 bg-yellow-50 "> Result</h3>
                    <div className="w-full p-4 mb-2 bg-white" >
                
                    <Table json={data} />
                   </div>
                </div>
                
                </div>
             
                <div className="w-full p-4">
                    <h2 className="w-full p-4 mb-2 text-xl bg-green-200">Add CSS</h2>
                    <div id="addcss" className="w-full bg-green-100">
                        <SyntaxHighlighter language="javascript" style={docco}>
                            {codeSimpleOptions}
                        </SyntaxHighlighter>
                        <div className="w-full p-4 mt-2 mb-2 bg-yellow-100 ">
                            <h3 className=""> Result</h3>

                        </div>
                        <div className="w-full p-4 mb-4 bg-white" >
                            <Table json={cars} options={options} />
                        </div>
                    </div>
                </div>
                <h2 className="w-full p-4 mt-4 mb-2 text-xl bg-green-200">Hide Colums, remove checkboxes</h2>
                <div id="hide" className="w-full text-left bg-green-100">
                    <SyntaxHighlighter language="javascript" style={docco}>
                        {codeSimpleOptions}
                    </SyntaxHighlighter>
                    <div className="w-full p-4 mt-2 mb-2 bg-yellow-100 ">
                        <h3 className=""> Result</h3>

                    </div>
                    <div className="w-full p-4 mb-4 bg-white" >
                        <Table json={employees} options={options} />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Simple;

