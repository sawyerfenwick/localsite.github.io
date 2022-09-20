import React, {useEffect} from 'react';
import {useState,} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import {useLocation} from "react-router-dom";



function NewsComponent(props){
    const location = useLocation();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const apiKey = "";
    useEffect(() => {
        fetch("https://newsapi.org/v2/everything?q=Toronto+Ontario&apiKey=" + apiKey)
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [])
      // Error handling
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        console.log(items);
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
}

export default NewsComponent;