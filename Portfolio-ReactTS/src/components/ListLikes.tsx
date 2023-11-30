import { useState } from "react";
import {
  Accordion,
  Badge,
  Button,
  Col,
  ListGroup,
  Modal,
  Row,
} from "react-bootstrap";
import { ThemeContext } from "./ThemeProvider";
import { useContext } from "react";

function Likes() {
  const themeContext = useContext(ThemeContext);

  return (
    <>
      <Accordion defaultActiveKey="0" className="">
        <Accordion.Item eventKey="0">
          <Accordion.Header className="">
            Honkai Impact 3rd
            <Badge pill bg="primary" className="mx-2 align-baseline">
              Link
            </Badge>
          </Accordion.Header>
          <Accordion.Body className="">
            <Button
              variant={themeContext?.theme}
              className="d-block justify-content-center"
              href="https://honkaiimpact3.hoyoverse.com/global/en-us/home"
            >
              MiHoYo : Hi3
            </Button>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header className="">
            Honkai: Star Rail
            <Badge pill bg="primary" className="mx-2 align-baseline">
              Link
            </Badge>
          </Accordion.Header>
          <Accordion.Body className="">
            <Button
              variant={themeContext?.theme}
              className="d-block justify-content-center"
              href="https://hsr.hoyoverse.com/en-us/"
            >
              MiHoYo : Star Rail
            </Button>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header className="">
            Minecraft
            <Badge pill bg="primary" className="mx-2 align-baseline">
              Link
            </Badge>
          </Accordion.Header>
          <Accordion.Body className="">
            <Button
              variant={themeContext?.theme}
              className="d-block justify-content-center"
              href="https://www.minecraft.net"
            >
              Minecraft.net
            </Button>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header className="">
            Psychological Horror{" "}
            <Badge pill bg="dark" className="mx-2 align-baseline">
              in-page
            </Badge>
          </Accordion.Header>
          <Accordion.Body className="">
            <p>
              Shows that fall into the genre of psychological horror or the like
              are typically well thought out, have an enjoyable story and said
              story is typically told in a way that leave almost everything to
              the imagination of the watcher - notable titles include:
              <b>Elfen Lied</b>, <b>Neon Genesis: Evangelion</b>,{" "}
              <b>Serial Experiments: Lain</b>, <b>Blood C</b>, <b>Another</b>{" "}
              and countless title inspired or created by <b>Junji Ito</b>. This
              genre extends further outside the scope of show having an entire
              sub-genre in gaming and fiction as a whole; notable titles would
              include:
              <b>No Longer Human(Dazai Osamu)</b>,{" "}
              <b>I Have No Mouth, and I Must Scream (Harlan Ellison)</b> and{" "}
              <b>Crime and Punishment (Fyodor Dostoevsky)</b>.
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header className="">
            Ultrakill
            <Badge pill bg="primary" className="mx-2 align-baseline">
              link
            </Badge>
          </Accordion.Header>
          <Accordion.Body className="">
            <Button
              variant={themeContext?.theme}
              className="d-block justify-content-center"
              href="https://store.steampowered.com/app/1229490/ULTRAKILL/"
            >
              Steam Page
            </Button>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header className="">
            Valve Games
            <Badge pill bg="primary" className="mx-2 align-baseline">
              link
            </Badge>
          </Accordion.Header>
          <Accordion.Body className="">
            <Button
              variant={themeContext?.theme}
              className="d-block justify-content-center"
              href="https://www.valvesoftware.com/en/"
            >
              VALVe
            </Button>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6">
          <Accordion.Header className="">
            Coding/ Programming
            <Badge pill bg="dark" className="mx-2 align-baseline">
              in-page
            </Badge>
          </Accordion.Header>
          <Accordion.Body className="">
            <p>
              Python is a very fun language to code in, its a very consice
              language that is linear in how it runs from top to bottom (unless
              told otherwise).
              <br />
              <br />
              C# on the other hand is fun in a different regard, its ease of use
              and accessiblity to design tools make it a language that is
              interesting to mess around with.
              <br />
              <br />
              ReactTS; I enjoy this form of web development because of how fast
              and simple it is to create re-useable components to be placed
              throughout a site, its in fact how I made this Portfolio site.
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="7">
          <Accordion.Header className="">
            Dungeons and Dragons
            <Badge pill bg="dark" className="mx-2 align-baseline">
              in-page
            </Badge>
          </Accordion.Header>
          <Accordion.Body className=""></Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="8">
          <Accordion.Header className="">
            History, Folklore and Myths
            <Badge pill bg="dark" className="mx-2 align-baseline">
              in-page
            </Badge>
          </Accordion.Header>
          <Accordion.Body className=""></Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="9">
          <Accordion.Header className="">
            Music
            <Badge pill bg="dark" className="mx-2 align-baseline">
              in-page
            </Badge>
          </Accordion.Header>
          <Accordion.Body className=""></Accordion.Body>
        </Accordion.Item>
      </Accordion>
      {/*
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
              */}
    </>
  );
}
export default Likes;
