import React, { ReactElement, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { JobPosting } from "../types/types";
import axios from "axios";

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
    <>
      <p>{jobDetails.postedAt}</p>
      <p>{jobDetails.contract}</p>
      <h1>{jobDetails.position}</h1>
      <p>{jobDetails.location}</p>
      <button>Apply Now</button>
      <p>{jobDetails.description}</p>
      <h2>Requirements</h2>
      <p>{jobDetails.requirements.content}</p>
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
      <button>Apply Now</button>
    </>
  );
};
