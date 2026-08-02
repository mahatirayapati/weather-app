import { useState,useEffect} from 'react';
import SearchBar from "./components/SearchBar";
import WeatherCard from './components/WeatherCard';
import BackgroundVideo from './components/BackgroundVideo';
import getMoonPhase from './utils/getMoonPhase';
import Loading from './components/Loading';
import getWeatherIcon from './utils/getWeatherIcon';
import getBackgroundVideo from './utils/getBackgroundVideo';
import {getRecentSearches,saveRecentSearches} from "./components/localstorage";
import './App.css'


function App(){
const [city,setCity]=useState("");
const [weather, setWeather] = useState(null);
const [loading, setLoading] = useState(true);
const [recentSearches,setRecentSearches]=useState([]);
const weatherType = weather?.weather?.[0]?.main;
const description = weather?.weather?.[0]?.description?.toLowerCase();
const isNight=weather?.dt > weather?.sys?.sunset;
const moonPhase = getMoonPhase();
const weatherIcon=getWeatherIcon(weatherType,isNight);
const backgroundVideo=getBackgroundVideo(weatherType,description,isNight);


useEffect(()=>{
   const API_KEY=import.meta.env.VITE_WEATHER_API_KEY;
   navigator.geolocation.getCurrentPosition(
   async (position)=>{
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
      const response = await fetch(url);
      const currentlocdata = await response.json();
      console.log(currentlocdata);
      setCity(currentlocdata.name);
      fetchWeather(currentlocdata.name);
                      },
                        (error)=>{
                        console.log(error);
                        setLoading(false);
                                 }    
                                           );
},[]);


useEffect(()=>{
  const savedSearches=getRecentSearches();
  setRecentSearches(savedSearches);
},[]);

const fetchWeather=async (cityName)=>{
  try{
  setLoading(true);
  const API_KEY=import.meta.env.VITE_WEATHER_API_KEY;
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
  const response=await fetch(url);
  const data=await response.json();
  if (data.cod !== 200) {
  alert("City not found");
  setLoading(false);
  return;
}
  setWeather(data);
  const updated=saveRecentSearches(cityName);
  setRecentSearches(updated);
}catch(e){
  console.log(e);
}
  finally{
  setLoading(false);
  }
 };

 function handleRecentClick(cityName){
  setCity(cityName);
  fetchWeather(cityName);
 }

  return(
  <>   
    <BackgroundVideo
     backgroundVideo={backgroundVideo}
     />

    <div className="main-container">
      <div className="weather-card" id="display-card">
        { loading? ( <Loading />):(<>
                                   <SearchBar
                                    city={city}
                                    setCity={setCity}
                                    recentSearches={recentSearches}
                                    handleRecentClick={handleRecentClick}
                                    fetchWeather={fetchWeather} />

                                    <WeatherCard 
                                     weather={weather}
                                     weatherIcon={weatherIcon}
                                     moonPhase={moonPhase}
                                     />
                                     </>)
     
        }  
     </div>
   </div>
  </>
  );
}
export default App
