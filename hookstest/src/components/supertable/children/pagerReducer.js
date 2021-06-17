export  const pagerReducer = (state=[],action) => {
    console.log(action.type)

    switch (action.type) {
        case 'first':
            state = '';
         return state  
        case  'previous':
         return state
        case  'next':
         return state 
        case    'last':
         return state       
        default:
         return state
    }
}