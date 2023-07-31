import GetMovies from './components/getMovies'
import './App.css';
import React from 'react';
import NavBar from './components/NavBar/Navbar';
// import movieCategory from './components/movieCategory/movieCategory'


function App() {
  return (
    <div>
    <movieCategory/>
      <NavBar/>
      <GetMovies/>
    </div>
  );
}

export default App;
