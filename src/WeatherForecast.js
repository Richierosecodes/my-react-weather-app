import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
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
                <WeatherForecastDay data = {forecast[0]} />
                
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
