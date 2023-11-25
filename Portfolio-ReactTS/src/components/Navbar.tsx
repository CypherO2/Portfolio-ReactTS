import { Navbar, Container, Nav } from "react-bootstrap";
import Logo from "../assets/Portfolio Images/Space6.png";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className="sticky-top">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top rounded"
              alt="Logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/art">Art</Nav.Link>
            <Nav.Link href="/photos">Photography</Nav.Link>
            <Nav.Link href="/videos">Videography</Nav.Link>
            <Nav.Link href="/games">Games</Nav.Link>
            <Nav.Link href="/other">Other</Nav.Link>
          </Nav>
          {/* <Nav>
            <Nav.Link>Color Mode</Nav.Link>
          </Nav> */}
        </Container>
      </Navbar>
    </>
  );
}
export default NavBar;

//
