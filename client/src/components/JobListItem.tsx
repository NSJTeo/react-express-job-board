import { ReactElement } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { JobPosting } from "../types/types";

interface Props {
  jobPosting: JobPosting;
}

interface LogoContainerProps {
  backgroundColor: string;
}

const Container = styled.li`
  margin-bottom: 1.5rem;
`;

const BannerContainer = styled.div`
  display: flex;
`;

const Banner = styled.div`
  height: 25px;
  background-color: var(--light-grey, grey);
`;

const LogoContainer = styled.div<LogoContainerProps>`
  width: 3.125rem;
  height: 3.125rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  position: relative;
  top: 25px;
  left: 2rem;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const InfoContainer = styled.div`
  background-color: ${({ theme }) => theme.infoBackground};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  padding-top: 49px;
  border-radius: 6px;
`;

const JobInfoContainer = styled.div`
  margin-bottom: 1rem;
`;

const TimeContractContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
  color: var(--dark-grey, gray);
`;

const TimeContractDot = styled.div`
  margin: 0 0.75rem;
`;

const Company = styled.p`
  margin-bottom: 2.75rem;
  color: var(--dark-grey, grey);
`;

const Location = styled.p`
  color: #5964e0;
  font-size: 0.875rem;
  font-weight: bold;
`;

const Position = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  color: ${({ theme }) => theme.textColor};
`;

export const JobListItem = ({ jobPosting }: Props): ReactElement => {
  return (
    <Container>
      <BannerContainer>
        <Banner />
        <LogoContainer backgroundColor={jobPosting.logoBackground}>
          <img
            src={`http://localhost:8080` + jobPosting.logo.slice(1)}
            alt=""
            className="job-list-item__logo"
          />
        </LogoContainer>
        <Banner />
      </BannerContainer>
      <InfoContainer>
        <JobInfoContainer>
          <TimeContractContainer>
            <p>{jobPosting.postedAt}</p>
            <TimeContractDot>&bull;</TimeContractDot>
            <p>{jobPosting.contract}</p>
          </TimeContractContainer>
          {/* Google: styled-components react router Links */}
          <Link to={`/job/` + jobPosting.id}>
            <Position>{jobPosting.position}</Position>
          </Link>
        </JobInfoContainer>
        <div>
          <Company className="job-list-item__company">
            {jobPosting.company}
          </Company>
          <Location className="job-list-item__location">
            {jobPosting.location}
          </Location>
        </div>
      </InfoContainer>
    </Container>
  );
};
