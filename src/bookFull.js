import React from "react";


function BookFull(props){
    return(
        <div className="bookFull" >
            <div className="imageContainerFull">
          
            <img className="bookImageFull" src={props.image} />
          
            </div>
            <div className="bookInfoContainerFull">
            <h3>{props.name}</h3>
                <p>Author: {props.author}</p>
                <p>Number of pages: {props.pages}</p>
                <p>Publisher: {props.publisher}</p>
                <p>Series: {props.series}</p>
                <p>Language: {props.language}</p>
                <p>Cicle: {props.cicle}</p>
                <p>id: {props.id}</p>
                <p>ISBN: {props.ISBN}</p>
                <p>Mass: {props.mass}</p>
                <p>Format: {props.format}</p>
                <span>Anotation: {props.description}</span>
            </div>
          
        </div>
    )
}
export default BookFull;