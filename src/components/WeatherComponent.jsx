import 'bootstrap/dist/css/bootstrap.min.css';
import {useLocation} from "react-router-dom";

function WeatherComponent() {

    const location = useLocation();


    return<h1>The Weather in {location.state.cityName} in {location.state.provinceName}</h1>;
}

export default WeatherComponent;