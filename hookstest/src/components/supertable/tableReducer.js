import { ACTIONS } from './actions'
import { useCustomContext } from "../supertable/customContext";

export const TableReducer = (state, action) => {
    console.log(state)
    const json = state.json
    const data = useCustomContext()
    const options = data.options || {}
    switch (action.type) {
        case ACTIONS.SELECTROW:
            const columns=Object.keys(json[0])
            const idColIdx = options.idCol ? columns.indexOf(options.idCol) : 0
            let currentTargetId = action.payload.id
            let objRow = {}
            json.map((row) => {
                let idx = row[columns(row)[idColIdx]]
                if (currentTargetId === idx.toString()) {
                    return objRow = row
                }
                return false
            })
            state.selectedRow=currentTargetId
            return { selectedRow: {objRow}}
           
        case ACTIONS.SORT:
            console.log(action.payload.id)
            let colName=action.payload.id
            json.sort((a, b) => (a[colName]) - (b[colName]));
            return { json:state.json }

        default:
            return state
    
}
}