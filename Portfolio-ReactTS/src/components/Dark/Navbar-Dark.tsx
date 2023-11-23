import { Navbar, Container, Nav } from "react-bootstrap";
import Space6 from "../../assets/Portfolio Images/Space6.png";
import "./Navbar-Dark.css";

function NavbarDark() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className="test">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={Space6}
              width="30"
              height="30"
              className="d-inline-block align-top rounded"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default NavbarDark;
