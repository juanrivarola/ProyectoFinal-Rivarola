import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <Link className='nav-link active' aria-current='page' to='/'> <img src="/favicon.png" alt="Logo" /></Link>
          
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">
              <Link className='nav-link active' aria-current='page' to='/'> Inicio</Link> 
            </Nav.Link>
            <Nav.Link href="#remeras">
              <Link className='nav-link active' aria-current='page' to='/category/remeras'> Remeras</Link> 
            </Nav.Link>
            <Nav.Link href="#buzos">
              <Link className='nav-link active' aria-current='page' to='/category/buzos'> Buzos</Link> 
            </Nav.Link>
            <Nav.Link href="#pantalones">
              <Link className='nav-link active' aria-current='page' to='/category/pantalones'> Pantalones</Link> 
            </Nav.Link>
            
            <Link class="nav-link" to="/cart">
              <CartWidget class="cart-icon" />
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>  
  )
}  

export default NavBar