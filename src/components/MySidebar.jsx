import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const MySidebar = () => {
  return (
    <Col md={2}>
      <div className="sidebar">
        <div className="logo">
          <Link to={"/index.html"}>
            <img
              className="logo-img"
              src="./assets/images/Spotify_Logo_RGB_White.png"
              alt="Spotify-logo"
            />
          </Link>
        </div>

        <div className="sidebar-items mb-4">
          <div className="home-btn sidebar-button d-flex">
            <div className="sidebar-img">
              <i className="fa-solid fa-house"></i>
            </div>
            <Link to={"./index.html"}>
              <span className="sidebar-span-text">Home</span>
            </Link>
          </div>

          <div className="search-btn sidebar-button d-flex">
            <div className="sidebar-img">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <Link to={"/search.html"}>
              <span className="sidebar-span-text">Search</span>
            </Link>
          </div>
          <div className="your-liblary-btn sidebar-button d-flex">
            <div className="sidebar-img">||\</div>
            <span className="sidebar-span-text">Your Library</span>
          </div>
        </div>

        <div className="sidebar-items mb-2">
          <div className="sidebar-item sidebar-button d-flex">
            <div className="sidebar-img bg-grey">
              <i className="fa-solid fa-plus "></i>
            </div>
            <div className="sidebar-text">Create Playlist</div>
          </div>
          <div className="sidebar-item sidebar-button d-flex">
            <div className="sidebar-img bg-linear">
              <i className="fa-solid fa-heart"></i>
            </div>
            <div className="sidebar-text">Liked Songs</div>
          </div>
        </div>

        <div className="sidebar-music-lists">
          <Link to={"/search.html"} className="sidebar-a">
            <p className="sidebar-p">Funky Heavy Bluesy</p>
          </Link>
        </div>
        <div className="install-text">
          <i className="fa-solid fa-circle-arrow-down mr-1"></i>Install App
        </div>
      </div>
    </Col>
  );
};

export default MySidebar;
