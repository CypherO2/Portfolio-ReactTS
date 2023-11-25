import { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Portrait from "../assets/Portfolio Images/PortraitImage.png";
import Portrait2 from "../assets/Portfolio Images/PortraitImage2.png";
import Skills from "../components/SkillList";
import CarouselComp from "../components/HomeCarousel";
import DiscordWidget from "../components/DiscServWidget";
import Likes from "../components/ListLikes";

function HomePage() {
  useEffect(() => {
    document.title = "Portfolio - Home";
  });
  return (
    <>
      <Row className="">
        <Col className="mb-4 pb-5">
          <CarouselComp />
        </Col>
      </Row>
      <Row className="">
        <Col className="border-bottom border-dark mb-1">
          <h1>
            <b>Hello, I am CJ</b>
          </h1>
          <h6 className="text-muted">
            I am an aspiring React, TypeScript and Python Developer and Artist.
          </h6>
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
      <Row className="pb-5">
        <Col className="">
          <h3 className="">My Likes Include: </h3>
          <Likes />
        </Col>
        <Col className="">
          <DiscordWidget />
        </Col>
      </Row>
    </>
  );
}
export default HomePage;
