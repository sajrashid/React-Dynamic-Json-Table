import { ACTIONS } from '../reducers/actions';
import React from "react";

function Crud({ state, dispatch,rowClick }) {

    const HandleButtonClick= e =>{
            const buttonName = e.currentTarget.name.toString().toUpperCase()
            switch (buttonName) {
              case "UPDATE":
              dispatch({ type: ACTIONS.UPDATE })
              rowClick(state.selectedRow,state.selectedRowCopy,buttonName, dispatch )
              break;
              case "CANCEL":
              dispatch({ type: ACTIONS.CANCEL })
              rowClick(state.selectedRow,state.selectedRowCopy,buttonName, dispatch )
              break;
              case "CREATE":
              dispatch({ type: ACTIONS.CREATE })
              rowClick(state.selectedRow,state.selectedRowCopy,buttonName, dispatch )
              break;
              case "DELETE":
              dispatch({ type: ACTIONS.DELETE})
              rowClick(state.selectedRow,state.selectedRowCopy,buttonName, dispatch )
             break;
             case "INSERT":
                dispatch({ type: ACTIONS.INSERT})
                rowClick(state.selectedRow,null,buttonName, dispatch )
             break;
              default:
             break;
          }
    }
    const createCrud = () => {
        return <div className="crudDiv">
                    <button   name='cancel'  disabled={state.crudBtns.btnCancel} onClick={HandleButtonClick}>cancel</button>
                    <button  name='update' disabled={ state.crudBtns.btnUpdate }  onClick={HandleButtonClick}>update</button>
                {state.editing&&
                    <button name="create"  disabled={ state.crudBtns.btnCreate  } onClick={HandleButtonClick}>create</button>
                }
                {state.inserting&&
                    <button name="insert"  disabled={state.crudBtns.btnInsert } onClick={HandleButtonClick}>insert</button>
                }
                    <button name='delete' disabled={ state.crudBtns.btnDelete} onClick={HandleButtonClick}>delete</button>
             </div>
    }

    return (
        createCrud()
    )

}

export default Crud
