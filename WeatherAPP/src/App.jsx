import React , {useState} from "react";
import './App.css'
function App(){

  const[city , setCity] = useState("")
  const[weather , setWeather] = useState(null)
  
//   const getWeather = async () => {
//   const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f6267363df584b37a7a145328260204&units=metric`)
//   const data = await res.json();
//   setWeather(data);
// };

const getWeather = async () => {
  try {
    const res = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=b4db485d7c4c485fa6d84351232508&q=${city}&aqi=no`
    );

    const data = await res.json();

   if (data.error) {
  alert(data.error.message);
  return;
}

    setWeather(data);
  } catch (error) {
    console.log(error);
  }
};

  return(
    <div className="container">
      <h1>Weather App</h1>
      <input className="text" type="text" placeholder="Enter Your Weather" onChange={(e)=>setCity(e.target.value)}/>
      <button className="searchBtn" onClick={getWeather}>Search</button>
      {
        weather &&(
          <div className="result-container">
          <h1>{weather.location.name}</h1>
          <h1 className="temp"> {weather.current.temp_c}°C</h1>
          <p>{weather.current.condition.text}</p>
          {/* <h1>{weather.main && check}</h1> */}
        </div>
        )
      }

    </div>
    );
}
export default App