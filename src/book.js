import React from "react";

function Book(props){
    return(
        <div className="book" >
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