import loggedReducer from "./isLogged";
import counterReducer from "./counter";
import themeReducer from "./theme";
import { combineReducers } from "redux";



const allReducers = combineReducers({
    counter : counterReducer,
    isLogged : loggedReducer,
    themeReducer: themeReducer
});

export default allReducers;

