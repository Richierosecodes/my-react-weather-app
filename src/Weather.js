import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css"


export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready: false});
    function handleResponse(response) {
    
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            description: response.data.weather[0].description,
            iconUrl: "https://png.pngtree.com/png-vector/20190826/ourlarge/pngtree-clear-sky-in-the-daytime-png-image_1699567.jpg", 
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt*1000),
            city: response.data.name,
            wind: response.data.wind.speed  
        }
        );
    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
                <form>
                    <div className="row">
                        <div className="col-9">
                        <input type="Search" placeholder="Enter a city..."  className="form-control" autoFocus="on"/>
                        </div>
                        <div className="col-3">
                        <input type="Submit" value="Search" className="btn btn-primary w-100" />
                        </div>
                    </div>
                </form>
                <WeatherInfo data = {weatherData} />
            </div>
        )


        } else {
    const apiKey = "e1df324e950e63ef3c14062f0d815344";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    
        
    return "loading...;"

    }
}
    




    
