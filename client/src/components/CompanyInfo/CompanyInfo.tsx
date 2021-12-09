import React from "react";
import { JobPosting } from "../../types/types";
import "./CompanyInfo.scss";

interface Props {
  jobDetails: JobPosting;
}

export const CompanyInfo = ({ jobDetails }: Props) => {
  return (
    <>
      <div className="company-info__container">
        <img
          src={`http://localhost:8080` + jobDetails.logo.slice(1)}
          alt=""
          className="company-info__logo"
        />
        <p className="company-info__name">{jobDetails.company}</p>
        <p className="company-info__website">
          {jobDetails.website.slice(20) + ".com"}
        </p>
        <a href={jobDetails.website} className="company-info__link">
          Company Site
        </a>
      </div>
    </>
  );
};
