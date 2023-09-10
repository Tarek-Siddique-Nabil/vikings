import React, { useState, useEffect } from "react";
const VideoBackground = ({ videoSrc }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const videoElement = document.getElementById("backgroundVideo");

    // Listen for the video's "loadedmetadata" event
    videoElement.addEventListener("loadedmetadata", () => {
      // Once the video metadata is loaded, set the state to true
      setVideoLoaded(true);
    });

    return () => {
      // Clean up event listener when the component unmounts
      videoElement.removeEventListener("loadedmetadata", () => {});
    };
  }, []);

  return (
    <div className="w-full h-screen relative">
      <video
        id="backgroundVideo"
        className={`absolute top-0 left-0 w-full h-full object-cover ${
          videoLoaded ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000`}
        autoPlay
        loop
        muted
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {videoLoaded ? null : (
        <div className="absolute top-0 left-0 w-full h-full bg-black"></div>
      )}
    </div>
  );
};

export default VideoBackground;
