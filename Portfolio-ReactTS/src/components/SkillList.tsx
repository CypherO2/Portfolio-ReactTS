import ListGroup from "react-bootstrap/ListGroup";
import { ThemeContext } from "./ThemeProvider";
import { useContext } from "react";

function Skills() {
  const themeContext = useContext(ThemeContext);
  return (
    <ListGroup variant={themeContext?.theme}>
      <ListGroup.Item>React (using TypeScript)</ListGroup.Item>
      <ListGroup.Item>Web Development (HTML, CSS, Bootstrap)</ListGroup.Item>
      <ListGroup.Item>
        Python v3 (Pandas Library, Matplot Library, Database)
      </ListGroup.Item>
      <ListGroup.Item>SQLite3/ Database (Linking to Python)</ListGroup.Item>
      <ListGroup.Item>Digital Art</ListGroup.Item>
      <ListGroup.Item>Traditional Art</ListGroup.Item>
      <ListGroup.Item>Video Editing</ListGroup.Item>
      <ListGroup.Item>3D Design/ Modeling</ListGroup.Item>
      <ListGroup.Item>
        Content Creation (Youtube, Story Writing/ Telling, Streaming)
      </ListGroup.Item>
      <ListGroup.Item>Community Management</ListGroup.Item>
    </ListGroup>
  );
}

export default Skills;
