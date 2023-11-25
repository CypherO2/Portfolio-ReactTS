import { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Portrait from "../assets/Portfolio Images/PortraitImage.png";
import Portrait2 from "../assets/Portfolio Images/PortraitImage2.png";
import Skills from "../components/SkillList";
import CarouselComp from "../components/HomeCarousel";

function HomePage() {
  useEffect(() => {
    document.title = "Portfolio - Home";
  });
  return (
    <>
      <Row className="mt-5 pt5"></Row>
      <Row className="">
        <Col className="border-bottom border-dark mb-1">
          <h1>
            <b>Hello, I am CJ</b>
          </h1>
          <h6 className="text-muted">
            I am an aspiring React, TypeScript and Python Developer and Artist.
          </h6>
        </Col>
        <Col className="mb-1" xs={3}>
          <img src={Portrait} alt="" className="rounded" width="100px" />
        </Col>
      </Row>
      <Row className="mb-2 pb-2 pt-3">
        <Col>
          <img
            src={Portrait2}
            alt=""
            className="fluid rounded"
            width="90%"
            height={450}
          />
          <p className=""></p>
        </Col>
        <Col className="" xs={7}>
          <h3 className="text-left">My Skills Include:</h3>
          <Skills />
        </Col>
      </Row>
      <Row className="">
        <Col className="m-4 pb-5">
          <CarouselComp />
        </Col>
      </Row>
    </>
  );
}
export default HomePage;
