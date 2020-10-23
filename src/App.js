import React from 'react';
import './App.css';

import MovieList from './MovieList';



function App() {
  
  return (
    <div className="container">
      <h1 className="text-center">Film Listesi</h1>
      <MovieList/>
    </div>
  );
}

export default App;
