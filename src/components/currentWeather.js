import React from "react";

class Currentweather extends React.Component {
    render(){
        const url =  `http://openweathermap.org/img/wn/${this.props.icon}@4x.png`;
        // const url = ' http://openweathermap.org/img/wn/10d@2x.png';
        return(
                <div className="current-weather">
                    <div className="current-weather__content">
                        <p className="current-weather__temp">{this.props.currentTemperature}</p>
                        <p className="current-weather__description">{this.props.description}</p>
                        <img className="current-weather__icon" src={url} alt= {this.props.description} />
                    </div>
                    <div>
                        <p className="current-weather__feels-like"> Feels like  {this.props.feelslike}</p>
                        
                    </div>
                </div>
            )
    }
    
}
export default Currentweather;