import axios from "axios";
import React, { useEffect, useState } from "react";

const userJobs = (sort) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:3000/jobs?sort=${sort}`).then((res) => {
      setLoading(false);
      setJobs(res.data);
    });
  }, [sort]);
  return { jobs, loading };
};

export default userJobs;
