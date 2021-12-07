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
      <Link to={`/job/` + jobPosting.id}>
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
        <div className="job-list-item__time-contract-container">
          <p>{jobPosting.postedAt}</p>
          <p>{jobPosting.contract}</p>
        </div>
        <h2>{jobPosting.position}</h2>
        <p>{jobPosting.company}</p>
        <p>{jobPosting.location}</p>
      </Link>
    </li>
  );
};
