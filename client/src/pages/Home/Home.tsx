import React, { ReactElement, useEffect, useState } from "react";
import axios from "axios";
import { JobPosting } from "../../types/types";
import { JobListItem } from "../../components/JobListItem/JobListItem";
import "./Home.scss";

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
      <div className="home__filter-container"></div>
      <ul className="home__job-list">
        {jobPostings.map((jobPosting) => {
          return <JobListItem key={jobPosting.id} jobPosting={jobPosting} />;
        })}
      </ul>
    </>
  );
};
