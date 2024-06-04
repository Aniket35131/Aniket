import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-black text-white flex justify-center items-center h-screen">
      <div className="max-w-4xl flex flex-col md:flex-row bg-slate-800 rounded-lg overflow-hidden shadow-lg">
        <div className="basis-1/2">
          <div className="w-lg container mx-auto">
            <img className="w-50 h-96 mt-10 ml-10" src="images/left.png" />
            {/* Move this image inside the container div */}
            <div className="place-items-center hidden md:block">
              <img className="absolute ml-20 top-40 place-items-center h-80 w-80" src="images/Right.png" />
            </div>
          </div>
        </div>
        <div className="flex-1 p-8">
          <h2 className="text-3xl text-blue-500 mb-4">
            ABOUT <span className="text-white">US</span>
          </h2>
          <p className="text-lg mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
          <p className="text-sm text-gray-400 mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <button className="w-60 rounded-tl-lg rounded-br-lg custom-button bg-gray-800 border-2 border-blue-500 text-white py-2 px-4 text-lg transition duration-300 ease-in-out hover:bg-gray-700 hover:border-blue-700 focus:outline-none">
            Know More
          </button>
          {/* Show this image only for smaller screens */}
          <div className="place-items-center md:hidden">
            <img className="absolute ml-12 top-2 place-items-center h-60 w-60" src="images/Right.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
