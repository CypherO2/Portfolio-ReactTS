import { Badge, Col, ListGroup, Row } from "react-bootstrap";

function Likes() {
  const alertShows = () => {
    alert(
      "Shows like this typically fall into the genre of psychological horror or the like. They typically have a very well thought out story and said story is typically told in a way that leave almost everything to the imagination of the watcher - notable titles include: Elfen Lied, Neon Genesis: Evangelion, Serial Experiments: Lain, Blood C, Another and countless title inspired or created by Junji Ito. "
    );
  };

  return (
    <>
      <ListGroup>
        <ListGroup.Item href="" variant="dark">
          <Row>
            <Col>Honkai Impact 3rd</Col>
            <Col xs={2}>
              <Badge pill bg="success" className="mx-2 align-baseline">
                Link
              </Badge>
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item href="" variant="dark">
          <Row>
            <Col>Honkai: Star Rail</Col>
            <Col xs={2}>
              <Badge pill bg="success" className="mx-2 align-baseline">
                Link
              </Badge>
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item href="" variant="dark">
          <Row>
            <Col>Minecraft Java Edition</Col>
            <Col xs={2}>
              <Badge pill bg="success" className="mx-2 align-baseline">
                Link
              </Badge>
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item variant="dark">
          <Row>
            <Col>Modded Minecraft</Col>
            <Col xs={2}>
              <Badge pill bg="primary" className="mx-2 align-baseline">
                In-Page
              </Badge>
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item action onClick={alertShows} variant="dark">
          <Row>
            <Col>Indepth / Comprehensive Shows</Col>
            <Col xs={2}>
              <Badge pill bg="primary" className="mx-2 align-baseline">
                In-Page
              </Badge>
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item
          href="https://store.steampowered.com/app/1229490/ULTRAKILL/"
          variant="dark"
        >
          <Row>
            <Col>Ultrakill</Col>
            <Col xs={2}>
              <Badge pill bg="success" className="mx-2 align-baseline">
                Link
              </Badge>
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item
          href="https://store.steampowered.com/franchise/Half-Life"
          variant="dark"
        >
          <Row>
            <Col>Half-life 1 & 2 + all DLC</Col>
            <Col xs={2}>
              <Badge pill bg="success" className="mx-2 align-baseline">
                Link
              </Badge>
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item
          href="https://store.steampowered.com/app/400/Portal/"
          variant="dark"
        >
          <Row>
            <Col>Portal 1 & 2</Col>
            <Col xs={2}>
              <Badge pill bg="success" className="mx-2 align-baseline">
                Link
              </Badge>
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item variant="dark">
          <Row>
            <Col>Python Coding</Col>
            <Col xs={2}>
              <Badge pill bg="primary" className="mx-2 align-baseline">
                In-Page
              </Badge>
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item variant="dark">
          <Row>
            <Col>Web Development</Col>
            <Col xs={2}>
              <Badge pill bg="primary" className="mx-2 align-baseline">
                In-Page
              </Badge>
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item variant="dark">
          <Row>
            <Col>Music</Col>
            <Col xs={2}>
              <Badge pill bg="primary" className="mx-2 align-baseline">
                In-Page
              </Badge>
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item href="" variant="dark">
          <Row>
            <Col>Dungeons and Dragons</Col>
            <Col xs={2}>
              <Badge pill bg="success" className="mx-2 align-baseline">
                Link
              </Badge>
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item variant="dark">
          <Row>
            <Col>Story Writing</Col>
            <Col xs={2}>
              <Badge pill bg="primary" className="mx-2 align-baseline">
                In-Page
              </Badge>
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item variant="dark">
          <Row>
            <Col>History, Folk Lore and Myths/ Legends</Col>
            <Col xs={2}>
              <Badge pill bg="primary" className="mx-2 align-baseline">
                In-Page
              </Badge>
            </Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
}
export default Likes;
