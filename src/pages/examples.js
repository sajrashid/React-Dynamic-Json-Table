import React from "react";
import {Table} from 'react-dynamic-json-tableyarn'
import cars from '../data.json';

const Examples = props => {
  const data1 = [
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
  const data2 = [
    {  'Name': 'React', 'Desc': 'Some Data', 'Testing': false, },
    {  'Name': 'Ember', 'Desc': 'Some other', 'Testing': true, },
    {  'Name': 'Knockout', 'Desc': 'Some Data', 'Testing': false, },
    {  'Name': 'AngularJS', 'Desc': 'Some Data', 'Testing': false, },
    {  'Name': 'Angular', 'Desc': 'Some Data', 'Testing': false, },
    {  'Name': 'Mithril', 'Desc': 'Some Data', 'Testing': false, },
    {  'Name': 'BackBone', 'Desc': 'Some Data', 'Testing': true, },
    {  'Name': 'BackBone', 'Desc': 'Some Data', 'Testing': true, }
  ]
  const data3 = [
    {  'Product': 'Python','Desc': 'Some Data',   'Status':'green', 'Img': 'https://i.imgur.com/MsXTPi5.png', 'Cost': '39$', 'Prod':false },
    {  'Product': 'Jenkins','Desc':'Old Data',  'Status':'red','Img': 'https://i.imgur.com/lHtB6Vo.png', 'Cost': '550$', 'Prod':true  },
    {  'Product': 'React','Desc': 'New Data',  'Status':'orange','Img': 'https://i.imgur.com/3v3eCwd.png',  'Cost': '21$', 'Prod':true  },
    {  'Product': 'Other','Desc': 'Some other Data',  'Status':'orange','Img': 'https://i.imgur.com/3v3eCwd.png',  'Cost': '21$', 'Prod':false  },
  ]
  const options1 = {
    styles: "ui red striped table",
    pageable: true,
   // NB SelectedRow backgroundColor can be set from SuperTable  style sheet default ALice-Blue
 }
  const options2 = {
       styles: "ui blue  padded celled fixed table",
       sortable:false //Table sorts by default set it to false to turn off sorting
    // NB SelectedRow backgroundColor can be set from SuperTable  style sheet default ALice-Blue
  }
  const options3= {
    hiddenCols: ['ID'], //Hide any column
    pageable: false,
      /*eslint no-template-curly-in-string: "off"*/
    customCols: [{ 'Desc': "<div style='background-color:limegreen;'>${Desc}</div>" }],
    styles: "ui green  table",
    selectable:false // turns of row selection
    // NB SelectedRow backgroundColor can be set from SuperTable style sheet default ALice-Blue
  }
  const options = {
    styles: "ui blue  striped fixed table",
    pageable: true,
    pageSize: 10,
    cellColor: ['Status'], // cells background color will be set from item data
    checkBox: true, // default is to show boolean values as checkbox
    hiddenCols: ['BitCoin Address'],
    /*eslint no-template-curly-in-string: "off"*/
    labelCols: [{ sold: 'Sold' }],
    customCols: [
                  { 'Img': "<div style='min-height:6em;display:inline-block;'> <img src=${Img}></img><div>" },
                  { 'Cost': "<div style='background-color:yellow;'>${Cost}</div>" },
                  {'Prod':'<div class="ui input"> <input type="text" class="hidden"  value=${Prod}/></div>'}
                ]
  }
  const mapOptions = () => {
    return (
      Object.keys(options).map((key, index) => {
        if (Array.isArray(options[key])) {
          let arr = Object.entries(options[key]);
          return arr.map((key2, i2) => {
            return <div key={index+i2}> <div key={i2}> {key2 + " :"} {typeof arr} {typeof [key2]}
            </div></div>
          })
        }
        return <div key={index}> {key + " :"} {typeof options[key]} </div>
      })
    )
  }

  return (
    <div>
      <div>
        <Table json={data1} />
      </div>
      <div>
       <Table json={data1} options={options1} />
      </div>
      <div>
        {/* this table will cause duplicate row selections as it
        has duplicate data in the first colum, specify and id 
        if the data in the first col contains duplicates */}
        <Table json={data2} options={options2} />
      </div>
      <div>
        <Table json={data1} options={options3} />
        <Table json={data3} options={options2}  />
        {mapOptions()}
      </div>
      <Table json={cars} options={options} />
    </div>
  )
}
export default Examples;
