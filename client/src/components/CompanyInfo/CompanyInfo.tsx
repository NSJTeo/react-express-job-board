import React from "react";
import { JobPosting } from "../../types/types";

interface Props {
  jobDetails: JobPosting;
}

export const CompanyInfo = ({ jobDetails }: Props) => {
  return (
    <>
      <img src={`http://localhost:8080` + jobDetails.logo.slice(1)} alt="" />
      <p>{jobDetails.company}</p>
      <p>{jobDetails.website.slice(20) + ".com"}</p>
      <a href={jobDetails.website}>Company Site</a>
    </>
  );
};
