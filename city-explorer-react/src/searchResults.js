import React from 'react';
import superagent from 'superagent';
require('dotenv').config();

class Yelp extends React.Component{
render(){
  return(
    <section>
      <ul>
        <li>
          Yelp API result
        </li>
      </ul>
    </section>
  );
}
}

class MovieDB extends React.Component{
  render(){
    return(
      <section>
        <ul>
        <li>
          MovieDB API result
        </li>
      </ul>
      </section>
    );
  }
  }



    

  class DarkSky extends React.Component{

    constructor(props){
      super(props);
      this.state= {
        weather: {}
      }
    }

    componentDidMount(){
      this.weatherFunction();
    }

    weatherFunction = async () => {
      let url = `https://city-explorer-backend.herokuapp.com/weather`;
      let weatherData = await superagent.get(url).query({data: this.props.location});
      this.setState({
        weather: weatherData.body
      });
    }


    render(){
      console.log('weather', this.state.weather);
      
      return(
        <section>
          <ul>
            <li>
              test
             {/* {this.state.weather.body[0].forecast} */}
            </li>
          </ul>
        </section>
      );
      }
    
    }


  class EventBrite extends React.Component{
    render(){
      return(
        <section>
           <ul>
        <li>
          EventBrite API result
        </li>
      </ul>
        </section>
      );
    }
    }


class SearchResult extends React.Component{
  render(){
    return(
      <section>
      <p>here is your result</p>
      <Yelp/>
      <MovieDB/>
      {this.props.location ? 
      <DarkSky 
        location = {this.props.location}
        searchQuery = {this.props.searchQuery}
        latitude = {this.props.latitude}
        longitude = {this.props.longitude}
        // weather = {this.props.weather}
        /> : null 
    }
      <EventBrite/>

      </section>
    );
  }
}







export default SearchResult;