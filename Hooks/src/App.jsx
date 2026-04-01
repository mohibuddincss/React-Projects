import React from "react";
import Card from "./components/Card";
import Btn from "./components/Btn";
import './App.css'

const App = () => {

  return (
    <>
      <h1>Hello World</h1>

      {/* <div className="btn-container">
        <Btn title="Submit" />
        <Btn title="Submit" />
        <Btn title="Submit" />
        <Btn title="Submit" />
      </div> */}

      <div className="card-container">
        <Card
          img="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-max-01.jpg"
          price = "1.5lac"
          btnTitle="♡"
           location = "Quetta , Balochistan || Abdul Satar Road || 786 Market || Shop # 5"
          desc="I Phone 13 pro Max"
          timming = "1 day ago"
        />
        <Card
          img="https://fdn2.gsmarena.com/vv/bigpic/infinix-gt20-pro.jpg"
          price = "75K"
          btnTitle="♡"
          location= "Bharia Town Karachi || phase-2"

          desc="Infinix GT20 pro"
          timming = "5 days ago" 
        />
        <Card
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTByyLi7qCkcpcNFPVTVvkC-UHLIeM5ety56A&s"
          price="1.2lac"
          btnTitle="♡"
          location = "Quetta , Balochistan || Liaqat Bazar || Abdual Satar Market || Shop # 15"
          desc="Infinix Note 50 pro plus 5G"
          timming = "3 days ago"
        />
        <Card
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTByyLi7qCkcpcNFPVTVvkC-UHLIeM5ety56A&s"
          price="1.2lac"
          btnTitle="♡"
          location = "Quetta , Balochistan || Liaqat Bazar || Abdual Satar Market || Shop # 15"
          desc="Infinix Note 50 pro plus 5G"
          timming = "3 days ago"
        />
      </div>
    </>
  )
}
export default App