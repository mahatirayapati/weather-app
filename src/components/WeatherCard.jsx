import {
  Wind,
  Droplets,
  Thermometer,
  Eye,
  MoonStar
} from "lucide-react";


function WeatherCard({weather,weatherIcon,moonPhase}){
return(<>
    <div className="weather-info" >
      <div className="weather-icon">
      {weatherIcon}
      </div>
     <h2>{weather?.name}</h2>
     <p className="temp"> {Math.round(weather?.main?.temp)}<span>°C</span></p>
     <p className="condition">{weather?.weather?.[0]?.description}</p>

     
   <div className="extra-info">

    <div className="info-card">
    <Droplets size={24}/>
    <div>
      <p className="label">Humidity</p>
      <p className="value">{weather?.main?.humidity}%</p>
    </div>
  </div>

  <div className="info-card">
    <Wind size={24}/>
    <div>
      <p className="label">Wind Speed</p>
      <p className="value">{(weather?.wind?.speed *3.6).toFixed(1)}Km/h</p>
    </div>
  </div>

  <div className="info-card">
    <Thermometer size={24}/>
    <div>
      <p className="label">Feels Like</p>
      <p className="value">{weather?.main?.feels_like}°C</p>
    </div>
  </div>



   <div className="info-card">
    <Eye size={24}/>
    <div>
      <p className="label">Visibility</p>
      <p className="value">{weather?.visibility/1000}Km</p>
    </div>
  </div>

  <div className="info-card moon-card">
    <MoonStar size={24}/>
    <div>
      <p className="label">Moon Phase</p>
      <p className="value">{moonPhase}</p>
    </div>
  </div>

</div>

     </div>
     </>)
}

export default WeatherCard;