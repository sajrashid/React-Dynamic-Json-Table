export  const counterReducer = (state,action) => {
const ACTIONS={
INCREMENT:'increment',
DECREMENT:'decrement'
 }

    switch (action.type) {
        case ACTIONS.INCREMENT:
         return {count: state.count +1}  
         case ACTIONS.DECREMENT:
         return {count: state.count -1}  
          
        default:
         return state
    }
}