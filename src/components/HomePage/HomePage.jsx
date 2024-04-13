import "./HomePage.css";
import Card from 'react-bootstrap/Card';


const HomePage = () => {
  const handleTime = () => {
    const demoElement = document.getElementById('demo');
    if (demoElement) {
      demoElement.innerText = new Date();
    }
  };
  return (
    <div className='home-container'> 
       <div className="time-container">
       <ul id="navbar-nav-btn">

       <button  id="time" className="navbar-nav-btn btn btn-outline-dark my-2 my-sm-0"onClick={handleTime}>What is the time?</button>
          <p id="demo"></p>
          </ul>
       </div>

     <div className='card-grp'>
      <Card className='card'>
      <img src = "/assets/books/book1.jpg" width="140px" height="220px" className="d-inline-block align-top img-cls" alt="" />
        <Card.Body >
          <Card.Title> THE LAST WATCH </Card.Title>
          <Card.Title> $75 </Card.Title>

          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Footer className='card-footer'>
        <button className="navbar-nav-btn btn btn-outline-dark my-2 my-sm-0" type='submit'> Buy Now </button>
        </Card.Footer>
        </Card.Body>
      </Card>

      <Card className='card'>
      <img src = "/assets/books/bigsleep.jpeg" width="140px" height="220px" className="d-inline-block align-top img-cls" alt="" />
        <Card.Body >
          <Card.Title> THE BIG SLEEP </Card.Title>
          <Card.Title> $84 </Card.Title>

          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Footer className='card-footer'>
        <button className="navbar-nav-btn btn btn-outline-dark my-2 my-sm-0" type='submit'> Buy Now </button>
        </Card.Footer>
        </Card.Body>
      </Card>

      <Card className='card'>
      <img src= "/assets/books/seastars.jpg" width="140px" height="220px" className="d-inline-block align-top img-cls" alt="" />
        <Card.Body >
          <Card.Title> TO SLEEP IN A SEA OF STARS </Card.Title>
          <Card.Title> $92 </Card.Title>

          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Footer className='card-footer'>
        <button className="navbar-nav-btn btn btn-outline-dark my-2 my-sm-0" type='submit'> Buy Now </button>
        </Card.Footer>
        </Card.Body>
      </Card>

      <Card className='card'>
      <img src = "/assets/books/luminousdead.jpg" width="140px" height="220px" className="d-inline-block align-top img-cls" alt="" />
        <Card.Body >
          <Card.Title> THE LUMINOUS DEAD </Card.Title>
          <Card.Title> $102 </Card.Title>

          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Footer className='card-footer'>
        <button className="navbar-nav-btn btn btn-outline-dark my-2 my-sm-0" type='submit'> Buy Now </button>
        </Card.Footer>
        </Card.Body>
      </Card>
    </div>

    <div className='card-grp'>
      <Card className='card'>
      <img src = "/assets/books/book1.jpg" width="140px" height="220px" className="d-inline-block align-top img-cls" alt="" />
        <Card.Body >
          <Card.Title> THE LAST WATCH </Card.Title>
          <Card.Title> $75 </Card.Title>

          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Footer className='card-footer'>
        <button className="navbar-nav-btn btn btn-outline-dark my-2 my-sm-0" type='submit'> Buy Now </button>
        </Card.Footer>
        </Card.Body>
      </Card>

      <Card className='card'>
      <img src = "/assets/books/bigsleep.jpeg" width="140px" height="220px" className="d-inline-block align-top img-cls" alt="" />
        <Card.Body >
          <Card.Title> THE BIG SLEEP </Card.Title>
          <Card.Title> $84 </Card.Title>

          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Footer className='card-footer'>
        <button className="navbar-nav-btn btn btn-outline-dark my-2 my-sm-0" type='submit'> Buy Now </button>
        </Card.Footer>
        </Card.Body>
      </Card>

      <Card className='card'>
      <img src= "/assets/books/seastars.jpg" width="140px" height="220px" className="d-inline-block align-top img-cls" alt="" />
        <Card.Body >
          <Card.Title> TO SLEEP IN A SEA OF STARS </Card.Title>
          <Card.Title> $92 </Card.Title>

          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Footer className='card-footer'>
        <button className="navbar-nav-btn btn btn-outline-dark my-2 my-sm-0" type='submit'> Buy Now </button>
        </Card.Footer>
        </Card.Body>
      </Card>

      <Card className='card'>
      <img src = "/assets/books/luminousdead.jpg" width="140px" height="220px" className="d-inline-block align-top img-cls" alt="" />
        <Card.Body >
          <Card.Title> THE LUMINOUS DEAD </Card.Title>
          <Card.Title> $102 </Card.Title>

          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Footer className='card-footer'>
        <button className="navbar-nav-btn btn btn-outline-dark my-2 my-sm-0" type='submit'> Buy Now </button>
        </Card.Footer>
        </Card.Body>
      </Card>
    </div>

    <div className='card-grp'>
      <Card className='card'>
      <img src = "/assets/books/book1.jpg" width="140px" height="220px" className="d-inline-block align-top img-cls" alt="" />
        <Card.Body >
          <Card.Title> THE LAST WATCH </Card.Title>
          <Card.Title> $75 </Card.Title>

          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Footer className='card-footer'>
        <button className="navbar-nav-btn btn btn-outline-dark my-2 my-sm-0" type='submit'> Buy Now </button>
        </Card.Footer>
        </Card.Body>
      </Card>

      <Card className='card'>
      <img src = "/assets/books/bigsleep.jpeg" width="140px" height="220px" className="d-inline-block align-top img-cls" alt="" />
        <Card.Body >
          <Card.Title> THE BIG SLEEP </Card.Title>
          <Card.Title> $84 </Card.Title>

          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Footer className='card-footer'>
        <button className="navbar-nav-btn btn btn-outline-dark my-2 my-sm-0" type='submit'> Buy Now </button>
        </Card.Footer>
        </Card.Body>
      </Card>

      <Card className='card'>
      <img src= "/assets/books/seastars.jpg" width="140px" height="220px" className="d-inline-block align-top img-cls" alt="" />
        <Card.Body >
          <Card.Title> TO SLEEP IN A SEA OF STARS </Card.Title>
          <Card.Title> $92 </Card.Title>

          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Footer className='card-footer'>
        <button className="navbar-nav-btn btn btn-outline-dark my-2 my-sm-0" type='submit'> Buy Now </button>
        </Card.Footer>
        </Card.Body>
      </Card>

      <Card className='card'>
      <img src = "/assets/books/luminousdead.jpg" width="140px" height="220px" className="d-inline-block align-top img-cls" alt="" />
        <Card.Body >
          <Card.Title> THE LUMINOUS DEAD </Card.Title>
          <Card.Title> $102 </Card.Title>

          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Footer className='card-footer'>
        <button className="navbar-nav-btn btn btn-outline-dark my-2 my-sm-0" type='submit'> Buy Now </button>
        </Card.Footer>
        </Card.Body>
      </Card>
    </div>
   
    </div>
  )
}

export default HomePage;
