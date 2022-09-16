import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from './components/HeaderComponent';
import FormComponent from './components/FormComponent';
import NewsComponent from './components/NewsComponent';

function App() {
  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <FormComponent></FormComponent>
      <NewsComponent></NewsComponent>
    </div>
    
  );
}

export default App;
