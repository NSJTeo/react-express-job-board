import React, { ReactElement } from "react";
import { JobPosting } from "../../types/types";

interface Props {
  jobPosting: JobPosting;
}

export const JobListItem = ({ jobPosting }: Props): ReactElement => {
  console.log(jobPosting);
  return (
    <div>
      <img src={`http://localhost:8080` + jobPosting.logo.slice(1)} alt="" />
    </div>
  );
};
