import { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
// import Logo from "../assets/Portfolio Images/Space6.png";

function ErrorPage() {
  useEffect(() => {
    document.title = "Portfolio - Error";
  });
  return (
    <>
      <Row className="pt-5"></Row>
      <Row className="pt-5">
        <Col className="pb-5 mb-5"></Col>
        <Col>
          <h1 className="text-center fs-1">
            <b>Error 404:</b>
          </h1>
          <h2 className="text-muted text-center">Page Not Found</h2>
        </Col>
        <Col className="pb-5 mb-5"></Col>
      </Row>
      <Row className="pb-5 mt-5"></Row>
      <Row className="pt-5 mt-5">
        <Col>
          <p className="text-light">.</p>
        </Col>
        <Col>
          <p className="text-center fs-1">
            <b>URL not found.</b>
          </p>
        </Col>
        <Col>
          <p className="text-light"> </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="text-light"> </p>
        </Col>
        <Col>
          <p className="text-center fs-4">
            About{" "}
            <a href="https://kb.iu.edu/d/bfrc">
              Common
              <br />
              HTML Errors.
            </a>
          </p>
        </Col>
        <Col>
          <p className="text-light"> </p>
        </Col>
      </Row>
      <Row className="p-5 m-5"></Row>
      <Row className="p-5 m-5"></Row>
    </>
  );
}
export default ErrorPage;
