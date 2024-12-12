import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import {
  MdWork,
  MdAccessTime,
  MdBusiness,
  MdPeople,
  MdAttachMoney,
  MdCalendarToday,
  MdLocationOn,
} from "react-icons/md";

const JobDetails = () => {
  const job = useLoaderData();
  console.log(job);

  const formatSalary = (min, max, currency) => {
    if (currency.toLowerCase() === "bdt") {
      return `৳${min.toLocaleString()} - ৳${max.toLocaleString()}`;
    }
    return `$${min.toLocaleString()} - $${max.toLocaleString()}`;
  };

  return (
    <div className="py-24">
      <div className="md:w-7/12 border border-[#116D6E] rounded-md shadow-[#116D6E] shadow-md mx-auto p-4">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-navy-900">{job.title}</h1>
            <div className="flex items-center gap-4 text-gray-500 mt-2">
              <span className="flex items-center gap-1">
                <MdWork className="w-4 h-4" />
                {job.jobType}
              </span>
              <span className="flex items-center gap-1">
                <MdAccessTime className="w-4 h-4" />
                {job.applicationDeadline}
              </span>
            </div>
          </div>
          <Link to={`/jobApply/${job._id}`}>
          <button className="bg-[#116D6E] text-white px-6 py-2 rounded-md hover:bg-[#115253]">
            Apply now
          </button>
          </Link>
        </div>
        <hr className="bg-[#116D6E]"/>
        {/* Overview Section */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-6 md:mb-0">Overview</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-2 md:h-[12rem] mb-6">
            <div className="flex items-center gap-1">
              <MdAttachMoney className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-[#116D6E] font-bold text-md">
                  {formatSalary(
                    job.salaryRange.min,
                    job.salaryRange.max,
                    job.salaryRange.currency
                  )}
                  <span className="text-gray-500 text-sm font-normal">
                    /month
                  </span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <MdWork className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-gray-500">Job type</p>
                <p className="font-medium">{job.jobType}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <MdCalendarToday className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-gray-500">Deadline</p>
                <p className="font-medium">{job.applicationDeadline}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <MdLocationOn className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-gray-500">Location</p>
                <p className="font-medium">{job.location}</p>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <p>{job.description}</p>
          </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {job.requirements.slice(0, 3).map((req, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
            >
              {req}
            </span>
          ))}
          {job.requirements.length > 3 && (
            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
              +{job.requirements.length - 3} more
            </span>
          )}
        </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
