import React from "react";

const skill = ({ jobSkills }) => {
  return (
    <div className="flex flex-wrap justify-center items-center space-x-2  mt-2">
      {console.log(jobSkills)}
      {jobSkills.map((skill) => (
        <div
          key={skill}
          className="p-2 font-medium my-1 text-sm rounded-lg bg-gray-100"
        >
          {skill}
        </div>
      ))}
    </div>
  );
};

export default skill;
