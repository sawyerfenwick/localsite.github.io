import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormComponent from './components/FormComponent';
import NewsComponent from './components/NewsComponent';
import WeatherComponent from './components/WeatherComponent';
import { Link } from "react-router-dom";
import React from 'react';
import HeaderComponent from './components/HeaderComponent';


function App() {

  return (
    <div>
      <HeaderComponent/>
      <FormComponent/>
    </div>
   
  );
}

export default App;
