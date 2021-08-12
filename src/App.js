import logo from './logo.svg';
import './App.scss';
import SerachBar from './components/serachBar';
import Currentweather from './components/currentWeather';
import React from 'react';
import {getCurrentWeather, getForecast} from './api/wheather_api'
import Forecast from './components/forecast'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        location : "",
        temp : "",
        feelsLike : "",
        description : "",
        icon : "",
        hourlyFore : [],
    };

    
}
onInputChange(e){
    this.setState ({
        location : e.target.value,
    });
}
async onFormSubmit(){
    const weatherRes = await getCurrentWeather(this.state.location);
    const lat = weatherRes.data.coord.lat;
    const lon = weatherRes.data.coord.lon;
    const forecast = await getForecast(lat, lon);

    this.setState({
              temp : weatherRes.data.main.temp,
              feelsLike : weatherRes.data.main.feels_like,
              description : weatherRes.data.weather[0].main,
              icons : weatherRes.data.weather[0].icon,
              hourluForcast : forecast.data.hourly
  
          })
    

    
}
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <SerachBar location = {this.state.location} inputChange = {(e)=> {this.onInputChange(e)}} formSubmitted = {()=> {this.onFormSubmit()}} />
          <Currentweather currentTemperature = {this.state.temp} feelslike = {this.state.feelsLike} description = {this.state.description} icon = {this.state.icons} />
          <Forecast  hourlyForecast = {this.state.header}/>
        </header>
      </div>
    );
  }
  
}

export default App;
