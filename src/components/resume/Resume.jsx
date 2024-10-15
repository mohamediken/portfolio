import React from "react";

const Resume = () => {
  return (
    <div id="education" className="bg-green-200 py-10 flex justify-center">
      {/* Card Wrapper */}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 mx-auto grid grid-cols-1 gap-8">
        {/* Heading */}
        <div data-aos="fade-up" className="text-center mb-10 p-5 bg-green-200 rounded-lg shadow-lg">
  <h3 className="text-5xl font-extrabold text-gray-800 mb-2">Education</h3>
  <p className="text-sm text-gray-600 mt-2">My Academic Journey</p>
</div>


        <fieldset
          data-aos="zoom-in"
          className="w-full max-w-xl p-6 border border-gray-300 rounded-lg shadow-md bg-white mx-auto"
        >
          {/* Education Item 1 */}
          <div className="flex flex-col gap-2 p-4 border-b border-gray-200 text-center">
            <h1 className="text-xl font-semibold text-gray-900">
              Master in Data Science and Intelligent Systems
            </h1>
            <span className="text-sm font-medium text-gray-500">
              Mohammed First University Oujda
            </span>
            <span className="text-sm font-medium text-yellow-600">
              2022 – 2024
            </span>
          </div>

          {/* Education Item 2 */}
          <div className="flex flex-col gap-2 p-4 border-b border-gray-200 text-center">
            <h1 className="text-xl font-semibold text-gray-900">
              Bachelor's Degree in Mathematical Sciences and Computer Science (SMI)
            </h1>
            <span className="text-sm font-medium text-gray-500">
              Ibn Zohr University Agadir
            </span>
            <span className="text-sm font-medium text-yellow-600">
              2021 – 2022
            </span>
          </div>

          {/* Education Item 3 */}
          <div className="flex flex-col gap-2 p-4 border-b border-gray-200 text-center">
            <h1 className="text-xl font-semibold text-gray-900">
              Baccalauréat en Sciences physiques BIOF
            </h1>
            <span className="text-sm font-medium text-gray-500">
              Lycée Boumaln Dades
            </span>
            <span className="text-sm font-medium text-yellow-600">
              2018 – 2019
            </span>
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default Resume;
