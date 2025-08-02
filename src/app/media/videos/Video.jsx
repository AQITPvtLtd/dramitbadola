import React from 'react';

const Video = () => {
  return (
    <div className="min-h-screen mt-[150px] lg:px-4">
      {/* Main Title */}
      <h1
        className="text-4xl text-center font-bold text-black mb-4"
        style={{ fontFamily: "Roboto Slab, serif" }}
      >
        Our Videos
      </h1>

      {/* Short Videos Section */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center text-[#00303f]">Short Videos</h2>

        <div className="flex justify-center">
          <iframe
            className="rounded-xl shadow-md aspect-square w-[250px] sm:w-[300px] md:w-[360px]"
            src="https://www.youtube.com/embed/ySW40xF91qA"
            title="Short 1"
            frameBorder="0"
            allow="accelerometer; autoplay;"
            allowFullScreen
          ></iframe>
        </div>
      </div>


      {/* Long Videos Section */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center text-[#00303f] mt-10">Long Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6  px-10 pb-5">
          {/* Facebook Video */}
          <iframe
            className="rounded-xl shadow-md aspect-video w-full"
            src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FOhoRadioUttarakhand%2Fvideos%2F1301672544708681%2F&show_text=false&t=0"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
            allowFullScreen
          ></iframe>

          {/* YouTube Long Video */}
          <iframe
            className="rounded-xl shadow-md aspect-video w-full"
            src="https://www.youtube.com/embed/UUHLkayk1zI"
            title="YouTube Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Video;
