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
      <form
        className="search-modal__form"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="search-modal__location-filter-container">
          <img
            src="http://localhost:8080/assets/icons/icon-location.svg"
            alt=""
            className="search-modal__location-filter-icon"
          />
          <input
            placeholder="Filter by location..."
            className="search-modal__location-filter-input"
          />
        </div>
        <div className="search-modal__button-full-time-container">
          <label className="search-modal__contract-checkbox">
            <input type="checkbox" name="contract" />
            Full Time Only
          </label>
          <button className="search-modal__button">Search</button>
        </div>
      </form>
    </div>
  );
};
