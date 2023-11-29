import HomePage from "./pages/home";
import ErrorPage from "./pages/404page";
import ArtPage from "./pages/art";
import GamesPage from "./pages/games";
import OtherPage from "./pages/other";
import PhotoPage from "./pages/photos";
import VideoPage from "./pages/videos";
import NavBar from "./components/Navbar";
import FooterComp from "./components/Footer";
import ThemeProvider from "./components/ThemeProvider";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import {
  INDEX_PATH,
  ART_PATH,
  PHOTO_PATH,
  VIDEOS_PATH,
  GAMES_PATH,
  OTHER_PATH,
  NOT_FOUND_PATH,
} from "./constants/paths";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <ThemeProvider>
        <NavBar />
        <Container>
          <Routes>
            <Route path={INDEX_PATH} element={<HomePage />} />
            <Route path={ART_PATH} element={<ArtPage />} />
            <Route path={PHOTO_PATH} element={<PhotoPage />} />
            <Route path={VIDEOS_PATH} element={<VideoPage />} />
            <Route path={GAMES_PATH} element={<GamesPage />} />
            <Route path={OTHER_PATH} element={<OtherPage />} />
            <Route path={NOT_FOUND_PATH} element={<ErrorPage />} />
          </Routes>
        </Container>
        <FooterComp />
      </ThemeProvider>
    </>
  );
}

export default App;
