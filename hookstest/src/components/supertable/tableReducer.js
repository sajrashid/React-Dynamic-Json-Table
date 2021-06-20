import React, { useEffect } from 'react'
import { compareValues, toggleString } from './utils/utils'

import { ACTIONS } from './actions'
import { useCustomContext } from "../supertable/customContext";

export const TableReducer = (state, action) => {
    const json = state.json
    const data = state.data || {}
    const options = data
    switch (action.type) {
        case ACTIONS.SELECTROW:
            let selectedRow = action.payload.row
            state.selectedRow = selectedRow
            return { ...state }
        case ACTIONS.SORT:
            let colName = action.payload.id
            let sortDirection = state.sortDirection
            json.sort(compareValues(colName, sortDirection));
            state.sortDirection === 'asc' ? state.sortDirection = 'desc': state.sortDirection = 'asc'
            return { ...state }

        default:
            return state

    }
}