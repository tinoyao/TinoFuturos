import { Navbar, Nav, Container } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"
import s from './NavBar.module.css'

const NavBarExample = () => {
    return(
       <>    
       <Navbar className={s.navBg} fixed="top" variant="dark" expand="lg">
        <Container>
            <Navbar.Brand as={Link} to="/" >
                <img
                    alt=""
                    src="/logo_original.png"
                    width="180"
                    height="90"
                    className="d-inline-block align-top"
                    />{' '}
                    {/* Anana Tech Solutions */}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end flex-grow-1 pe-3">
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