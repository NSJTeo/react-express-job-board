import { ReactElement, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { JobPosting } from "../types/types";
import axios from "axios";
import { CompanyInfo } from "../components/CompanyInfo";
import styled from "styled-components";
import { breakpoints } from "../themes";

const MainContainer = styled.div`
  background-color: ${({ theme }) => theme.background};
  position: relative;
  padding: 0 1.5rem;
  padding-bottom: 4rem;
  @media (min-width: ${breakpoints.tablet}) {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
`;

const JobInfoContainer = styled.div`
  max-width: 69.375rem;
  margin: 0 auto;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.infoBackground};
  padding: 2.5rem 1.5rem;
`;

const DateContractContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const DateContractDot = styled.div`
  margin: 0 0.75rem;
  width: 0.25rem;
  height: 0.25rem;
  border-radius: 50%;
  background-color: #6e8098;
`;

const Position = styled.h1`
  font-weight: bold;
  line-height: 24.8px;
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.textColor};
  @media (min-width: ${breakpoints.tablet}) {
    font-size: 1.75rem;
    line-height: 34.73px;
  }
`;

const Location = styled.p`
  font-size: 0.875rem;
  font-weight: bold;
  color: #5964e0;
  margin-bottom: 3.375rem;
`;

const ApplyNowLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #5964e0;
  border-radius: 5px;
  height: 3rem;
  font-weight: bold;
  color: white;
  margin-bottom: 2rem;
  @media (min-width: ${breakpoints.tablet}) {
    width: max-content;
    padding-left: 1.75rem;
    padding-right: 1.75rem;
  }
`;

const Description = styled.p`
  color: #6e8098;
  line-height: 1.625rem;
  margin-bottom: 2.5rem;
`;

const RequirementsTitle = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 1.75rem;
  color: ${({ theme }) => theme.textColor};
`;

const Copy = styled.p`
  color: #6e8098;
  line-height: 1.625rem;
  margin-bottom: 2rem;
`;

const RequirementsList = styled.ul`
  margin-bottom: 2.5rem;
`;

const Requirement = styled.li`
  color: #6e8098;
  line-height: 1.625rem;
  margin-bottom: 0.5rem;
  padding-left: 2rem;
  margin-left: 1rem;
  list-style-type: disc;
  :last-child {
    margin-bottom: 0;
  }
`;

const JobRoleTitle = styled.h2`
  font-size: 1.25rem;
  line-height: 24.8px;
  margin-bottom: 1.75rem;
  color: ${({ theme }) => theme.textColor};
`;

const JobRole = styled.li`
  color: #6e8098;
  line-height: 1.625rem;
  margin-bottom: 0.5rem;
  padding-left: 2rem;
  margin-left: 1rem;
  list-style-type: decimal;
  :last-child {
    margin-bottom: 0;
  }
`;

const ApplyNowButtonContainer = styled.div`
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.infoBackground};
  @media (min-width: ${breakpoints.tablet}) {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
`;

const ApplyNowButtonBottom = styled(ApplyNowLink)`
  margin-bottom: 0;
  /* @media (min-width: ${breakpoints.tablet}) {
    width: max-content;
    padding-left: 1.75rem;
    padding-right: 1.75rem;
  } */
`;

const DateContract = styled.p`
  color: #6e8098;
  line-height: 1.25rem;
`;

const ApplyNowDetails = styled.div`
  display: none;
  @media (min-width: ${breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
  }
`;

const ApplyNowPosition = styled.p`
  color: ${({ theme }) => theme.textColor};
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  line-height: 24.8px;
`;

const ApplyNowLocation = styled.p`
  color: #6e8098;
  line-height: 19.84px;
`;

const ApplyNowInnerContainer = styled.div`
  max-width: 69.375rem;
  margin: 0 auto;
  @media (min-width: ${breakpoints.tablet}) {
    display: flex;
    justify-content: space-between;
  }
`;

const DateContractPositionLocationContainer = styled.div`
  @media (min-width: ${breakpoints.tablet}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Details = (): ReactElement => {
  const [jobDetails, setJobDetails] = useState<JobPosting>();

  const params = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8080/jobs/` + params.jobID).then((response) => {
      setJobDetails(response.data);
    });
  }, [params.jobID]);

  if (!jobDetails) {
    return <></>;
  }

  return (
    <main>
      <MainContainer>
        <CompanyInfo jobDetails={jobDetails} />
        <JobInfoContainer>
          <DateContractPositionLocationContainer>
            <div>
              <DateContractContainer>
                <DateContract>{jobDetails.postedAt}</DateContract>
                <DateContractDot />
                <DateContract>{jobDetails.contract}</DateContract>
              </DateContractContainer>
              <Position>{jobDetails.position}</Position>
              <Location>{jobDetails.location}</Location>
            </div>
            <ApplyNowLink href={jobDetails.website + "/apply"}>
              Apply Now
            </ApplyNowLink>
          </DateContractPositionLocationContainer>
          <Description>{jobDetails.description}</Description>
          <RequirementsTitle>Requirements</RequirementsTitle>
          <Copy>{jobDetails.requirements.content}</Copy>
          <RequirementsList>
            {jobDetails.requirements.items.map((item, i) => {
              return <Requirement key={i}>{item}</Requirement>;
            })}
          </RequirementsList>
          <JobRoleTitle>What You Will Do</JobRoleTitle>
          <Copy>{jobDetails.role.content}</Copy>
          <ol>
            {jobDetails.role.items.map((item, i) => {
              return <JobRole key={i}>{item}</JobRole>;
            })}
          </ol>
        </JobInfoContainer>
      </MainContainer>
      <ApplyNowButtonContainer>
        <ApplyNowInnerContainer>
          <ApplyNowDetails>
            <ApplyNowPosition>{jobDetails.position}</ApplyNowPosition>
            <ApplyNowLocation>{jobDetails.company}</ApplyNowLocation>
          </ApplyNowDetails>
          <ApplyNowButtonBottom href={jobDetails.website + "/apply"}>
            Apply Now
          </ApplyNowButtonBottom>
        </ApplyNowInnerContainer>
      </ApplyNowButtonContainer>
    </main>
  );
};
