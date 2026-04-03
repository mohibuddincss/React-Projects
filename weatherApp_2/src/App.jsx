
// import axios from 'axios';
import React , {useRef , useState} from "react";
import './App.css';
import Card from './Card';  

const App = () =>{

  const [data , setData] = useState([]);
  const [loading , setLoading] = useState(false);
  const inputRef = useRef(null);

  // function showWeather(event){
  //   event.preventDefault();
  //   setLoading(true);

  //   const key ='b4db485d7c4c485fa6d84351232508';

  //   axios.get(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${inputRef.current.value}&aqi=no`)
  //   .then((res)=>{
  //     setData((prev)=>[...prev , res.data]); // FIXED
  //     inputRef.current.value = '';
  //     setLoading(false);
  //   })
  //   .catch(()=>{
  //     alert('No such city');
  //     inputRef.current.value = '';
  //     setLoading(false);
  //   })
  // }
  async function showWeather(event){
  event.preventDefault();
  setLoading(true);

  const key = 'b4db485d7c4c485fa6d84351232508';

  try {
    const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${inputRef.current.value}&aqi=no`);
    
    const data = await res.json(); // convert to JSON

    setData((prev)=>[...prev , data]); // store data

    inputRef.current.value = '';
    setLoading(false);

  } catch (error) {
    alert('No such city');
    inputRef.current.value = '';
    setLoading(false);
  }
}

  return (
    <div className="app">
  <h1 className="title">Weather App</h1>

  <form onSubmit={showWeather} className="form">
    <input 
      type="text" 
      ref={inputRef} 
      placeholder="City Name"
      className="input"
    />
    <button type="submit" className="btn">
      {loading ? "Loading..." : "Show Weather"}
    </button>
  </form>

  <div className="cards">
    {data.length > 0 ? data.map((item) => (
      <Card 
        key={item.location.name + item.location.localtime}
        name={item.location.name}
        temperature={item.current.temp_c}
        src={"https:" + item.current.condition.icon}
        date={item.location.localtime}
        weatherText={item.current.condition.text}
        country={item.location.country}
      />
    )) : <h2 className="search-text">Search</h2>}
  </div>
</div>
  )
}

export default App;














// import axios from 'axios';
// import React , {useRef , useState} from "react";
// import './App.css';
// import Card from './Card';  


// const App = () =>{

//   // State for data
//   const [data , setData] = useState([]);
//   const[loading , setLoading] = useState(false);

//   // Use ref for getting form value
//   const inputRef = useRef(null);

//   // Show weather function
//   function showWeather(event){
//     event.preventDefault();
//     setLoading(true)
//     const key = 'b4db485d7c4c485fa6d84351232508'
//     axios.get(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${inputRef.current.value}&aqi=no`)
//     .then((res)=>{
//       // setData((prev)=>[res.data , prev]);
//       setData((prev)=>[...prev , res.data]);
//       inputRef.current.value = '';
//       setLoading(false)
//     })
//     .catch((err)=>{
//       alert('no such city');
//       inputRef.current.value = '';
//       setLoading(false)
//     })
//   }
//   return (
//     <div>
//       <h1>Weather App</h1>
//       <form onSubmit={showWeather}>
//       <div>
//         <input type="text" ref={inputRef}/>
//       </div>
//       <div>
//         <button type='submit' > {loading ? 'loading...' : 'show Weather'}</button>
//       </div>
//       </form>

//     {data.length>0 ? data.map((item)=>{
//       return <Card key={item.location.name} name={item.location.name + item.location.localtime} temperature={item.current.temp_c} src={item.current.condition.icon} date={item.location.localtime} weatherText={item.current.condition.text} country={item.location.country}/>

//     }): <h1>Search</h1> }
//     </div>
//   )
// }
// export default App
