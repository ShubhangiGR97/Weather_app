import React from "react";
import {getCurrentWeather} from "../api/wheather_api";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        

        
    }
    onInputChange(e){
        this.props.inputChange(e);
    }
    onFormSubmit(e){
        e.preventDefault();
        this.props.formSubmitted(); 
        
    }

    render() {
        const location = this.props.location;
        const temp =' this.state.temp';
        return(
            <div>
                <form onSubmit = {(e)=> this.onFormSubmit(e)}>

                    {/* display location what we type in the search bar */}
                    {/* {location}   */}
                    <button type="submit">Search</button>
                    <input id="search" name="search" value={location} onChange = {(e)=> this.onInputChange(e)}></input>
                </form>
            </div>
        )
    }
}
export default SearchBar;