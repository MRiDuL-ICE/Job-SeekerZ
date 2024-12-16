import React, { useEffect, useState } from "react";
import { data, Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const MyPostedJobs = () => {
  const { user, loading } = useAuth();
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:3000/jobs?email=${user?.email}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        setJobs(data)
    })
  },[user.email])
  return (
    <div>
      <div className="my-36">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-semibold text-[#116D6E] mb-6 text-center">
            My Posted Jobs
          </h2>

          {jobs.length === 0 ? (
            <p className="text-center text-gray-500">No jobs posted yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full table-auto border-collapse border border-gray-200 shadow-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 py-2">
                      Index
                    </th>
                    <th className="border border-gray-300 px-4 py-2">
                      Job Title
                    </th>
                    <th className="border border-gray-300 px-4 py-2">
                      Location
                    </th>
                    <th className="border border-gray-300 px-4 py-2">
                      Job Type
                    </th>
                    <th className="border border-gray-300 px-4 py-2">
                      Category
                    </th>
                    <th className="border border-gray-300 px-4 py-2">
                      Deadline
                    </th>
                    <th className="border border-gray-300 px-4 py-2">
                      Total Applicant
                    </th>
                    <th className="border border-gray-300 px-4 py-2">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {jobs.map((job, idx) => (
                    <tr key={job._id} className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        {idx + 1}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {job.title}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {job.location}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {job.jobType}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {job.category}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {job.applicationdeadline}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {job.applicationCount}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 flex space-x-2 justify-center">
                        {/* View Applications Button */}
                       <button>
                       <Link to={`/viewApplications/${job._id}`}
                          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded shadow"
                        >
                          View Applications
                        </Link>
                       </button>

                        {/* Update Job Button */}
                        <button
                          onClick={() => navigate(`/update-job/${job._id}`)}
                          className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded shadow"
                        >
                          Update Job
                        </button>

                        {/* Delete Job Button */}
                        <button
                          onClick={() => handleDelete(job._id)}
                          className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded shadow"
                        >
                          Delete Job
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPostedJobs;
