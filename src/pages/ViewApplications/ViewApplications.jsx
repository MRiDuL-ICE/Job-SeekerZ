import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const ViewApplications = () => {
    const {user} = useAuth()
  const applications = useLoaderData();
  const [statuses, setStatuses] = useState({});

  const handleStatusChange = (id, e) => {

    const data = {
        status: e.target.value
    }

    fetch(`http://localhost:3000/job-applications/${id}`, {
        method: "PATCH",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
        if(data.modifiedCount){
            Swal.fire({
                title: "Updated!",
                text: "Satus Has Been Updated!",
                icon: "success",
              });
        }
    })
  };

  return (
    <div className="my-32">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold text-[#116D6E] text-center mb-6">
          Applications for the Job
        </h2>

        {applications.length === 0 ? (
          <p className="text-center text-gray-500">
            No applications available.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((applicant) => (
              <div
                key={applicant._id}
                className="bg-white border border-gray-200 rounded-lg shadow-md p-4"
              >
                {/* Card Header */}
                <div className="flex items-center mb-4">
                  <img
                    src={user?.photoURL} // Placeholder image
                    alt="Applicant"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{applicant.name}</h3>
                    <p className="text-sm text-gray-500">{applicant.phone}</p>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="mb-4">
                  <p className="text-gray-700 mb-1">
                    <strong>Email:</strong>{" "}
                    <a
                      href={`mailto:${applicant.applicant_email}`}
                      className="text-blue-500 underline"
                    >
                      {applicant.applicant_email}
                    </a>
                  </p>
                  <p className="text-gray-700 mb-1">
                    <strong>LinkedIn:</strong>{" "}
                    <a
                      href={applicant.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-500 underline"
                    >
                      View Profile
                    </a>
                  </p>
                  <p className="text-gray-700 mb-1">
                    <strong>GitHub:</strong>{" "}
                    <a
                      href={applicant.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-500 underline"
                    >
                      View Repository
                    </a>
                  </p>
                </div>

                {/* Dropdown for Status */}
                <div className="mb-4">
                  <label
                    htmlFor={`status-${applicant._id}`}
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Change Status:
                  </label>
                  <select
                    id={`status-${applicant._id}`}
                    value={statuses[applicant._id] || "Pending"}
                    onChange={(e) =>
                      handleStatusChange(applicant._id, e)
                    }
                    className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#116D6E]"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Rejected">Rejected</option>
                    <option value="Shortlisted">Shortlisted</option>
                    <option value="Hired">Hired</option>
                    <option value="Interview Scheduled">
                      Interview Scheduled
                    </option>
                  </select>
                </div>

                {/* Actions */}
                <div className="text-center">
                  {/* <button
                    onClick={() =>
                      console.log(
                        `Status: ${statuses[applicant._id] || "Pending"}`
                      )
                    }
                    className="btn bg-[#116D6E] hover:bg-[#0e5a5a] text-white px-6 py-2 rounded-md hover:rounded-3xl shadow-lg transition-all duration-200"
                  >
                    Save Status
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewApplications;
