import React from "react";
import "./SearchModal.scss";

interface Props {
  setSearchModal: Function;
}

export const SearchModal = ({ setSearchModal }: Props) => {
  const handleClick = () => {
    setSearchModal(false);
  };

  return (
    <div className="search-modal__background" onClick={handleClick}>
      <div
        className="search-modal"
        onClick={(event) => event.stopPropagation()}
      >
        Modal Thing
      </div>
    </div>
  );
};
