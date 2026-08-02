import sunnyVideo from "../assets/videos/sunny day.mp4";
import cloudyVideo from "../assets/videos/cloudy.mp4";
import cloudynightVideo from "../assets/videos/cloudynight.mp4";
import fogVideo from "../assets/videos/fog.mp4";
import nightrainVideo from "../assets/videos/nightrain.mp4";
import nightskyVideo from "../assets/videos/nightsky.mp4";
import prtialcloudyVideo from "../assets/videos/partial cloudy.mp4";
import rainyVideo from "../assets/videos/rainy.mp4";
import snowfallVideo from "../assets/videos/snowfall.mp4";
import thunderstromeVideo from "../assets/videos/thunderstrome.mp4";
import windyVideo from "../assets/videos/windy.mp4";

function getBackgroundVideo(weatherType,description,isNight){
let backgroundVideo = sunnyVideo;

switch (weatherType) {
  case "Clear":
    backgroundVideo = isNight ? nightskyVideo : sunnyVideo;
    break;

 case "Clouds":
  if (
    description === "few clouds" ||
    description === "scattered clouds"
  ) {
    backgroundVideo = isNight
      ? cloudynightVideo
      : prtialcloudyVideo;
  } else if (
    description === "broken clouds" ||
    description === "overcast clouds"
  ) {
    backgroundVideo = isNight
      ? cloudynightVideo
      : cloudyVideo;
  } else {
    backgroundVideo = isNight
      ? cloudynightVideo
      : cloudyVideo;
  }
  break;

  case "Rain":
  case "Drizzle":
    backgroundVideo = isNight ? nightrainVideo : rainyVideo;
    break;

  case "Thunderstorm":
    backgroundVideo = thunderstromeVideo;
    break;

  case "Snow":
    backgroundVideo = snowfallVideo;
    break;

  case "Mist":
  case "Fog":
  case "Haze":
  case "Smoke":
    backgroundVideo = fogVideo;
    break;

  case "Dust":
  case "Sand":
  case "Ash":
    backgroundVideo = windyVideo;
    break;

  default:
    backgroundVideo = sunnyVideo;
}
return backgroundVideo;
}
export default getBackgroundVideo;