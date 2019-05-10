import React from 'react';
class Search extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      location: '',
    }
  }

  handleChange = e => {
    let location = e.target.value;
    this.setState({ location });
  };

  handleClick = e => {
    e.preventDefault();
    this.props.handleSearch(this.state.location);
    
  };

  render(){
    return(
      <form onSubmit={this.handleClick}>
        <input onChange = {this.handleChange} type = 'text' placeholder = 'search'></input>
        <button onClick = {this.handleClick}>Explore</button>
      </form>
    );
  }
}






export default Search;