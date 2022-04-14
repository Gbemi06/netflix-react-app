const MyFooter = () => {
  return (
    <footer>
      <div className="music-player mt-4">
        <div className="song-bar">
          <div className="song-infos">
            <div className="image-container">
              <img
                src="https://upload.wikimedia.org/wikipedia/pt/thumb/3/30/Michael_Jackson_-_Thriller.jpg/220px-Michael_Jackson_-_Thriller.jpg"
                alt="Michael Jackson album cover"
              />
            </div>
            <div className="song-description">
              <p className="title">Thriller</p>
              <p className="artist">Michael Jackson</p>
            </div>
          </div>
          <div className="icons">
            <i className="far fa-heart"></i>
            <i className="fas fa-compress"></i>
          </div>
        </div>
        <div className="progress-controller">
          <div className="control-buttons">
            <i className="fas fa-random"></i>
            <i onClick="pause()" className="fas fa-step-backward"></i>
            <i onClick="play()" className="play-pause fas fa-play"></i>
            <i className="fas fa-step-forward"></i>
            <i className="fas fa-undo-alt"></i>
          </div>
          <div className="progress-container">
            <span>0:49</span>
            <div className="progress-bar">
              <div className="progress"></div>
            </div>
            <span>4:20</span>
          </div>
        </div>
        <div className="other-features">
          <i className="fas fa-list-ul"></i>
          <i className="fas fa-desktop"></i>
          <div className="volume-bar">
            <i className="fas fa-volume-down"></i>
            <div className="progress-bar">
              <div className="progress"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
