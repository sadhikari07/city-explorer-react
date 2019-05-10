import React from 'react';
import superagent from 'superagent';
import { Link } from 'react-router-dom';
require('dotenv').config();


class Yelp extends React.Component{
constructor(props){
  super(props);
  this.state= {
    yelp: []
  }
}

componentDidMount(){
  this.yelpFunction();
}

yelpFunction = async () => {
  let url = `https://city-explorer-backend.herokuapp.com/yelp`;
  let yelpData = await superagent.get(url).query({data: this.props.location});
  this.setState({
    yelp: yelpData.body
  });
  console.log('yelp data', this.state.yelp);
}

render(){
  return(
    <section>
      <ul className = 'yelpResult'>
          <h3 className = 'resultTitle'>Results from the Yelp API</h3>
         {this.state.yelp.length>0 ? (this.state.yelp.map(element => <li> 
         <p>{element.name}</p> <a href = {element.url}></a>
          <p>The average rating is {element.rating} out of 5 and the average cost is {element.price} out of 4</p>
          <p><img className = 'yelpImage' src = {element.image_url}/></p> </li>)) : 'nothing'}
      </ul>
    </section>
  );
  }
}

class MovieDB extends React.Component{

  constructor(props){
    super(props);
    this.state= {
      movies: []
    }
  }

  componentDidMount(){
    this.movieFunction();
  }

  movieFunction = async () => {
    let url = `https://city-explorer-backend.herokuapp.com/movies`;
    let movieData = await superagent.get(url).query({data: this.props.location});
    this.setState({
      movies: movieData.body
    });  
    console.log('this movie', this.state.movies);
  }

  render(){
    return(
      <section>
        <ul className = 'movieResult'>
        <h3 className = 'resultTitle'>Results from the Movies API</h3>
           {this.state.movies.length>0 ? (this.state.movies.map(element => <li><p><span className = 'movieTitleOnDisplay'> {element.title}</span> was released on {element.released_on}</p> <p>{element.overview}</p></li>)) : 'nothing'}
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
      console.log('lets sort weather', this.state.weather);
    }

    render(){
      return(
        <section>
          <ul className = 'weatherResult'>
          <h3 className = 'resultTitle'>Results from the Dark Sky API</h3>
             {this.state.weather[0] ? (this.state.weather.map(element => <li>
              <p>The forecast for {element.time} is: {element.forecast}</p> </li>)) : 'nothing'}
          </ul>
        </section>
      );
      }
    
    }


  class EventBrite extends React.Component{
    render(){
      return(
        <section>
        <ul className = 'eventResult'>
        <h3 className = 'resultTitle'>Results from the EventBrite API</h3>
        <p><li>EventBrite API result</li></p> <p><li>EventBrite API result</li></p> <p><li>EventBrite API result</li></p> <p><li>EventBrite API result</li></p> <p><li>EventBrite API result</li></p> <p><li>EventBrite API result</li></p> <p><li>EventBrite API result</li></p> <p><li>EventBrite API result</li></p> <p><li>EventBrite API result</li></p> <p><li>EventBrite API result</li></p> <p><li>EventBrite API result</li></p> <p><li>EventBrite API result</li></p> <p><li>EventBrite API result</li></p> <p><li>EventBrite API result</li></p>
      </ul>
        </section>
      );
    }
    }


class SearchResult extends React.Component{
  render(){

    return(
      <section>

        {this.props.location ? 
          <h2></h2>
          : <p></p> 
        }

        {this.props.location ? 
          <DarkSky 
            location = {this.props.location}
            searchQuery = {this.props.searchQuery}
            latitude = {this.props.latitude}
            longitude = {this.props.longitude}
            /> 
        : null 
        }

        {this.props.location ? 
          <Yelp
          location = {this.props.location}
          />
          : null 
        }

        {this.props.location ? 
          <MovieDB 
          location = {this.props.location}
          latitude = {this.props.latitude}
          longitude = {this.props.longitude}
          />
        : null 
        }



      

      {this.props.location ? 
        <EventBrite/>

        : null 
      }

      </section>
    );
  }
}







export default SearchResult;