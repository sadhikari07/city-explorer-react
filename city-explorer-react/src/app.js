import React from 'react';
import Header from './header';
import Search from './search.js';
import Map from './map.js';
import superagent from 'superagent';
import SearchResult from './searchResults';


class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: '',
      formattedAddress: '',
      latitude: null,
      longitude: null,
      
    };
  }
 
  handleSearch = location => {
    let searchQuery = location;
    this.setState({ searchQuery });
    this.superagentCall(location);
  };


  superagentCall = async searchQuery => {
    let url = `https://city-explorer-backend.herokuapp.com/location`;
    let data = await superagent.get(url).query({data: searchQuery});
    this.setState({ 
      searchQuery: data.body.search_query,
      location: data.body,
      latitude: data.body.latitude,
      longitude: data.body.longitude,
      location: data.body
    })
  }


  render(){
    return(
      <React.Fragment>
        <Header/>
        <p>{this.state.latitude}</p>
        <p>{this.state.longitude}</p>
        <p>{this.state.formattedAddress}</p>
      <Search handleSearch = {this.handleSearch}/>
      <Map 
        searchQuery = {this.state.searchQuery}
        latitude = {this.state.latitude}
        longitude = {this.state.longitude}
      />
      <SearchResult
        location = {this.state.location}
        searchQuery = {this.state.searchQuery}
        latitude = {this.state.latitude}
        longitude = {this.state.longitude}
      />
    </React.Fragment>
    );
  }
}



export default App;