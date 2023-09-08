import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";


function Book(props){
    const {theme} = useSelector((state)=>state.themeReducer)
    return(
        <div className="book" style={{color:theme==="GOT_THEME" ? "white" : "wheat" , background:theme==="GOT_THEME" ? "rgba(0, 0, 0, 0.3)" : "none"}}>
         
            <div className="imageContainer">
          
            <img className="bookImage" src={props.image} />
          
            </div>
            <div className="bookInfoContainer">
            <h3>{props.name}</h3>
                <p>Author: {props.author}</p>
                <p>Number of pages: {props.pages}</p>
            </div>
        
        </div>
    )
}
export default Book;