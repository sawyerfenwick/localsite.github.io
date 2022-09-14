import 'bootstrap/dist/css/bootstrap.min.css';

function WeatherComponent(locationProp) {
    return<h1>The Weather in {locationProp.location} is {locationProp.weather}</h1>;
}

export default WeatherComponent;