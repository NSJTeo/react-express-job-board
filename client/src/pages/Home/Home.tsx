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
    <main className="home">
      <div className="home__filter-container">
        <form className="home__form">
          <input
            placeholder="Filter by title..."
            className="home__title-input"
          />
          <div className="home__filter-icon-button-container">
            <img
              src="http://localhost:8080/assets/icons/icon-filter.svg"
              alt=""
            />
            <button className="home__search-button">
              <img
                src="http://localhost:8080/assets/icons/icon-search-mobile.svg"
                alt=""
                className="home__search-icon"
              />
            </button>
          </div>
        </form>
      </div>
      <ul className="home__job-list">
        {jobPostings.map((jobPosting) => {
          return <JobListItem key={jobPosting.id} jobPosting={jobPosting} />;
        })}
      </ul>
    </main>
  );
};
