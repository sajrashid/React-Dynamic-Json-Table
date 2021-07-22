import React, { useReducer } from 'react'

import { TableReducer } from '../react-dj-table/reducers/tablereducer'

const Table = (props) => {

    const initialState = {
        testValue: 5 
    }

    const [state, dispatch] = useReducer(TableReducer, initialState)





}
export default Table