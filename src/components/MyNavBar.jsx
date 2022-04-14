import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyNavBar = () => {
  return (
    <Col md={10}>
      <Row>
        <Col md={12}>
          <div className="main">
            <div className="navbar">
              <div className="header-navbar-arrows">
                <div className="header-navbar-arrows__left">
                  <i className="fa-solid fa-angle-left"></i>
                </div>
                <div className="header-navbar-arrows__right">
                  <i className="fa-solid fa-angle-right"></i>
                </div>
              </div>

              <div className="header-navbar-dropdown">
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn dropdown-button dropdown-toggle p-0"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      className="dropdown-image"
                      src="./assets/images/eminem.jpg"
                      alt="dropdown"
                    />
                    <span className="dropdown-text">John Trump</span>
                  </button>
                  <div className="dropdown-menu dropdown-menu-right bg-dark">
                    <Link to={"/album.html"} className="dropdown-item">
                      Album
                    </Link>
                    <Link to={"/artist.html"} className="dropdown-item">
                      Artist
                    </Link>
                    <Link to={"/login.html"} className="dropdown-item">
                      Log out
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Col>
  );
};
export default MyNavBar;
