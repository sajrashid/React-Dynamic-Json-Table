import './home.css'

import React from "react";

import Table from 'react-dj-table'
import products from '../Products.json'
const Home = props => {


  const tableOptions = {
    tableCss: "table",
    sortable: true,
    pageable: true,
    pageSize: 5,
    pagerCss: "pager",
    hiddenCols: ["id", "ProductCode"],
    searchable: true,
    searchInputCss: "searchInputCss",
    dateCols: [{ DateScanned: "en-GB" }],
    dateOptions: {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric"
    }
  };
  const rowClick = (row) => {
    console.log(row)
    // id as string row as selectedRow object
  }



  return (
    <div className="justify-center w-full h-full p-4 m-4">
      <Table options={tableOptions} json={products} />
    </div>

  )
}

export default Home;

