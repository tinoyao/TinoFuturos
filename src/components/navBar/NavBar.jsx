import { Navbar, Nav, Container } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"
import s from './NavBar.module.css'

const NavBarExample = () => {
    return(
       <>    
       <Navbar className={s.navBg} variant="dark" expand="lg">
        <Container>
            <Navbar.Brand as={Link} to="/" >
                <img
                    alt=""
                    src="/logo_anana2.png"
                    width="100"
                    height="40"
                    className="d-inline-block align-top"
                    />{' '}
                    {/* Anana Tech Solutions */}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/" >Inicio</Nav.Link>
                <Nav.Link as={Link} to="/about">Nosotros</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>                
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>  

        <section>
            <Outlet></Outlet>
        </section> 
       </> 
    )
}
export default NavBarExample