import {useState,} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from "react-router-dom";


function FormComponent(props) {
      const[city, setCity] = useState("");
      const[province, setProvince] = useState("");
      const state = {button: 1};
      const navigate = useNavigate();
      // Type annotations can only be used in Typescript, for performances purpose, a future project in TS could work
      const handleSubmit = (event) => {
        event.preventDefault();
        if(state.button === 1){
          alert(`The weather you entered was: ${city}, ${province}`);
          navigate("/weather");
        }
        else if(state.button === 2){
          alert(`The news you entered was: ${city}, ${province}`);
          navigate("/news");
        }
        else if(state.button === 3){
          alert(`The maps you entered was: ${city}, ${province}`);
        }
        else if(state.button === 4){
          alert(`The covid-19 you entered was: ${city}, ${province}`);
        }
      };
      // Have to change the means by which click happens, the button situation may be wise. Refer to Sawyer's code
      return (
        <div>
          <form onSubmit={handleSubmit}>
            {/* mx does margin for the x-values meaning left and right. Vice versa for my and y-values*/}
          <div class="form-group mx-5 my-4">
            <label for="inputCity">City Name</label>
            <input onChange={(e) => setCity(e.target.value)} type="text" class="form-control" id="inputCity" placeholder="Enter City"></input>
          </div>
          <div class="form-group mx-5 my-4">
            <label for="inputProvince">Province Name</label>
            <input onChange={(e) => setProvince(e.target.value)} type="text" class="form-control" id="inputProvince" placeholder="Enter Province"></input>
          </div>
          <div class="d-flex justify-content-center">
          <button onClick={() => (state.button = 1)} type="submit" class="btn btn-primary mx-3">Weather</button>
          <button onClick={() => (state.button = 2)} type="submit" class="btn btn-primary mx-3">News</button>
          <button onClick={() => (state.button = 3)} type="submit" class="btn btn-primary mx-3">Maps</button>
          <button onClick={() => (state.button = 4)} type="submit" class="btn btn-primary mx-3">COVID-19</button>
          </div> 
          </form>


        </div>
      );
    } 
    export default FormComponent;
