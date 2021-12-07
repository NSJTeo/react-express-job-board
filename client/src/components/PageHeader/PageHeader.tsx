import React from "react";
import "./PageHeader.scss";

interface Props {}

export const PageHeader = (props: Props) => {
  return (
    <header className="page-header">
      <img src="http://localhost:8080/assets/logos/logo.svg" alt="" />
      <div className="page-header__mode-select-container">
        <img src="http://localhost:8080/assets/icons/icon-sun.svg" alt="" />
        <button className="page-header__mode-select">
          <div className="page-header__mode-select-button"></div>
        </button>
        <img src="http://localhost:8080/assets/icons/icon-moon.svg" alt="" />
      </div>
    </header>
  );
};
