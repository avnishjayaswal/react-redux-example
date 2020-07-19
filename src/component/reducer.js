  
  const initialState = {
    count:1
  } ;
  
  
  const reducer = (state = initialState, action) => {
         
    const newState = {...state} ;
  
    if(action.type === "count_UP") {
      newState.count += 1  ;
    }
  
    if(action.type === "count_Down") {
       newState.count -= 1 ;
    }
  
    return newState ;
  
  }

export default reducer ;