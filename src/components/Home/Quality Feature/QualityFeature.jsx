import React from "react";

const tutorials = [
  {
    title: "How to work with prototype design with adobe xd featuring tools",
    comments: 22,
    image: "/card images/image1.jpg",
  },
  {
    title: "Create multiple artboard by using figma prototyping development",
    comments: 15,
    image: "/card images/image2.jpg",
  },
  {
    title: "Convert your web layout theming easily with sketch zeplin extension",
    comments: 18,
    image: "/card images/image3.jpg",
  },
];

const QualityFeature = () => {
  return (
    <section id="aboutUs" className="pt-16 pb-20 bg-gray-50 ">
      <div className="max-w-7xl  text-center mx-auto 2xl:max-w-8/12 md:w-9/12 px-4">
        <h3 className="text-sm text-purple-600 font-medium mb-2">Quality Features</h3>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">
          Tutorials that people love most
        </h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {tutorials.map((tutorial, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl overflow-hidden text-left"
            >
              <img
                src={tutorial.image}
                alt="Tutorial Thumbnail"
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {tutorial.title}
                </h3>
                <div className="text-sm text-gray-500 flex items-center">
                  <svg
                    className="w-5 h-5 mr-1 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8a2 2 0 012-2h2m2-4h6m-6 0a2 2 0 00-2 2v2h10V6a2 2 0 00-2-2m-6 0h6"
                    />
                  </svg>
                  {tutorial.comments} Comments
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualityFeature;
