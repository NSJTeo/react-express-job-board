import { JobPosting } from "../types/types";
import styled from "styled-components";

interface Props {
  jobDetails: JobPosting;
  backgroundColor?: String;
}

interface LogoContainerProps {
  backgroundColor: string;
}

const Container = styled.div`
  background-color: ${({ theme }) => theme.background};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-top: 3.0625rem;
  top: -1.5625rem;
  margin-bottom: -1px;
`;

const LogoContainer = styled.div<LogoContainerProps>`
  width: 3.125rem;
  height: 3.125rem;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -1.5625rem;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const Name = styled.p`
  margin-bottom: 0.8125rem;
  font-size: 1.25rem;
  font-weight: bold;
  color: ${({ theme }) => theme.textColor};
`;

const Website = styled.p`
  color: #6e8098;
  margin-bottom: 1.875rem;
`;

const LinkContainer = styled.div`
  width: 100%;
  padding: 0 5.625rem;
  text-align: center;
`;

const Link = styled.a`
  width: 100%;
  background-color: rgba(89, 100, 224, 0.1);
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  border-radius: 5px;
  color: #5964e0;
  font-weight: bold;
`;

export const CompanyInfo = ({ jobDetails }: Props) => {
  const backgroundColor = jobDetails.logoBackground;
  return (
    <>
      <Container>
        <LogoContainer backgroundColor={backgroundColor}>
          <img
            src={`http://localhost:8080` + jobDetails.logo.slice(1)}
            alt=""
          />
        </LogoContainer>
        <Name>{jobDetails.company}</Name>
        <Website>{jobDetails.website.slice(20) + ".com"}</Website>
        <LinkContainer>
          <Link href={jobDetails.website}>Company Site</Link>
        </LinkContainer>
      </Container>
    </>
  );
};
