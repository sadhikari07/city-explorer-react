import React from 'react';

class Map extends React.Component{

  render(){
    if(this.props.latitude){  
      return(
        <div className = 'mapDiv'>
          <img className = 'mapImage' src =  {`https://maps.googleapis.com/maps/api/staticmap?center=${this.props.latitude}%2c%20${this.props.longitude}&zoom=13&size=600x300&maptype=roadmap&key=${process.env.REACT_APP_GEOCODE_API_KEY}`}/>
          <h2 className = 'displayResult'>Here are the results for {this.props.searchQuery}</h2>
      </div>
      
      );
    }
    else{
      return(
        <div className= 'welcomeDiv'>Welcome to city explorer</div>
      )
    }
  }
}

export default Map;