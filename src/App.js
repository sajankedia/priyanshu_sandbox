import "./styles.css";

import { useState } from "react";

const video =
  "https://vz-c992896b-65e.b-cdn.net/deaf5837-50cd-4e59-855a-7fce80668b5b/playlist.m3u8";
export default function App() {
  const [displayImage, setDisplayImage] = useState(false);

  const handleDisplay = () => {
    setTimeout(() => {
      setDisplayImage(true);
    }, 10000);
  };

  const handleAdClick = () => {
    window.open("https://j.mp/3IDGsfB", "_blank");
    setDisplayImage(false);
  };

  return (
    <div className="App">
      <div className="center">
        <video width="800" controls onPlay={handleDisplay}>
          <source
            src={
              "https://vz-c992896b-65e.b-cdn.net/deaf5837-50cd-4e59-855a-7fce80668b5b/playlist.m3u8"
            }
            type="video/mp4"
          />
          Your browser does not support HTML video.
        </video>

        <div
          className="image"
          style={{ display: displayImage ? "block" : "none" }}
        >
          <img
            src="https://i.ibb.co/JjNsyft/one-removebg-preview.png"
            alt="ad_image"
            className="img"
            onClick={handleAdClick}
          />
        </div>
      </div>
    </div>
  );
}
