import { ReactElement, useEffect, useState } from "react";
import axios from "axios";
import { JobPosting } from "../types/types";
import { JobListItem } from "../components/JobListItem";
import { SearchModal } from "../components/SearchModal";
import styled from "styled-components";
import { breakpoints } from "../themes";
import { FullTimeCheckbox, Button } from "../components/SearchModal";

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
  @media (min-width: ${breakpoints.tablet}) {
    padding: 0;
  }
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  @media (min-width: ${breakpoints.tablet}) {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const TitleInputContainer = styled.div`
  flex-grow: 1;
  @media (min-width: ${breakpoints.tablet}) {
    display: flex;
    align-items: flex-start;
    padding: 1.75rem 1.5rem;
  }
`;

const Input = styled.input`
  font-size: 1rem;
  border: none;
  background: ${({ theme }) => theme.infoBackground};
  width: 100%;
  &:focus {
    outline: none;
  }
`;

const ModalButtonSearchContainer = styled.div`
  display: flex;
  align-items: center;
  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
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
  width: 1.5rem;
`;

const TabletSearchIcon = styled(SearchIcon)`
  display: none;
  margin-right: 1rem;
  @media (min-width: ${breakpoints.tablet}) {
    display: inline;
  }
`;

const JobList = styled.ul`
  background-color: ${({ theme }) => theme.background};
  padding-top: 2.9375rem;
  @media (min-width: ${breakpoints.tablet}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 11px;
  }
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

const ModalIcon = styled.path`
  fill: ${({ theme }) => theme.filterIconFill};
`;

const LocationFilterContainer = styled.div`
  display: none;
  border-left: 1px solid rgba(110, 128, 152, 0.2);
  border-right: 1px solid rgba(110, 128, 152, 0.2);
  @media (min-width: ${breakpoints.tablet}) {
    display: flex;
    align-items: flex-start;
    padding: 1.75rem 1.5rem;
    justify-content: center;
  }
`;

const FullTimeSearchContainer = styled.div`
  display: none;
  padding: 0 1.25rem;
  @media (min-width: ${breakpoints.tablet}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const LocationIcon = styled.img`
  margin-right: 1rem;
`;

const TabletSearchButton = styled(Button)`
  width: 5rem;
  margin: 0;
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
          <TitleInputContainer>
            <TabletSearchIcon
              src="http://localhost:8080/assets/icons/icon-search-tablet.svg"
              alt=""
            />
            <Input placeholder="Filter by title..." name="title" />
          </TitleInputContainer>
          <LocationFilterContainer>
            <LocationIcon
              src="http://localhost:8080/assets/icons/icon-location.svg"
              alt="location icon"
            />
            <Input placeholder="Filter by location..." name="location" />
          </LocationFilterContainer>
          <FullTimeSearchContainer>
            <FullTimeCheckbox>
              <input type="checkbox" name="contract" />
              Full Time
            </FullTimeCheckbox>
            <TabletSearchButton>Search</TabletSearchButton>
          </FullTimeSearchContainer>
          <ModalButtonSearchContainer>
            <ModalButton
              type="button"
              onClick={() => {
                setSearchModal(true);
              }}
            >
              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <ModalIcon
                  d="M19.108 0H.86a.86.86 0 00-.764.455.833.833 0 00.068.884l6.685 9.202.007.01c.242.32.374.708.375 1.107v7.502a.825.825 0 00.248.594.865.865 0 00.942.18l3.756-1.4c.337-.1.56-.41.56-.784v-6.092c0-.399.132-.787.375-1.108l.007-.009 6.685-9.202c.19-.26.217-.6.068-.884A.86.86 0 0019.108 0z"
                  fill-rule="nonzero"
                />
              </svg>
            </ModalButton>
            <SearchButton type="submit">
              <SearchIcon
                src="http://localhost:8080/assets/icons/icon-search-mobile.svg"
                alt=""
              />
            </SearchButton>
          </ModalButtonSearchContainer>
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
