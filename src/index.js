import { render } from "react-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import WeatherComponent from "./components/WeatherComponent";
import NewsComponent from "./components/NewsComponent";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App/>
    <Routes>
      {/* Add the routes and components here to provide links */}
        <Route exact path="/weather" element={<WeatherComponent/>}/>
        <Route exact path="/news" element={<NewsComponent/>}/>
      </Routes>
  </BrowserRouter>
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
