import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const MyApplications = () => {
  const { user, loading } = useAuth();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/job-application?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setJobs(data);
      });
  }, [user.email]);

  if (loading) {
    return (
      <div className="w-full flex justify-center items-center mx-auto my-40">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  console.log(jobs.length)

  return (
    <div className="my-36">
      <h2>My Applications: {jobs?.length}</h2>
    </div>
  );
};

export default MyApplications;
