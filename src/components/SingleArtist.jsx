import { Link } from "react-router-dom";

const SingleArtist = ({ result }) => {
  return (
    <>
      <div className="large-boxes">
        {console.log(result)}
        <Link to={"/artist"}>
          <div className="large-boxes_box">
            <img
              className="box-img"
              src={result.album.cover}
              alt="soul album"
            />
          </div>

          <div className="large-boxes_box-title">{result.artist.name}</div>
          <div className="large-boxes_box-title-description">
            {result.album.title}
          </div>
        </Link>
      </div>
    </>
  );
};

export default SingleArtist;
