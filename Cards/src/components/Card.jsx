import React from "react";
import Btn from './Btn'

const Card = (pros) => {

    return (
        <>
           <div className="card">
            <div className="img-cont">
             <img src={pros.img} alt="Card-img" />
           </div>
            <div className="heading-container">
                <h3>{pros.price}</h3>
            <button className="card-btn">{pros.btnTitle}</button>
            </div>
            <p>{pros.location}</p>
            <p>{pros.desc}</p>
            <p>{pros.timming}</p>
           </div>
        </>
    )
}
export default Card