import React, { ReactElement, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { JobPosting } from "../../types/types";
import axios from "axios";
import { CompanyInfo } from "../../components/CompanyInfo/CompanyInfo";
import "./Details.scss";

export const Details = (): ReactElement => {
  const [jobDetails, setJobDetails] = useState<JobPosting>();

  const params = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8080/jobs/` + params.jobID).then((response) => {
      setJobDetails(response.data);
    });
  }, []);

  if (!jobDetails) {
    return <></>;
  }

  return (
    <main className="details">
      <CompanyInfo jobDetails={jobDetails} />
      <div className="details__job-info-container">
        <div className="details__date-contract-container">
          <p>{jobDetails.postedAt}</p>
          <div className="details__date-contract-dot"></div>
          <p>{jobDetails.contract}</p>
        </div>
        <h1 className="details__position">{jobDetails.position}</h1>
        <p className="details__location">{jobDetails.location}</p>
        <a
          href={jobDetails.website + "/apply"}
          className="details__apply-now-link"
        >
          Apply Now
        </a>
        <p className="details__description">{jobDetails.description}</p>
        <h2 className="details__requirements-title">Requirements</h2>
        <p className="details__requirements">
          {jobDetails.requirements.content}
        </p>
        <ul>
          {jobDetails.requirements.items.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
        <h2>What You Will Do</h2>
        <p>{jobDetails.role.content}</p>
        <ul>
          {jobDetails.role.items.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
      <a href={jobDetails.website + "/apply"}>Apply Now</a>
    </main>
  );
};
