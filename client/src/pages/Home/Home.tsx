import React, { ReactElement, useEffect, useState } from "react";
import axios from "axios";
import { JobPosting } from "../../types/types";
import { JobListItem } from "../../components/JobListItem/JobListItem";
import "./Home.scss";

export const Home = (): ReactElement => {
  const [jobPostings, setJobPostings] = useState<JobPosting[]>([]);
  const [jobPostingsAmount, setJobPostingsAmount] = useState<number>(12);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8080/").then((response) => {
      setJobPostings(response.data);
    });
  }, []);

  const handleClick = () => {
    setJobPostingsAmount(jobPostingsAmount + 12);
  };

  const handleFilterChange = (e: any) => {
    e.preventDefault();
    setFilter(e.target.value.toLowerCase());
  };

  let listings: JobPosting[] = jobPostings.filter((jobPosting) =>
    jobPosting.position.toLowerCase().startsWith(filter)
  );
  listings = listings.slice(0, jobPostingsAmount);

  return (
    <main className="home">
      <div className="home__filter-container">
        <form className="home__form">
          <input
            placeholder="Filter by title..."
            className="home__title-input"
            value={filter}
            onChange={(e) => handleFilterChange(e)}
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
        {listings.map((jobPosting) => {
          return <JobListItem key={jobPosting.id} jobPosting={jobPosting} />;
        })}
      </ul>
      <button className="home__load-more-button" onClick={handleClick}>
        Load More
      </button>
    </main>
  );
};
