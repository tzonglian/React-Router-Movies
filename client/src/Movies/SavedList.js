import React from 'react';
import {Route} from 'react-router-dom'

export default function SavedList(props) {
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <div className="home-button"> 
        <Route path='/'>Home</Route>
      </div>
    </div>
  );
}
