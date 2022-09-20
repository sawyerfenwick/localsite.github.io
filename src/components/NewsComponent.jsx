import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import {useLocation} from "react-router-dom";



function NewsComponent(props){
    const location = useLocation();

    return (
          <div className='d-flex justify-content-evenly my-4'>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{location.state.cityName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{location.state.provinceName}</Card.Subtitle>
                        <Card.Text>
                        The contents of the article will go here.
                        </Card.Text>
                    {/* <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link> */}
                </Card.Body>
            </Card>
          </div>
    );
    
}

export default NewsComponent;