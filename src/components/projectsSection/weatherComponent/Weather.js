import { useState, useEffect } from "react";
import Card from "./components/Card";
// import Header from './components/Header';

function Weather() {
  const [address, setAddress] = useState("");
  // By default we have New york weather
  const [lat, setLat] = useState("40.7128");
  const [lon, setLon] = useState("-74.0060");
  const [error, setError] = useState("");
  const [weatherData, setWeatherData] = useState("");

  // Check if the address is written and press the enter then it will fetch the address from google.
  useEffect(() => {
    if (address) {
      fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyA_v4JZzPBikDtXxsJteOgHnAsXHMBGa5E`
      )
        .then((resp) => resp.json())
        .then((res) => {
          setError("");
          setLat(res.results[0].geometry.location.lat);
          setLon(res.results[0].geometry.location.lng);
          console.log(res);
        })
        .catch((resaon) => {
          setError("No data was found.");
        });
    }
    console.log(lat, lon, address);
  }, [address]);
  // If the Address from google was connected and Lat and Lon were connected then another request will send to the openweathermap.org
  useEffect(() => {
    if (lat && lon) {
      //weatherbit api 50 request per day
      fetch(
        `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&key=030ac77e023543f5a7af9cdda7104d12`
      )
        .then((resp) => resp.json())
        .then((res) => {
          // we get the response from weather api here.
          setWeatherData(res);
          // console.log(res);
        })
        .catch((reason) => {
          return console.log(reason);
        });
    }
  }, [lat, lon]);

  return (
    <div>
      {/* <Header ad={setAddress} err={error ? error : ''} /> */}

      <Card data={weatherData} ad={setAddress} err={error ? error : ""} />
    </div>
  );
}

export default Weather;
