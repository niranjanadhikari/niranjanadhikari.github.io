import React from "react";
import { FaAward } from "react-icons/fa";
import { academics, certifications } from "../../data";

const index = () => {
  return (
    <div className="flex flex-col md:flex-row space-y-8 space-x-0 md:space-x-6 md:space-y-0 py-16">
      <div className="md:w-3/6">
        <h3 className="font-medium text-xl">Academics</h3>
        <div className="mt-5">
          {academics.map(({ id, course, duration, academy }) => (
            <div key={id} className="flex justify-between mb-2">
              <div>
                <p className="font-medium text-lg">{course}</p>
                <p className="text-gray-400">{academy}</p>
              </div>
              <p className="text-right flex-shrink-0">{duration}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="md:w-3/6 bg-gray-100 p-4 rounded-lg">
        <h3 className="font-medium text-xl">Certifications</h3>

        <div className="mt-5">
          {certifications
            .reverse()
            .slice(0, 4)
            .map(({ id, name, issuedFrom }) => (
              <div key={id} className="mb-2 flex items-baseline">
                <FaAward />
                <div className="ml-2">
                  <p className="font-medium text-lg">{name}</p>
                  <p className="text-gray-400">{issuedFrom}</p>
                </div>
              </div>
            ))}
          {certifications.length > 4 && (
            <a
              className="text-center text-blue-700"
              href="https://www.linkedin.com/in/niranjanadhikari2053/details/certifications/"
              target="_blank"
            >
              see {certifications.length - 4} more certificates
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default index;
