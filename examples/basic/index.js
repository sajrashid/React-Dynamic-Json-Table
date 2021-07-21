import React from "react";
import ReactDOM from "react-dom";
import Table from "react-dj-table";
import bots from "./data.json";
import "semantic-ui-css/semantic.min.css";
import "./pager.css";
import "./editor.css";
import "./footer.css";
import "./search.css";
import "./index.css";
import { ACTIONS } from "./actions";
// get icons here https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/icon.min.css
let mydispatch = null;
function App() {
  const options = {
    hiddenCols: ["last_name"],
    searchInputCss: "searchInputCss",
    sortable: true,
    pageable: true,
    searchable: true,
    editable: true,
    dateCols: [{ RetiredDate: "en-GB" }],
    readOnly: ["Avatar"],
    dateOptions: {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric"
    },
    pagerCss: "pager",
    pageSize: 5,
    selectedRowCss: "select",
    tableCss: "ui fixed red table",
    customCols: [
      {
        Avatar:
          '<div> <img style="height:3em" decoding="async" src=${Avatar}></img></div'
      }
    ],
    iconCols: [{ email: '<i class="envelope icon"/><i>Email' }],
    labelCols: [
      { FirstName: "Name" },
      { gender: "Gender" },
      { IsRetired: "Retired" }
    ]
  };

  const [userMessage, setUserMessage] = React.useState("");

  const [msgClassName, setMsgClassName] = React.useState("msgDiv");

  const handleActions = (row, oldRowData, action, dispatch) => {
    mydispatch = dispatch;

    if (action === "SELECT") {
      console.log(action, row);
      // informational
      // returns row
    }
    if (action === "VALIDATE") {
      console.log("VALIDATE");
      // user has not clicked the update or insert button
      // & they have attempted to move to a different row
      // warn user they will loose the changes if they dont save changes
      // once user selects update or insert an action will be triggered accordingly
      // scroll down the the btnClickHandler
      setUserMessage(
        "Warning: you have not saved your changes, click OK to go back, then click update to save your changes! Click Undo to undo your changes."
      );
      setMsgClassName("msgDiv warning msgDivShow");
    }
    if (action === "UPDATE") {
      console.log(action, row, oldRowData);
      // put or post data to DB or confirm changes, with the user
      dispatch({ type: ACTIONS.CONFIRMUPDATE });
      // save to DB
      // incase of failure call rejectchanges
    }

    if (action === "CREATE") {
      // informational
      // user has clicked create
      console.log(action);
      // no confirm is needed as it's a temp UI change
      // action will be triggered next is insert unless users decides to cancel
    }
    if (action === "DELETE") {
      console.log(action);
      // delete from DB, once confirmed delete from table JSON
      // no need to refresh your data
      dispatch({ type: ACTIONS.CONFIRMDELETE });
    }
    if (action === "INSERT") {
      console.log(action, row);
      // insert DB, once confirmed  from DB confirm
      // incase of failure call rejectchanges
      // no need to refresh your data
      dispatch({ type: ACTIONS.CONFIRMINSERT });
    }
  };

  const btnClickHandler = (e) => {
    // here the user can choose to reject the changes
    // or go back and save, there a lots of ways to do this
    // you could set messages in the footer for example!
    const btnName = e.currentTarget.name;
    if (btnName === "ok") {
      //  dispath nothing
      setMsgClassName("msgDiv");
    }
    if (btnName === "undo") {
      console.log(ACTIONS.REJECTCHANGES);

      setMsgClassName("msgDiv");
      mydispatch({ type: ACTIONS.REJECTCHANGES });
    }
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
      <div className={msgClassName}>
        <span>{userMessage} </span>
        <div className="msgBtnDiv">
          <button name="ok" onClick={btnClickHandler}>
            OK
          </button>
          <button name="undo" onClick={btnClickHandler}>
            Undo
          </button>
        </div>
      </div>
      <Table json={bots} options={options} rowClick={handleActions} />
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
