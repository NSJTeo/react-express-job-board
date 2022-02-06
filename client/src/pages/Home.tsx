import { ReactElement, useEffect, useState } from "react";
import axios from "axios";
import { JobPosting } from "../types/types";
import { JobListItem } from "../components/JobListItem";
import { SearchModal } from "../components/SearchModal";
import styled from "styled-components";

const HomeContainer = styled.main`
  background-color: ${({ theme }) => theme.background};
  position: relative;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;

const FilterContainer = styled.div`
  height: 5rem;
  background-color: white;
  border-radius: 6px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  top: -2.5rem;
  right: 1.5rem;
  left: 1.5rem;
  padding: 1rem;
  padding-left: 1.5rem;
  width: auto;
  z-index: 1;
  background: ${({ theme }) => theme.infoBackground};
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
`;

const TitleInput = styled.input`
  font-size: 1rem;
  border: none;
  flex-grow: 1;
  background: ${({ theme }) => theme.infoBackground};
  &:focus {
    outline: none;
  }
`;

const FilterButtonIconContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ModalButton = styled.button`
  background: none;
  border: none;
`;

const SearchButton = styled.button`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1.5rem;
  border: none;
  background-color: #5964e0;
  border-radius: 5px;
`;

const SearchIcon = styled.img`
  width: 1.75rem;
`;

const JobList = styled.ul`
  background-color: ${({ theme }) => theme.background};
  padding-top: 2.9375rem;
`;

const LoadMoreButton = styled.button`
  font-size: 1rem;
  width: 8.8125rem;
  height: 3rem;
  margin-top: 2rem;
  border: none;
  border-radius: 5px;
  background-color: #5964e0;
  font-weight: bold;
  color: white;
  margin-bottom: 3.875rem;
  align-self: center;
`;

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
    <HomeContainer>
      {searchModal ? <SearchModal setSearchModal={setSearchModal} /> : null}
      <FilterContainer>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <TitleInput placeholder="Filter by title..." name="title" />
          <FilterButtonIconContainer>
            <ModalButton
              type="button"
              onClick={() => {
                setSearchModal(true);
              }}
            >
              <img
                src="http://localhost:8080/assets/icons/icon-filter.svg"
                alt=""
              />
            </ModalButton>
            <SearchButton type="submit">
              <SearchIcon
                src="http://localhost:8080/assets/icons/icon-search-mobile.svg"
                alt=""
              />
            </SearchButton>
          </FilterButtonIconContainer>
        </Form>
      </FilterContainer>
      <JobList>
        {listings.map((jobPosting) => {
          return <JobListItem key={jobPosting.id} jobPosting={jobPosting} />;
        })}
      </JobList>
      {hiddenPostings ? (
        <LoadMoreButton onClick={handleClick}>Load More</LoadMoreButton>
      ) : null}
    </HomeContainer>
  );
};
