import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';


class NewsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newsQuery: null,
    };
  }
    render(){
      return (
          <div className='d-flex justify-content-evenly my-4'>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Article Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Author Name</Card.Subtitle>
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