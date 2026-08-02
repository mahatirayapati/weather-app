import {
  Search,
  Wind,
  Droplets,
  Sun,
  Thermometer,
  Eye,
  MoonStar,
  Cloud,
  CloudRain,
  CloudSnow,
  CloudFog,
  CloudLightning
} from "lucide-react";

function getWeatherIcon(weatherType,isNight){
    let weatherIcon=<Sun size={80} color="orange" strokeWidth={1.5} />;
    switch(weatherType){
      case "Clear":
        weatherIcon=isNight?
        <MoonStar size={80} color="#F4E99B" strokeWidth={1.5} />
        :<Sun size={80} color="orange" strokeWidth={1.5} />;
        break;
     case "Clouds":
        weatherIcon = <Cloud size={80} color="#d3d3d3" strokeWidth={1.5} />;
        break;
    
      case "Rain":
      case "Drizzle":
        weatherIcon = <CloudRain size={80} color="#4A90E2" strokeWidth={1.5} />;
        break;
    
      case "Thunderstorm":
        weatherIcon = <CloudLightning size={80} color="#FFD700" strokeWidth={1.5} />;
        break;
    
      case "Snow":
        weatherIcon = <CloudSnow size={80} color="#B0E0E6" strokeWidth={1.5} />;
        break;
    
      case "Mist":
      case "Fog":
      case "Haze":
      case "Smoke":
        weatherIcon = <CloudFog size={80} color="#A9A9A9" strokeWidth={1.5} />;
        break;
    
      default:
        weatherIcon = <Sun size={80} color="orange" strokeWidth={1.5} />;
    }
    return weatherIcon;
}

export default getWeatherIcon;