import React from "react";
import "./PageHeader.scss";

interface Props {}

export const PageHeader = (props: Props) => {
  return (
    <header className="page-header">
      <img src="http://localhost:8080/assets/logos/logo.svg" alt="" />
    </header>
  );
};
