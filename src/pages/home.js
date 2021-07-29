import './home.css'

import React, { useState } from "react";

import Table from 'react-dj-table'

const Home = props => {
  const data = [
    { 'ID': 1, 'Name': 'React', 'Desc': 'Shadow Dom', 'Testing': false, },
    { 'ID': 2, 'Name': 'Ember', 'Desc': 'Shadow Dom ???', 'Testing': true, },
    { 'ID': 3, 'Name': 'Knockout', 'Desc': '2 way databinding', 'Testing': false, },
    { 'ID': 4, 'Name': 'AngularJS', 'Desc': 'mvc ???', 'Testing': false, },
    { 'ID': 5, 'Name': 'Angular', 'Desc': '????', 'Testing': false, },
    { 'ID': 6, 'Name': 'Mithril', 'Desc': 'Shadow Dom', 'Testing': false, },
    { 'ID': 7, 'Name': 'BackBone', 'Desc': 'Lorun ipsum', 'Testing': true, },
    { 'ID': 8, 'Name': 'Angular', 'Desc': '????', 'Testing': false, },
    { 'ID': 9, 'Name': 'Mithril', 'Desc': 'Shadow Dom', 'Testing': false, },
    { 'ID': 10, 'Name': 'BackBone', 'Desc': 'Lorun ipsum', 'Testing': true, },
    { 'ID': 11, 'Name': 'Mithril', 'Desc': 'Shadow Dom', 'Testing': false, },
    { 'ID': 12, 'Name': 'BackBone', 'Desc': 'Lorun ipsum', 'Testing': true, }
  ]

  // Table options not required for defaults
  const options = {
    idCol: 'id', // Not Required- If the first col is an identity column
    tableCss: 'table-fixed w-fulll',
    hiddenCols: ['id'], //Hide any column
    filters: true,
    searchInputCss: 'searchInputCss',
    pageable: false, // Only Required- If you want paging
    pageSize: 10,// Optional Defaults to 10
    footer: true, //add table footer
    /*eslint no-template-curly-in-string: "off"*/
    styles: "table-fixed w-full",
    cellStyles: "border px-8 py-4 ",
    theadStyles: "bg-blue-100 border  px-8 py-4",
    // NB SelectedRow backgroundColor can be set from SuperTable styles default ALice-Blue
  }


  let [json] = useState([])

  const rowClick = (row) => {
    console.log(row)
    // id as string row as selectedRow object
  }


  if (!json) {
    return <div className="lds-facebook"><div></div><div></div><div></div></div>
  }
  return (
    <div className="flex justify-center w-full h-full mt-4">
      <Table options={options} json={data} rowClick={rowClick} />
    </div>

  )
}

export default Home;

