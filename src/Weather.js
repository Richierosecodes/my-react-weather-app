import React, { useState } from "react";
import FriendlyDate from "./FriendlyDate";
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
                <h1>{weatherData.city}</h1>
                <ul>
                    <li>
                        <FriendlyDate date={weatherData.date} />
                        </li>
                    <li className="text-capitalize">{weatherData.description}</li>
                </ul>
                <div className="row mt-3">
                    <div className="col-6">
                        <div className="d-flex">
                            <div className="float-left">
                            <img src= {weatherData.iconUrl} alt= {weatherData.description} width="60"/>
                            </div>
    
                            <div className="float-left">
                                <span className="temperature">{Math.round(weatherData.temperature)}</span>
                                <span className="unit">℃|℉</span>
                            </div>
                        </div>         
                    </div>
                    <div className="col-6">
                        <ul>
                        <li>Humidity:{weatherData.humidity}%</li>
                        <li>Wind: {Math.round(weatherData.wind)} km/h</li>
                        </ul>
                    </div>
    
                </div>
            </div>
        )


        } else {
    const apiKey = "e1df324e950e63ef3c14062f0d815344";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    
        
    return "loading...;"

    }
}
    




    
