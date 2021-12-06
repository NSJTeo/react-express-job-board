import React, { ReactElement } from "react";
import { JobPosting } from "../../types/types";

interface Props {
  jobPosting: JobPosting;
}

export const JobListItem = ({ jobPosting }: Props): ReactElement => {
  console.log(jobPosting);
  return <div></div>;
};
