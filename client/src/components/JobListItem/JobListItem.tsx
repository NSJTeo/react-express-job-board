import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { JobPosting } from "../../types/types";
import "./JobListItem.scss";

interface Props {
  jobPosting: JobPosting;
}

export const JobListItem = ({ jobPosting }: Props): ReactElement => {
  console.log(jobPosting);
  return (
    <li className="job-list-item__container">
      <div className="job-list-item__banner-container">
        <div className="job-list-item__banner job-list-item__banner"></div>
        <div
          className="job-list-item__logo-container"
          style={{ backgroundColor: jobPosting.logoBackground }}
        >
          <img
            src={`http://localhost:8080` + jobPosting.logo.slice(1)}
            alt=""
            className="job-list-item__logo"
          />
        </div>
        <div className="job-list-item__banner"></div>
      </div>
      <div className="job-list-item__info-container">
        <div className="job-list-item__info-job-container">
          <div className="job-list-item__time-contract-container">
            <p>{jobPosting.postedAt}</p>
            <p className="job-list-item__time-contract-dot">&bull;</p>
            <p>{jobPosting.contract}</p>
          </div>
          <Link to={`/job/` + jobPosting.id}>{jobPosting.position}</Link>
        </div>
        <div className="job-list-item__company-location-container">
          <p className="job-list-item__company">{jobPosting.company}</p>
          <p className="job-list-item__location">{jobPosting.location}</p>
        </div>
      </div>
    </li>
  );
};
