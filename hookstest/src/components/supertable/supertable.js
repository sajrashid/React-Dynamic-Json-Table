import React, { useState, useEffect } from "react";
import _ from 'lodash'
import './supertable.css'
import Rows from './children/rows'
import Thead from './children/thead'
import Pager from './children/pager'
import Filters from './children/filters'
const SuperTable = props => {
    const options = props.options || {}
    let [pageable, updatePageable] =  useState(options.pageable || false)
    const pageSize = options.pageSize || 10
    const [selectedRowId, updateSelectedRowId] = useState(null)
    const [sortedJson, updateSortedJson] = useState(props.json || [])
    const [pagerInput, updatePagerInput] = useState(1)
    let [sortDirection, updateSortDirection] = useState(false)
    const [pageNo, updatePageNo] = useState(1)

    const [json, updateJson] = useState(props.json || [])
    const [jsonCopy, updateJsonCopy] = useState(props.json || [])
    
    const styles = options.styles || ''
    const cssClasses = `supertable ${styles}`
    const [totalpages, updateTotalPages] = useState(null)
   
    //pagination
    const paginate = (array, page_size, page_number) => {
        return array.slice(page_number * page_size, (page_number + 1) * page_size);
    };
    const pagerIcons = { first: '&lsaquo;', previous: '&laquo;', next: '&raquo', last: '&rsaquo;' }

    //run once
    useEffect(()=>{
        if(pageable && props.json.length > 0 ){
            updateJson(paginate(props.json || [], pageSize, 0))
            updateTotalPages(Math.ceil(props.json.length / pageSize))

        }else if (props.json.length > 0){
            updateJson(props.json);
            updateTotalPages(Math.ceil(props.json.length / pageSize))
        }
    },[pageable,pageSize, props.json])

    // events
    const pagingInputChange = (e) => {
        e.preventDefault()
        const el = e.currentTarget
        let inputValue = parseInt(el.value)
        if ((inputValue < totalpages + 1) && (inputValue > 0)) {
            updatePagerInput(inputValue)
            sortedJson.length < 1 ? updateJson(paginate(props.json, pageSize, inputValue - 1)) : updateJson(paginate(sortedJson, pageSize, inputValue - 1))
            updatePageNo(inputValue)
        }

        e.target.select();
    }

    const pagingClick = (e) => {
        e.preventDefault()
        const el = e.currentTarget
        let buttonName = el.id
        let newPageNo = 1
        switch (buttonName) {
            case 'first':
                newPageNo = 1
                break;
            case 'previous':
                newPageNo = pageNo < 2 ? pageNo : pageNo - 1
                break;
            case 'next':
                newPageNo = pageNo >= totalpages ? pageNo : pageNo + 1
                break;
            case 'last':
                newPageNo = totalpages
                break;
            default:
                break;
        }
        if (sortedJson.length < 1) {
            updateJson(paginate(props.json, pageSize, newPageNo - 1))
        }
        else {
            updateJson(paginate(sortedJson, pageSize, newPageNo - 1))
        }
        updatePagerInput(newPageNo)
        updatePageNo(newPageNo)
    }

    const headerClick = (e) => {
        if (options.sortable !== false) {
            const col = e.currentTarget.id
            updateSortDirection(!sortDirection)
            let sorted = _.orderBy(props.json, col, sortDirection = sortDirection ? 'asc' : 'desc')
            updateSortedJson(sorted)
            let pagesize = pageable ? pageSize : props.json.length || 0
            updateJson(paginate(sorted, pagesize, pageNo - 1))
        }
    }

    const rowClick = (e) => {
        if (options.selectable !== false) {
            const idColIdx = options.idCol ? Object.keys(props.json[0]).indexOf(options.idCol) : 0
            const json = props.json
            let id = e.currentTarget.id
            let objRow = {}
            json.map((row) => {
                let idx = row[Object.keys(row)[idColIdx]]
                if (id.toString() === idx.toString()) {
                    return objRow = row
                }
                return false
            })

            updateSelectedRowId(id)
            if (props.rowClick) {
                props.rowClick(id, objRow)
            }
        }
    }


    const searchFilter = (searchText) => {

       var result =[]
        if (searchText.length >0) {
            for(var i=0; i<jsonCopy.length; i++) {
                for(var item in jsonCopy[i]) {
                    var str =jsonCopy[i][item].toString().toLowerCase()
                    if(str.includes(searchText.toLowerCase())) {
                        result.push(jsonCopy[i])
                          console.log(result,)
                    }
                }
              }
        }else{
            result=jsonCopy
        }
      

        updateTotalPages(Math.ceil(result.length / pageSize))
        updateJson(paginate(result, pageSize, pageNo - 1))
        
         
    }
    

    return (
        <table className={cssClasses}  >
            <thead>{options.filters&&<tr><Filters searchFilter={searchFilter} options={options}/></tr>}
                {json.length > 0 && <tr><Thead json={json} options={options} headerClick={headerClick}/></tr>}
            </thead>
            <tbody>
                {
                    json.length > 0 && <Rows json={json} options={options} selectedRowId={selectedRowId} rowClick={rowClick} />
                }
                {
                    json.length < 1 && <tr><td>Empty</td></tr>
                }
            </tbody>
            <tfoot>
                <tr>{pageable && <td style={{ minWidth: '200px' }}><div className='pagerDiv' > <Pager pagerIcons={pagerIcons} totalpages={totalpages} pagerInput={pagerInput} pageNo={pageNo} pagingClick={pagingClick} pagingInputChange={pagingInputChange}/></div></td>}</tr>
            </tfoot>
        </table>
    )
}

export default SuperTable;


