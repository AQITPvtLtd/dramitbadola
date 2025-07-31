import React from 'react';

const Video = () => {
  return (
    <div className="bg-[#f2efef] min-h-screen mt-[150px] pb-20">
      {/* Banner */}
      <h1
        className="text-4xl md:text-6xl text-center font-bold text-black mb-10"
        style={{ fontFamily: "Roboto Slab, serif" }}
      >
        Our Videos
      </h1>

      {/* YouTube Short Embed */}
      <div className="flex justify-center">
        <div className="w-[250px] sm:w-[300px] md:w-[360px] aspect-[9/16]">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/ySW40xF91qA"
            title="YouTube Shorts"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Video;
