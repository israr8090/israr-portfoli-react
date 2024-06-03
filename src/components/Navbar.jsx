import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarHeader() {
    return (
        <>
            <div className="fixed-top" data-aos="fade-down" data-aos-duration="1000" >
                <Navbar collapseOnSelect expand="lg" className=" px-4 bg-black" bg="dark" data-bs-theme="dark"  >
                     <Navbar.Brand href="#home" className="port">PORTFOLIO</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <ul className="nav nav-underline">
                                    <li className="nav-item">
                                        <Nav.Link className="nav-link" aria-current="page" href="#home">Home</Nav.Link>
                                    </li>
                                    <li className="nav-item">
                                        <Nav.Link className="nav-link" href="#experience">Experience</Nav.Link>
                                    </li>
                                    <li className="nav-item">
                                        <Nav.Link className="nav-link" href="#skills">Skills</Nav.Link>
                                    </li>
                                    <li className="nav-item">
                                        <Nav.Link className="nav-link" href="#projects">Projects</Nav.Link>
                                    </li>
                                    <li className="nav-item">
                                        <Nav.Link className="nav-link" href="#contact">Contact</Nav.Link>
                                    </li>
                                </ul>
                            </Nav>
                        </Navbar.Collapse>
                </Navbar>
            </div>
        </>
    );
}

export default NavbarHeader;