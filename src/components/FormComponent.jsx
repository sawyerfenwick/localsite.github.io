import 'bootstrap/dist/css/bootstrap.min.css';

function FormComponent() {
    return (
      <form>
        {/* mx does margin for the x-values meaning left and right. Vice versa for my and y-values*/}
      <div class="form-group mx-5 my-4">
        <label for="inputCity">City Name</label>
        <input type="city" class="form-control" id="inputCity" placeholder="Enter City"></input>
      </div>
      <div class="form-group mx-5 my-4">
        <label for="inputProvince">Province Name</label>
        <input type="province" class="form-control" id="inputProvince" placeholder="Enter Province"></input>
      </div>
      {/* This utilizes flexbox to change the area of the screen it would occupy. Justify content */}
      <div class="d-flex justify-content-center">
      <button type="submit" class="btn btn-primary">Enter</button>
      </div>
      </form>
    );
}

export default FormComponent;