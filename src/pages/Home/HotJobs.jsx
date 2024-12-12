import React, { useEffect, useState } from "react";
import JobCard from "../../layout/shared/JobCard";
import JobCardSkeleton from "../../layout/shared/JobCardSkeleton";

const HotJobs = () => {
  const [jobs, setJobs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/jobs")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch jobs");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setJobs(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching jobs:", err);
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  if (error) {
    return (
      <div className="max-w-7xl mx-auto p-4">
        <div className="text-center text-red-600 py-8">Error: {error}</div>
      </div>
    );
  }

  return (
    <div>
      <div className="w-full mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {isLoading ? (
            // Show 3 loading skeletons while fetching
            [...Array(3)].map((_, index) => <JobCardSkeleton key={index} />)
          ) : jobs?.length > 0 ? (
            // Show job cards when data is available
            jobs.map((job) => <JobCard key={job._id} job={job} />)
          ) : (
            // Show message when no jobs are found
            <div className="col-span-full text-center text-gray-500 py-8">
              No jobs found
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HotJobs;
