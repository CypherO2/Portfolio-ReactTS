import Carousel from "react-bootstrap/Carousel";
import Space5 from "../assets/Portfolio Images/Space5.png";
import ArtProj from "../assets/Portfolio Images/ArtFP.png";
import GemSword from "../assets/Portfolio Images/CrystalSword.png";

function ImgCarousel() {
  return (
    <Carousel data-bs-theme="light" className="">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Space5}
          alt="First slide"
          width={300}
          height={530}
        />
        <Carousel.Caption className="text-light">
          <h5>Space Image No.5</h5>
          <p>One of the many pieces I have created featuring space - one of my favourite subjects.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ArtProj}
          alt="Second slide"
          width={300}
          height={530}
        />
        <Carousel.Caption className="text-light">
          <h5>Demon Slayer: Mixed Media Piece</h5>
          <p>A piece I made in my final year of High School as a Final Project.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={GemSword}
          alt="Third slide"
          width={300}
          height={530}
        />
        <Carousel.Caption className="text-light">
          <h5>A Blade of Auircryst</h5>
          <p>
            A fictional crystaline material I had made for a story.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImgCarousel;
