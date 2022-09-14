import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function HomeComponent() {
    return (
      <div>
          <Button as="a" variant="primary">
            Button as link
            </Button>
      </div>
    );
  }
  
  export default HomeComponent;