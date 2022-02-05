import styled from "styled-components";

interface Props {
  setSearchModal: Function;
}

const Background = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba($color: #000000, $alpha: 0.2);
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  margin: 1.5rem;
  background-color: white;
  width: 100%;
  border-radius: 6px;
`;

const LocationFilterContainer = styled.div`
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  height: 4.5rem;
`;

const LocationFilterIcon = styled.img`
  margin-right: 1rem;
`;

const LocationFilterInput = styled.input`
  border: none;
  flex-grow: 1;
  &:focus {
    outline: none;
  }
`;

const ButtonFullTimeCheckboxContainer = styled.div`
  padding: 1.5rem;
`;

const FullTimeCheckbox = styled.label`
  display: flex;
  align-items: flex-start;
  font-weight: bold;
`;

const Button = styled.button`
  background-color: #5964e0;
  color: white;
  font-weight: bold;
  width: 100%;
  height: 3rem;
  border: none;
  border-radius: 5px;
  margin-top: 1.5rem;
`;

export const SearchModal = ({ setSearchModal }: Props) => {
  const handleClick = () => {
    setSearchModal(false);
  };

  return (
    <Background onClick={handleClick}>
      <Form onClick={(event) => event.stopPropagation()}>
        <LocationFilterContainer>
          <LocationFilterIcon
            src="http://localhost:8080/assets/icons/icon-location.svg"
            alt=""
          />
          <LocationFilterInput placeholder="Filter by location..." />
        </LocationFilterContainer>
        <ButtonFullTimeCheckboxContainer>
          <FullTimeCheckbox>
            <input type="checkbox" name="contract" />
            Full Time Only
          </FullTimeCheckbox>
          <Button className="search-modal__button">Search</Button>
        </ButtonFullTimeCheckboxContainer>
      </Form>
    </Background>
  );
};
