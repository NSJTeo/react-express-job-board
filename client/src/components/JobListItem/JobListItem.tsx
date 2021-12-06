import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { JobPosting } from "../../types/types";

interface Props {
  jobPosting: JobPosting;
}

export const JobListItem = ({ jobPosting }: Props): ReactElement => {
  console.log(jobPosting);
  return (
    <li>
      <Link to={`/job/` + jobPosting.id}>
        <img src={`http://localhost:8080` + jobPosting.logo.slice(1)} alt="" />
        <p>{jobPosting.postedAt}</p>
        <p>{jobPosting.contract}</p>
        <p>{jobPosting.position}</p>
        <p>{jobPosting.company}</p>
        <p>{jobPosting.location}</p>
      </Link>
    </li>
  );
};
