import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Box } from "@mui/system";
import "./videoItems.css";

const VideoItems = ({ items, videoIdHandler }) => {
  const generateId = (videoId) => {
    // console.log('item was clicked! video id is -> ',videoId)
    videoIdHandler(videoId);
  };

  return (
    <>
      {items &&
        items.map((item) => (
          <Grid2
            sx={{ cursor: "pointer" }}
            key={item.id.videoId}
            container
            spacing={3}
            onClick={() => generateId(item.id.videoId)}
          >
            <Grid2
              className="youtubethumbnail"
              sx={{ height: "140px" }}
              xs={12}
              lg={6}
            >
              <img
                height="100%"
                src={item.snippet.thumbnails.medium.url}
                alt="thumbnail"
              />
            </Grid2>
            <Grid2 xs={12} lg={6}>
              <Box sx={{ fontWeight: "500" }}>{item.snippet.title}</Box>
              <Box sx={{ pt: "5px", color: "gray" }}>
                {item.snippet.channelTitle}
              </Box>
            </Grid2>
          </Grid2>
        ))}
    </>
  );
};

export default VideoItems;
