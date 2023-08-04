import React from "react";

const Card = (props) =>{
    return(
        <div className="card grow">
            <img src={`https://robohash.org/${props.id}set=set4?size=150x150`}
            alt="alien"
            className="cardImg"></img>
            <div className="details">
                <h3 className="name">{props.name}</h3>
                <p className="email">{props.email}</p>
            </div>
        </div>
    );
}
export default Card;