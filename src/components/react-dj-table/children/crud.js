import { ACTIONS } from '../reducers/actions';
import React from "react";
import { createMarkup } from '../utils/utils'

function Crud({ state, dispatch }) {

    function handlePagingClick(e) {
        let buttonName = e.currentTarget.name.toString().toUpperCase()
        dispatch({ type: ACTIONS[buttonName] })
    }

    const createCrud = () => {
        console.log(state.editing)

        return <div className="crudDiv"> 
                    <button  name='update' disabled={ !state.editing}  onClick={handlePagingClick}>Update</button>
                    <button  name='cancel' disabled={ !state.editing }  onClick={handlePagingClick}>Cancel</button>
                    <button name='create' disabled={ state.editing } onClick={handlePagingClick}>Create</button>
                    <button name='delete' disabled={ !state.editing  || state.creating   } onClick={handlePagingClick}>Delete</button>
                </div>
    }

    return (
        createCrud()
    )

}

export default Crud