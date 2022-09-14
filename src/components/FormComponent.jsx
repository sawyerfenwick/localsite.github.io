import 'bootstrap/dist/css/bootstrap.min.css';

function FormComponent() {
    return (
      <form>
      <div class="form-group">
        <label for="inputCity">City Name</label>
        <input type="city" class="form-control" id="inputCity" placeholder="Enter City"></input>
      </div>
      <div class="form-group">
        <label for="inputProvince">Province Name</label>
        <input type="province" class="form-control" id="inputProvince" placeholder="Enter Province"></input>
      </div>
      <button type="submit" class="btn btn-primary">Enter</button>
      </form>
    );
}

export default FormComponent;