import React, { useState } from 'react';
import thumbnail from '../../assets/Images/LAkids-1.jpg'; // Adjust the path if necessary

const VideoComponent = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoUrl = 'https://www.youtube.com/embed/your-video-id'; // Replace with your YouTube video URL

  const handlePlayButton = () => {
    setIsPlaying(true);
  };

  return (
    <div className="relative w-full ">
      {isPlaying ? (
        <iframe
          className="w-full h-64 md:h-96"
          src={videoUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <div className="relative cursor-pointer" onClick={handlePlayButton}>
          <img className="w-full h-64 md:h-96 object-cover object-center p-5" src={thumbnail} alt="Video Thumbnail" />
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              width="88"
              height="58"
              viewBox="0 0 68 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="fill-current text-white opacity-90 "
                d="M66.52 7.439c-0.786-3.023-3.092-5.396-6.074-6.074-5.366-1.423-26.892-1.423-26.892-1.423s-21.526 0-26.892 1.423c-3.023 0.786-5.396 3.092-6.074 6.074-1.423 5.366-1.423 16.561-1.423 16.561s0 11.195 1.423 16.561c0.786 3.023 3.092 5.396 6.074 6.074 5.366 1.423 26.892 1.423 26.892 1.423s21.526 0 26.892-1.423c3.023-0.786 5.396-3.092 6.074-6.074 1.423-5.366 1.423-16.561 1.423-16.561s0-11.195-1.423-16.561zM27 34v-20l17 10-17 10z"
                fill="#fff"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoComponent;
