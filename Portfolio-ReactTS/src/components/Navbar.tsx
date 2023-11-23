import { Navbar, Container, Nav } from "react-bootstrap";
import Space6 from "../assets/Portfolio Images/Space6.png";
import { getTheme, switchTheme } from "../functions/ThemeSwitch";

function NavBar() {
  return (
    <>
      <Navbar data-bs-theme="dark" className={getTheme()}>
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
          <Nav>
            <Nav.Link onClick={() => switchTheme()}>PlaceholderText</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default NavBar;


//