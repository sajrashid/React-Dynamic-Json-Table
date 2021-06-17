export  const counterReducer = (state,action) => {
const ACTIONS={
INCREMENT:'increment',
DECREMENT:'decrement'
 }

    switch (action.type) {
        case ACTIONS.INCREMENT:
         return {countc: state.countc +1}  
         case ACTIONS.DECREMENT:
         return {countc: state.countc -1}  
          
        default:
         return state
    }
}