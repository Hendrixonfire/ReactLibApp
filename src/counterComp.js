import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { increment } from "./actions";
import { decrement } from "./actions";
import { useDispatch } from "react-redux";

function MyCounter(){
    const counter  = useSelector(state =>{
        return state.counter
    })
    const isLogged = useSelector(state => 
        state.isLogged);
    const dispatch = useDispatch();
    const numIncr = 2;
    const numDecr = 3;
    return (
        <div>
            <h1>Number of books to show: {counter}</h1>
            <div className="buttonDiv">
            <button className="button" onClick={() =>dispatch(increment(numIncr))}>Increment (by {numIncr})</button>
            <button className="button" onClick={() =>dispatch(decrement(numDecr))}>Decrement (by {numDecr})</button>  
            </div>
         
            { isLogged ? <h2>This text only visible if logged in!</h2> : ''}
          
        </div>
    )
}
export default MyCounter;