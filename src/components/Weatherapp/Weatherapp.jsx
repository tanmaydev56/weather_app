
import "./Weatherapp.css"
import  search_icon from '../assests/search.png';
import clear_icon from '../assests/clear.png';
import clouds_icon from '../assests/clouds.png';
import drizzle_icon from '../assests/drizzle.png';
import humidity_icon from '../assests/humidity.png';

import rain_icon from '../assests/rain.png';
import snow_icon from '../assests/snow.png';
import wind_icon from '../assests/wind.png';
import { useState } from "react";


const Weatherapp =()=>{
    let apikey = "80a493fb1ca330d86a1b7313d5e01e73";
    const [wicon,seticon]= useState(clouds_icon);

    const search  = async ()=>{

const element = document.getElementsByClassName("cityinput");
if(element[0].value==""){
    return 0;
}
let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${apikey}`;
    let response =await  fetch(url);
    let data =  await response.json(); //passing the data to json file //await means it will wait untill the data passed is converted into json
    const humidity = document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("wind-speed");
    const weatherl = document.getElementsByClassName("weather-location");
    const weathertemp =document.getElementsByClassName("weather-temp");

    humidity[0].innerHTML = data.main.humidity + " %";
    wind[0].innerHTML = Math.round(data.wind.speed) + " Km/hr";
    weathertemp[0].innerHTML =Math.round( data.main.temp )+"°C";
    weatherl[0].innerHTML = data.name;
    if(data.weather[0].icon==="01d"||data.weather[0].icon==="01n"){
            seticon(clear_icon);
    }        //we r taking it from the thunder and in weather(it is a array) so we r taking icon from thunder
   else if(data.weather[0].icon==="02d"||data.weather[0].icon==="02n"){
        seticon(clouds_icon);
}
 else if(data.weather[0].icon==="03d"||data.weather[0].icon==="03n"){
    seticon(drizzle_icon);
}
 else if(data.weather[0].icon==="04d"||data.weather[0].icon==="04n"){
    seticon(drizzle_icon);
}
 else if(data.weather[0].icon==="09d"||data.weather[0].icon==="09n"){
    seticon(rain_icon);
}
    else if(data.weather[0].icon==="10d"||data.weather[0].icon==="10n"){
          seticon(rain_icon);
}
else if(data.weather[0].icon==="13d"||data.weather[0].icon==="13n"){
    seticon(snow_icon);
}
else{
    seticon(clear_icon);
}
};

return  <>
    <div className="container">
        <div className="topbar">
            <input type="text" className="cityinput" />
            <div className="search" onClick={()=>{search()}}> {/* ()=>{} call by function*/ }
                <img src={search_icon} alt="" />
            </div>
        </div>
        <div className="weatherimg">
            <img src={wicon} alt="" />
        </div>
     
        <div className="weather-temp">24°C</div>
        <div className="main">
            <div className="weather-location"> London </div>
           
            
            <div className="element">
           
        <div className="data">
        <img src={humidity_icon} className="humid-margin" />
        <div>
            <div className="humidity-percent">65%</div>
            <div className="text">Humidity</div>
            </div>
        </div>
      
 
           
        <div className="data">
        <img  src={wind_icon} />
        <div>
            <div className="wind-speed">4 km/hr</div>
            <div className="text">Wind-Speed</div>
            </div>
        </div>
        
    </div>
    </div>
    </div>

    </>
  



};
export default Weatherapp;