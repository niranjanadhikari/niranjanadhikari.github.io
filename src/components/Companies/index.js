import React from "react";
import { Link } from "gatsby";
import Title from "../Title";

import blankCompany from "../../images/blankCompany.svg";
import { jobExperience } from "../../data";

const index = () => {
  return (
    <div className="py-16">
      <Title title="Companies I've worked for" />
      <div className="mt-10">
        <div className="grid md:grid-cols-3 gap-4">
          {jobExperience.map(
            ({
              id,
              role,
              company,
              from,
              to,
              duration,
              type,
              companyLogo,
              companyWeb,
            }) => (
              <Link
                external
                to={companyWeb}
                key={id}
                target="_blank"
                className="shadow rounded-md p-4 hover:shadow-md"
              >
                {companyLogo ? (
                  <img
                    className="w-10 h-10 rounded-md mb-2"
                    src={companyLogo}
                    alt={`logo of ${company}`}
                  />
                ) : (
                  <img
                    className="w-10 h-10 rounded-md mb-2"
                    src={blankCompany}
                    alt="placeholder company"
                  />
                )}

                <p className="font-medium text-xl md:text-2xl">{role}</p>
                <p className="text-base text-gray-600">
                  {`${company} | ${type}`}
                </p>
                <p className="text-sm text-gray-400">
                  {`${from} - ${to} ⌛ ${duration}`}
                </p>
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default index;
