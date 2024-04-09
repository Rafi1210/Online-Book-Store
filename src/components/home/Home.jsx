import React from 'react'
import "./home.css";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import book1 from './books/book1.jpg';
import book2 from './books/bigsleep.jpeg';
import book3 from './books/seastars.jpg';


const home = () => {
  const handleTime = () => {
    const demoElement = document.getElementById('demo');
    if (demoElement) {
      demoElement.innerHTML = new Date().toString();
    }
  };
  return (
    <div>         
          <button id='time' onClick={handleTime}>What is the time?</button>
          <p id="demo"></p>

          <CardGroup className='card-grp'>
      <Card className='card-body '>
      <img src={book1} width="140px" height="220px" className="d-inline-block align-top" alt="" />
        <Card.Body >
          <Card.Title> THE LAST WATCH </Card.Title>
          <Card.Title> $75 </Card.Title>

          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <button className="navbar-nav-btn btn btn-outline-dark my-2 my-sm-0" type='submit'> Buy Now </button>

        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
      <Card className='card-body '>
      <img src={book2} width="140px" height="220px" className="d-inline-block align-top" alt="" />
        <Card.Body >
          <Card.Title> THE BIG SLEEP </Card.Title>
          <Card.Title> $84 </Card.Title>

          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <button className="navbar-nav-btn btn btn-outline-dark my-2 my-sm-0" type='submit'> Buy Now </button>

        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
      <Card className='card-body '>
      <img src={book3} width="140px" height="220px" className="d-inline-block align-top" alt="" />
        <Card.Body >
          <Card.Title> TO SLEEP IN A SEA OF STARS </Card.Title>
          <Card.Title> $92 </Card.Title>

          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <button className="navbar-nav-btn btn btn-outline-dark my-2 my-sm-0" type='submit'> Buy Now </button>

        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
     
    </CardGroup>


    <CardGroup className='card-grp'>
      <Card className='card-body '>
      <img src={book1} width="140px" height="220px" className="d-inline-block align-top" alt="" />
        <Card.Body >
          <Card.Title> THE LAST WATCH </Card.Title>
          <Card.Title> $75 </Card.Title>

          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <button className="navbar-nav-btn btn btn-outline-dark my-2 my-sm-0" type='submit'> Buy Now </button>

        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
      <Card className='card-body '>
      <img src={book2} width="140px" height="220px" className="d-inline-block align-top" alt="" />
        <Card.Body >
          <Card.Title> THE BIG SLEEP </Card.Title>
          <Card.Title> $84 </Card.Title>

          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <button className="navbar-nav-btn btn btn-outline-dark my-2 my-sm-0" type='submit'> Buy Now </button>

        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
      <Card className='card-body '>
      <img src={book3} width="140px" height="220px" className="d-inline-block align-top" alt="" />
        <Card.Body >
          <Card.Title> TO SLEEP IN A SEA OF STARS </Card.Title>
          <Card.Title> $92 </Card.Title>

          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <button className="navbar-nav-btn btn btn-outline-dark my-2 my-sm-0" type='submit'> Buy Now </button>

        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
     
    </CardGroup>

    </div>
  )
}

export default home
