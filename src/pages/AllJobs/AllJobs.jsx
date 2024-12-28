import React, { useState } from "react";
import userJobs from "../../hooks/userJobs";
import JobCardSkeleton from "../../layout/shared/JobCardSkeleton";
import JobCard from "../../layout/shared/JobCard";
import { IoSearch } from "react-icons/io5";

const AllJobs = () => {
  const [sort, setSort] = useState(false);
  const [search, setSearch] = useState("");
  const { jobs, loading } = userJobs(sort, search);
  return (
    <div className="my-32">
      <div className="w-full rounded-md bg-base-200 p-3 flex items-center justify-end gap-4">
        <div>
          <input
            onKeyUp={(e) => setSearch(e.target.value)}
            className="border border-base-300 h-11 rounded-md p-4 relative w-60 active:outline-[#116D6E]"
            placeholder={`Search jobs by location`}
            type="text"
            name=""
            id=""
          />
          <span className="absolute text-2xl -translate-x-8 translate-y-2 text-gray-400">
            <IoSearch />
          </span>
        </div>
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
