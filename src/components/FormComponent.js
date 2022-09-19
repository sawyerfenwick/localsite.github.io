import {useState, useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";


function FormComponent(props) {
      const[city, setCity] = useState("");
      const[province, setProvince] = useState("");
      const inputRef1 = useRef(null);
      const inputRef2 = useRef(null);
      // Type annotations can only be used in Typescript, for performances purpose, a future project in TS could work
      const handleClick = () => {
        setCity(inputRef1.current.value);
        setProvince(inputRef2.current.value);
      }
      return (
        <form>
          {/* mx does margin for the x-values meaning left and right. Vice versa for my and y-values*/}
        <div class="form-group mx-5 my-4">
          <label for="inputCity">City Name</label>
          <input ref={inputRef1} type="text" class="form-control" id="inputCity" placeholder="Enter City"></input>
        </div>
        <div class="form-group mx-5 my-4">
          <label for="inputProvince">Province Name</label>
          <input ref={inputRef2} type="text" class="form-control" id="inputProvince" placeholder="Enter Province"></input>
        </div>
        <div class="d-flex justify-content-center">
        <Link to="/weather" onClick={handleClick}>
        <button type="submit" class="btn btn-primary mx-3">Weather</button>
        </Link>
        <Link to="/news" onClick={handleClick}>  
        <button type="submit" class="btn btn-primary mx-3">News</button>
        </Link>
        <button type="submit" class="btn btn-primary mx-3">Maps</button>
        <button type="submit" class="btn btn-primary mx-3">COVID-19</button>
        </div> 
        </form>
       
       
      );
    } 
    export default FormComponent;
