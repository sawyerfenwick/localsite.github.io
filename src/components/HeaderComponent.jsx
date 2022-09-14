import 'bootstrap/dist/css/bootstrap.min.css';
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBContainer,
    MDBIcon,
    MDBBtn,
    MDBCollapse
  } from 'mdb-react-ui-kit';
  
  function HeaderComponent() {
    return (
      <div>
          <div className='p-5 text-center bg-light'>
        <h1 className='mb-3'>Heading</h1>
        <h4 className='mb-3'>Subheading</h4>
        <MDBBtn tag="a" outline size="lg">
          Call to action
        </MDBBtn>
      </div>
      
      </div>
    );
  }
  
  export default HeaderComponent;