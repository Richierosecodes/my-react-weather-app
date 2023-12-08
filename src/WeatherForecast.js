import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";


export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
    }
    
       

    
    if (loaded) {
        console.log(forecast);
        return (
        <div className="WeatherForecast">
        <div className="row">
            <div className="col">
                <div className="WeatherForecast-day">{forecast[0].dt} </div>
                <WeatherIcon code = {forecast[0].weather[0].icon} size={36} />
                <div className="WeatherForecast-temperatures">
                    <span className="WeatherForecast-temperature-max">
                    {Math.round(forecast[0].temperature.maximum)}°
                    </span>
                   
                    <span className="WeatherForecast-temperature-min">
                    {Math.round(forecast[0].temperature.minimum)}°
                    </span>
                   
                </div>
            </div>
        </div>
    </div>
        );
    
   
    
    }else{
        let apiKey = "cf4b8d4et700d15264c45doca5caf311";
        let latitude = props.coordinates.latitude;
        let longitude = props.coordinates.longitude;
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;
    
        axios.get(apiUrl).then(handleResponse);

        return null;
}

    }
