const counterReducer = (state = 0, action) =>{
    switch(action.type){
        case 'INCREMENT':
           return  state + action.payload;
        case 'DECREMENT':
            {
                
                    if (state > 0){
                        if((state - action.payload) >= 0 ){
                            return state - action.payload;   
                        }else {
                            return state = 0;
                        }
                    
                    } else{
                        return state = 0;
                    } 
                
              
            }
          
        default:
            return state;
    }

}

export default counterReducer;