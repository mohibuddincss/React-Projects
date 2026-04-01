import React from "react";
import Btn from './Btn'
import '../App.css'

const Card = (pros) => {

    return (
       
            <div className="card">
                {/* <h1 >{pros.title}</h1> */}
                <div className="img-cont">
                    <img className="card-img" src={pros.img} alt="Card" />
                </div>
                <div className="heading-container">
                    <h3>{pros.price}</h3>
                    <button className="card-btn">{pros.btnTitle}</button>
                </div>
                <p className="card-desc"><b>{pros.desc}</b></p>
                <p>{pros.location}</p>
                <p>{pros.timming}</p>
            </div>
      
    )
}
export default Card
