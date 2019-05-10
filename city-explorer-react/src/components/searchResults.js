import React from 'react';
import superagent from 'superagent';
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
      <ul>
         {this.state.yelp.length>0 ? (this.state.yelp.map(element => <li> <p>{element.name}</p> <p>{element.price}</p> <p>{element.rating}</p> <p><img src = {element.image_url}/></p> </li>)) : 'nothing'}
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
    // console.log('movies', movieData);
    this.setState({
      movies: movieData.body
    });  
    console.log('this movie', this.state.movies);
  }

  render(){
    // console.log('movies in render', this.state.movie[0]);
    return(
      <section>
        <ul>
           {this.state.movies.length>0 ? (this.state.movies.map(element => <li><p> {element.title}</p> <p>{element.overview}</p></li>)) : 'nothing'}
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
          <ul>
             {this.state.weather[0] ? (this.state.weather.map(element => <li> <p>{element.forecast}</p> <p>{element.time}</p></li>)) : 'nothing'}
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
        <DarkSky 
          location = {this.props.location}
          searchQuery = {this.props.searchQuery}
          latitude = {this.props.latitude}
          longitude = {this.props.longitude}
          /> 
      : null 
    }

      <EventBrite/>

      </section>
    );
  }
}







export default SearchResult;