import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeComponent from './components/HomeComponent';
import HeaderComponent from './components/HeaderComponent';
import FormComponent from './components/FormComponent';

function App() {
  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <FormComponent></FormComponent>
    </div>
    
  );
}

export default App;
