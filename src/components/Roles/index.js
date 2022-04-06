import React from "react";
import Title from "../../components/Title";

import Skill from "./skill";


import { jobRoles } from "../../data";

const index = () => {
  return (
    <div className="py-16">
      <Title title="My role so far" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 mt-12">
        {jobRoles.map((role) => {
          const { id, jobTitle, jobIcon, jobSkills } = role;
          return (
            <div key={id} className="text-center">
              <img
                src={jobIcon}
                className="w-20 h-20 object-contain d-block mx-auto mb-3"
                alt={`icon defining ${jobTitle}`}
              />
              <h3 className="font-medium text-2xl">{jobTitle}</h3>

              <Skill jobSkills={jobSkills} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default index;
