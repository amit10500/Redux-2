import React from 'react';
import logo from './logo.svg';
import './App.css';
import store from './store';
import update_person from './store/actions/personActions';


function updatePerson() {
  store.dispatch(update_person)
}

function App() {
  return (
    <div className="App">
      <h1>Hello Redux</h1>
      Person Name : {store.getState().person.name}

      <button onClick={updatePerson}>Update Person</button>
    </div>
  );
}

export default App;
