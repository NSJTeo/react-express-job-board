import styled from "styled-components";
import { Link } from "react-router-dom";
import { breakpoints } from "../themes";

interface Props {
  setDarkMode: Function;
}

const Header = styled.header`
  background-image: url("http://localhost:8080/assets/images/bg-pattern-header.svg");
  background-color: ${({ theme }) => theme.background};
  background-size: cover;
  @media (min-width: ${breakpoints.tablet}) {
    background-image: url("http://localhost:8080/assets/images/bg-pattern-header-tablet.svg");
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: 0 50%;
  }
  @media (min-width: ${breakpoints.desktop}) {
    background-image: url("http://localhost:8080/assets/images/bg-pattern-header-desktop.svg");
    background-position: 0 100%;
  }
`;

const LogoModeContainer = styled.div`
  max-width: 69.375rem;
  height: 8.5rem;
  padding: 0 1.5rem;
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;
`;

const ModeSelectContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ModeSelect = styled.button`
  width: 3rem;
  height: 1.5rem;
  background-color: white;
  border-radius: 12px;
  margin: 0 1rem;
  display: flex;
  align-items: center;
  padding: 5px;
  border: none;
  justify-content: ${({ theme }) => theme.button};
`;

const ModeSelectButton = styled.div`
  width: 0.875rem;
  height: 0.875rem;
  border-radius: 50%;
  background-color: #5964e0;
`;

export const PageHeader = ({ setDarkMode }: Props) => {
  const handleClick = () => {
    setDarkMode((prevState: Boolean) => !prevState);
  };

  return (
    <Header>
      <LogoModeContainer>
        <Link to="/">
          <img src="http://localhost:8080/assets/logos/logo.svg" alt="" />
        </Link>
        <ModeSelectContainer>
          <img src="http://localhost:8080/assets/icons/icon-sun.svg" alt="" />
          <ModeSelect onClick={handleClick}>
            <ModeSelectButton />
          </ModeSelect>
          <img src="http://localhost:8080/assets/icons/icon-moon.svg" alt="" />
        </ModeSelectContainer>
      </LogoModeContainer>
    </Header>
  );
};
