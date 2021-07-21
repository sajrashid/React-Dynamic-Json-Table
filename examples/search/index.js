import "semantic-ui-css/semantic.min.css";
import "./editor.css";
import "./footer.css";
import "./search.css";
import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import Table from "react-dj-table";
import bots from "./data.json";

// get icons here https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/icon.min.css
function App() {
  const options = {
    searchInputCss: "searchInputCss",
    sortable: true,
    searchable: true,
    dateCols: [{ RetiredDate: "en-GB" }],
    dateOptions: {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric"
    },
    selectedRowCss: "selectedRow",
    tableCss: "ui fixed red table",
    customCols: [
      {
        Avatar:
          '<div> <img style="height:3em" decoding="async" src=${Avatar}></img></div'
      }
    ],
   
   
  };


  const handleClick = (row) => {
  
      console.log(row);
      
  };



  return (
    <div className="App">
        <div className="title">
        <small>Semantic UI example, 1000 rows.</small>
        <small>Editable, Searchable, Pageable & Sortable.</small>
        <span className="secondspan">
          Yarn add
          <span className="firstspan">react-dj-table</span>
        </span>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://react-dj-table.netlify.app/"
            >
              <i className="book icon" />
              Docs
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/sajrashid/React-Dynamic-Json-Table"
            >
              <i className="github icon" />
              Source
            </a>
          </li>
        </ul>
      </div>
      <Table json={bots} options={options} rowClick={handleClick} />
      <div className="robohash">
        <small> Robots lovingly preovided by</small>
        <a href="https://Robohash.org/" target=" _blank" rel="noreferrer">
          robohash.org
        </a>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
