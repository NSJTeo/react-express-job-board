import React, { ReactElement, useEffect, useState } from "react";
import axios from "axios";
import { JobPosting } from "../../types/types";
import { JobListItem } from "../../components/JobListItem/JobListItem";
import "./Home.scss";
import { SearchModal } from "../../components/SearchModal/SearchModal";

export const Home = (): ReactElement => {
  const [jobPostings, setJobPostings] = useState<JobPosting[]>([]);
  const [jobPostingsAmount, setJobPostingsAmount] = useState<number>(12);
  const [titleFilter, setTitleFilter] = useState("");
  const [searchModal, setSearchModal] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8080/").then((response) => {
      setJobPostings(response.data);
    });
  }, []);

  const handleClick = () => {
    setJobPostingsAmount(jobPostingsAmount + 12);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setTitleFilter(e.target.title.value);
  };

  let listings: JobPosting[] = jobPostings.filter((jobPosting) =>
    jobPosting.position.toLowerCase().startsWith(titleFilter)
  );
  const hiddenPostings = listings.length > jobPostingsAmount;
  listings = listings.slice(0, jobPostingsAmount);

  return (
    <main className="home">
      {searchModal ? <SearchModal setSearchModal={setSearchModal} /> : null}
      <div className="home__filter-container">
        <form className="home__form" onSubmit={(e) => handleSubmit(e)}>
          <input
            placeholder="Filter by title..."
            className="home__title-input"
            name="title"
          />
          <div className="home__filter-icon-button-container">
            <button
              type="button"
              onClick={() => {
                setSearchModal(true);
              }}
              className="home__modal-button"
            >
              <img
                src="http://localhost:8080/assets/icons/icon-filter.svg"
                alt=""
              />
            </button>
            <button type="submit" className="home__search-button">
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
      {hiddenPostings ? (
        <button className="home__load-more-button" onClick={handleClick}>
          Load More
        </button>
      ) : null}
    </main>
  );
};
