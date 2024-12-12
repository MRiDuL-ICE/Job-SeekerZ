import React, { useEffect, useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiTime } from "react-icons/bi";
import { BsFillLightningFill } from "react-icons/bs";

// Job Card Component
const JobCard = ({ job }) => {
  const formatSalary = (min, max, currency) => {
    if (currency.toLowerCase() === "bdt") {
      return `৳${min.toLocaleString()} - ৳${max.toLocaleString()}`;
    }
    return `$${min.toLocaleString()} - $${max.toLocaleString()}`;
  };

  return (
    <div className="bg-blue-50 rounded-md h-[24rem] p-6 border hover:-translate-y-1 border-gray-200 hover:bg-white transition-all duration-300">
     <div className="h-[14rem]">
         {/* Header with company logo and job type */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <img
            src={job.company_logo}
            alt={job.company}
            className="w-12 h-12 rounded-xl object-cover"
          />
          <div>
            <h3 className="text-gray-900 font-semibold">{job.company}</h3>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <HiOutlineLocationMarker className="text-base" />
              <span>{job.location}</span>
            </div>
          </div>
        </div>
        <span className="px-3 py-1 flex items-center gap-2 h-10 bg-[#116D6E]/10 text-[#116D6E] text-sm font-medium rounded-lg">
        <BsFillLightningFill className="text-2xl " />
        {job.jobType}
        </span>
      </div>

      {/* Job title and description */}
      <div className="mb-4">
        <h2 className="text-xl font-bold text-[#0c255c] mb-2">{job.title}</h2>
        <p className="text-gray-600 text-sm line-clamp-2">{job.description}</p>
      </div>

      {/* Requirements */}
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

      {/* Footer with salary and apply button */}
      <div className="flex items-center justify-between mt-6 py-8">
        <div>
          <p className="text-[#116D6E] font-bold text-md">
            {formatSalary(
              job.salaryRange.min,
              job.salaryRange.max,
              job.salaryRange.currency
            )}
            <span className="text-gray-500 text-sm font-normal">/month</span>
          </p>
          <div className="flex items-center gap-1 text-gray-500 text-sm">
            <BiTime />
            <span>
              Deadline: {new Date(job.applicationDeadline).toLocaleDateString()}
            </span>
          </div>
        </div>
        <button className="px-6 py-2 bg-[#116D6E] text-white rounded-lg hover:bg-[#116D6E]/90 transition-colors duration-300">
          Apply Now
        </button>
      </div>
    </div>
  );
};


export default JobCard;