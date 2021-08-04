import { ACTIONS } from "./actions";
import { filterFunc } from "../utils/utils";

export const InputReducer = (istate, action) => {
    switch (action.type) {
        case ACTIONS.UPDATEA:
            console.log(istate)
            istate.currentMinVal = parseInt(action.payload.value);

            if (istate.currentMinVal > istate.currentMaxVal) {
                istate.currentMaxVal = parseInt(action.payload.value);
            }

            istate.json = filterFunc(
                istate.jsonCopy,
                istate.currentMinVal,
                istate.currentMaxVal,
                "Price"
            );

            return { ...istate };

        case ACTIONS.UPDATEB:
            istate.currentMaxVal = parseInt(action.payload.value);

            if (istate.currentMinVal > istate.currentMaxVal) {
                istate.currentMinVal = parseInt(action.payload.value);
            }
            istate.json = filterFunc(
                istate.jsonCopy,
                istate.currentMinVal,
                istate.currentMaxVal,
                "Price"
            );
            return { ...istate };

        default:
            return istate;
    }
};
