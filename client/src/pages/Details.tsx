import React, { ReactElement, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const Details = (): ReactElement => {
  const params = useParams();
  useEffect(() => {
    axios.get(`http://localhost:8080/jobs/` + params.jobID).then((response) => {
      console.log(response.data);
    });
  }, []);
  return <div>Job Details</div>;
};
