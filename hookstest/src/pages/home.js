import React, { useState, useEffect } from "react";
import SuperTable from '../components/supertable/supertable'
import Simple from "./examples/simple";
import './home.css'
import Banner  from "../components/banner";
import cars from '../data.json';
import Table from "../components/supertable/Table";

const Home = props => {
 const data=[
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
    editable: true, //
    hiddenCols: ['id'], //Hide any column
    filters: true,
    searchInputCss: 'searchInputCss',
    pageable: true, // Only Required- If you want paging
    pageSize: 10,// Optional Defaults to 10
    footer: true, //add table footer
    /*eslint no-template-curly-in-string: "off"*/
    styles: "table-fixed w-full",
    cellStyles: "border px-8 py-4 ",
    theadStyles: "bg-blue-100 border  px-8 py-4",

    // NB SelectedRow backgroundColor can be set from SuperTable styles default ALice-Blue
  }

  const carOptions = {
    // Not Required- If the first col is an identity column
    editable: true, //
    pageable: true, // Only Required- If you want paging
    pageSize: 21,// Optional Defaults to 10
    hiddenCols: ['id'], //Hide any column
    dateCols: [{ PurchaseDate: 'en-GB' }], //specify locale info
    dateOptions: { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }, //optional
    //or specify locale  'en-GB'
    customCols: [{ 'BitCoin Address': '<i aria-hidden="true" class=" circle  info  icon"></i> content=${BitCoin Address}/>' }],
    styles: "table",
    // NB SelectedRow backgroundColor can be set from SuperTable styles default ALice-Blue
  }
  let [json, updateJson] = useState([])

  const rowClick = (id, row) => {
    // id as string row as selectedRow object
  }

  useEffect(() => {
    async function fetchAPI() {
      
        const url = 'https://jsonplaceholder.typicode.com/posts'
        const response = await fetch(url)
        const json = await response.json()
        updateJson(json)
     
    
    }
    fetchAPI()
  }, [])

  if (!json) {
    return <div className="lds-facebook"><div></div><div></div><div></div></div>
  }
  return (
    <div className="w-full h-full">
       <SuperTable json={json} rowClick={rowClick} options={options} />
      <Table json={data} />
      {/* <SuperTable json={json} rowClick={rowClick} options={options} />
      <SuperTable json={cars} options={carOptions} /> */}
    </div>
  )
}

export default Home;

