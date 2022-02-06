import styled from "styled-components";

interface Props {}

const Header = styled.header`
  background-image: url("http://localhost:8080/assets/images/bg-pattern-header.svg");
  height: 8.5rem;
  padding: 0 1.5rem;
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
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
`;

const ModeSelectButton = styled.div`
  width: 0.875rem;
  height: 0.875rem;
  border-radius: 50%;
  background-color: #5964e0;
`;

export const PageHeader = (props: Props) => {
  return (
    <Header>
      <img src="http://localhost:8080/assets/logos/logo.svg" alt="" />
      <ModeSelectContainer>
        <img src="http://localhost:8080/assets/icons/icon-sun.svg" alt="" />
        <ModeSelect>
          <ModeSelectButton />
        </ModeSelect>
        <img src="http://localhost:8080/assets/icons/icon-moon.svg" alt="" />
      </ModeSelectContainer>
    </Header>
  );
};
