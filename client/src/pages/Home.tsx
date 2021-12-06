import React, { ReactElement, useEffect, useState } from "react";
import axios from "axios";
import { JobPosting } from "../types/types";
import { JobListItem } from "../components/JobListItem/JobListItem";

interface Props {}

export const Home = (props: Props): ReactElement => {
  const [jobPostings, setJobPostings] = useState<JobPosting[]>([]);

  useEffect(() => {
    axios.get("http://localhost:8080/").then((response) => {
      setJobPostings(response.data);
    });
  }, []);
  return (
    <>
      {jobPostings.map((jobPosting) => {
        return <JobListItem key={jobPosting.id} jobPosting={jobPosting} />;
      })}
    </>
  );
};
