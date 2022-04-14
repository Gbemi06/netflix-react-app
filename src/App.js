import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavBar from "./components/MyNavBar";
import "./styles/search.css";
import "./styles/navbar.css";
import "./styles/artist.css";
import "./styles/album.css";
import { Col, Row } from "react-bootstrap";
import HomePageList from "./components/HomePageList";
import MySidebar from "./components/MySidebar";
import MyFooter from "./components/MyFooter";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Row>
          <Col md={2}>
            <MySidebar />
          </Col>
          <Col md={10}>
            <Routes>
              <Route path="/" element={<HomePageList />} />
            </Routes>
            <MyFooter />
          </Col>
        </Row>
      </BrowserRouter>
    </>
  );
}

export default App;
