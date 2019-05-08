import React from 'react';


const Header = () =>{
  return(
    <header>
      <h1>City explorer</h1>
      <p>Enter a location below to learn about the weather, events, restaurants, movies filmed there, and more!</p>
    </header>
  );
};

const Main = () =>{
  return (
    <React.Fragment>
      <Search/>
      <Map/>
      <Result/>
      <Result/>
      <Result/>
      <Result/>
      <Result/>
    </React.Fragment>
  );
};

const Search = () =>{
  return(
    <React.Fragment>
      <input type = 'text' placeholder = 'search'></input>
      <button>Search</button>
    </React.Fragment>
  );
};

const Map = () =>{
  return(
    <div>
      <p>your map here</p>
    </div>
  );
};

const Result = () =>{
  return(
    <section>
      <p>here is your result</p>
    </section>
  );
};

class App extends React.Component{
  render(){
    return(
      <React.Fragment>
        <Header/>
        <Main/>
      </React.Fragment>
    );
  }
}

export default App;