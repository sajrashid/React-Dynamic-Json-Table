import React, { useReducer } from 'react'

import {ACTIONS} from '../react-dj-table/reducers/tablereducer'
import { TableReducer } from '../react-dj-table/reducers/tablereducer'

const Table = (props) => {

    const initialState = {
        testValue: 5 
    }

    const [state, dispatch] = useReducer(TableReducer, initialState)

const buttonClick = () =>{
    dispatch({ type: ACTIONS.CREATESELECTEDROWCOPY, payload: { row: selectedRow } })
}

return (
<div>
    <button onClick={buttonClick}>Increment</button>
      {state.testValue} 
</div>
)

}
export default Table