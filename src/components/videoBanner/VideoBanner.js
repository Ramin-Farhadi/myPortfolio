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
        src={require("./pexels-mart-production-7565462-2048x1080-25fps.mp4")}
        autoPlay
        loop
        muted
      />
    </div>
  );
};

export default VideoBanner;
