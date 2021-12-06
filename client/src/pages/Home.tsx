import React, { ReactElement, useEffect, useState } from "react";
import axios from "axios";

interface Props {}

export const Home = (props: Props): ReactElement => {
  const [jobPostings, setJobPostings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/").then((response) => {
      console.log(response.data);
      setJobPostings(response.data);
    });
  });
  return <div></div>;
};
