import React, { useState } from "react";
import userJobs from "../../hooks/userJobs";
import JobCardSkeleton from "../../layout/shared/JobCardSkeleton";
import JobCard from "../../layout/shared/JobCard";

const AllJobs = () => {
  const [sort, setSort] = useState(false);
  const { jobs, loading } = userJobs(sort);
  return (
    <div className="my-32">
      <div className="w-full rounded-md bg-base-200 p-3 flex items-center justify-end">
        <button
          onClick={() => setSort(!sort)}
          className={`p-2 px-2 rounded-md text-white bg-[#116D6E] hover:bg-[#0e5a5a] ${
            sort && "bg-green-600"
          } flex justify-end text-left`}
        >
          {sort ? "Sorted By Salary" : "Sort By Salary"}
        </button>
      </div>
      <div className="w-full mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {loading ? (
            // Show 3 loading skeletons while fetching
            [...Array(8)].map((_, index) => <JobCardSkeleton key={index} />)
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

export default AllJobs;
