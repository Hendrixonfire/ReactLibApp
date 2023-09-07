import { SET_DARK_THEME } from "../actions";
import { GOT_THEME } from "../actions";

const initialThemeState = {
    theme:'SET_DARK_THEME'
    
}

const themeReducer = (state = initialThemeState, action) =>{
    switch(action.type){
        case "SET_DARK_THEME":
            return {...state, theme:action.payload};
        case "GOT_THEME":
            return {...state, theme:action.payload};
        default:
            return state;
    }
}
export default themeReducer;