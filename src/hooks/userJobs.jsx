import axios from "axios";
import React, { useEffect, useState } from "react";

const userJobs = (sort, search) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://job-seekerz-server.vercel.app/jobs?sort=${sort}&search=${search}`
      )
      .then((res) => {
        setLoading(false);
        setJobs(res.data);
      });
  }, [sort, search]);
  return { jobs, loading };
};

export default userJobs;
