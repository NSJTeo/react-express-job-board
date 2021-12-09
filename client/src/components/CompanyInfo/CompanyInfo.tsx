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
        <div
          className="company-info__logo-container"
          style={{ backgroundColor: jobDetails.logoBackground }}
        >
          <img
            src={`http://localhost:8080` + jobDetails.logo.slice(1)}
            alt=""
            className="company-info__logo"
          />
        </div>
        <p className="company-info__name">{jobDetails.company}</p>
        <p className="company-info__website">
          {jobDetails.website.slice(20) + ".com"}
        </p>
        <div className="company-info__link-container">
          <a href={jobDetails.website} className="company-info__link">
            Company Site
          </a>
        </div>
      </div>
    </>
  );
};
