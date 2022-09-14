import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import header_background from '../resources/header-bg.jpeg'
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
        <div className='p-5 text-center header-oswald' style={{ backgroundImage: `url(${header_background})` }}>
            <h1 className='mb-3 '>Local API Site</h1>
            <h4 className='mb-3'>Powered by React and developed by:</h4>
            <h4 className='mb-0'>Sawyer and Daniel</h4>
        </div>
      
      </div>
    );
  }
  
  export default HeaderComponent;