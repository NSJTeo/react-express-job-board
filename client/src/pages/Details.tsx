import { ReactElement, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { JobPosting } from "../types/types";
import axios from "axios";
import { CompanyInfo } from "../components/CompanyInfo";
import styled from "styled-components";

const MainContainer = styled.div`
  background-color: var(--light-grey);
  position: relative;
  padding: 0 1.5rem;
  padding-bottom: 4rem;
`;

const JobInfoContainer = styled.div`
  border-radius: 6px;
  background-color: white;
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
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
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
`;

const Description = styled.p`
  color: #6e8098;
  line-height: 1.625rem;
  margin-bottom: 2.5rem;
`;

const RequirementsTitle = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 1.75rem;
`;

const Requirements = styled.p`
  color: #6e8098;
  line-height: 1.625rem;
  margin-bottom: 2.5rem;
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
`;

const JobRoleDescription = styled.p`
  line-height: 1.625rem;
  margin-bottom: 2rem;
  color: #6e8098;
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
  background-color: white;
  padding: 1.5rem;
`;

const ApplyNowButtonBottom = styled(ApplyNowLink)`
  margin-bottom: 0;
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
          <DateContractContainer>
            <p>{jobDetails.postedAt}</p>
            <DateContractDot />
            <p>{jobDetails.contract}</p>
          </DateContractContainer>
          <Position>{jobDetails.position}</Position>
          <Location>{jobDetails.location}</Location>
          <ApplyNowLink href={jobDetails.website + "/apply"}>
            Apply Now
          </ApplyNowLink>
          <Description>{jobDetails.description}</Description>
          <RequirementsTitle>Requirements</RequirementsTitle>
          <Requirements>{jobDetails.requirements.content}</Requirements>
          <RequirementsList>
            {jobDetails.requirements.items.map((item) => {
              return <Requirement>{item}</Requirement>;
            })}
          </RequirementsList>
          <JobRoleTitle>What You Will Do</JobRoleTitle>
          <JobRoleDescription>{jobDetails.role.content}</JobRoleDescription>
          <ol>
            {jobDetails.role.items.map((item) => {
              return <JobRole>{item}</JobRole>;
            })}
          </ol>
        </JobInfoContainer>
      </MainContainer>
      <ApplyNowButtonContainer>
        <ApplyNowButtonBottom href={jobDetails.website + "/apply"}>
          Apply Now
        </ApplyNowButtonBottom>
      </ApplyNowButtonContainer>
    </main>
  );
};
