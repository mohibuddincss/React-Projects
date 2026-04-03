import React from "react";

const Card = ({name , date , src , temperature , weatherText , country})=>{

    return(
       
 <div className="card">
  <h2 className="city">{name}</h2>
  <p className="date">{date} , {country}</p>

  <div className="weather-box">
    <h1 className="temp">{temperature}°C</h1>
    <img src={src} alt="weather" className="icon" />
  </div>

  <p className="condition">{weatherText}</p>
</div> 
    )
}

export default Card
