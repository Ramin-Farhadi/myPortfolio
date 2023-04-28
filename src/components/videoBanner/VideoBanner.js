import "./videobanner.css";

const VideoBanner = () => {
  return (
    <div
      className="vidContainer"
      style={{
        width: "100%",
        height: "500px",
        position: "absolute",
        overflow: "hidden",
      }}
    >
      <video
        className="vid"
        style={{ width: "100%", objectFit: "cover" }}
        src={require("./videobanner.mp4")}
        autoPlay
        loop
        muted
      />
    </div>
  );
};

export default VideoBanner;
