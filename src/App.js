import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from './components/HeaderComponent';
import FormComponent from './components/FormComponent';
import NewsComponent from './components/NewsComponent';
import WeatherComponent from './components/WeatherComponent';

function App() {

  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <FormComponent></FormComponent>
      <WeatherComponent></WeatherComponent>
    </div>
    
  );
}

export default App;
