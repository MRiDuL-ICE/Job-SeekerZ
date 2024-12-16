import React, { useContext } from "react";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const AddJob = () => {
  const { user } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const tempData = Object.fromEntries(form.entries());
    const { minimumSalary, maximumSalary, currency, ...newJob } = tempData;
    newJob.salaryRange = { minimumSalary, maximumSalary, currency };
    newJob.requirements = newJob.requirements.split("\n");
    newJob.responsibilities = newJob.responsibilities.split("\n");
    // console.log(newJob)
    fetch(`http://localhost:3000/jobs`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          title: "Successful!",
          text: "Job successfully added!",
          icon: "success",
        });
      })
      .catch((err) => {
        Swal.fire({
          title: "Something went wrong!",
          text: err,
          icon: "error",
        });
      });
  };

  return (
    <div className="my-36">
      <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-md rounded-md border border-gray-200">
        <h2 className="text-2xl font-semibold text-[#116D6E] mb-6 text-center">
          Add New Job
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Job Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1">Job Title</label>
              <input
                type="text"
                name="jobtitle"
                placeholder="Job Title"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#116D6E]"
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Location</label>
              <select
                defaultValue={"Select Location"}
                name="location"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#116D6E]"
                required
              >
                <option value="Select-Location">Select Location</option>
                <option value="On-Site">On-Site</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Fully-Remote">Fully-Remote</option>
              </select>
            </div>
            <div>
              <label className="block font-medium mb-1">Job Type</label>
              <select
                defaultValue={"Pick a Job Type"}
                name="jobType"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#116D6E]"
                required
              >
                <option value="Pick-a-Job-Type">Pick a Job Type</option>
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Internship">Internship</option>
                <option value="">Contractual</option>
              </select>
            </div>
            <div>
              <label className="block font-medium mb-1">Job Field</label>
              <select
                defaultValue={"Select a Job Field"}
                name="jobField"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#116D6E]"
                required
              >
                <option value="Select-Job-Field">Select a Job Field</option>
                <option value="Engineering">Engineering</option>
                <option value="Marketing">Marketing</option>
                <option value="Finanace">Finanace</option>
                <option value="Teaching">Teaching</option>
                <option value="Sales">Sales</option>
                <option value="">Management</option>
                <option value="">Data Science</option>
                <option value="">Artificial Intelligence</option>
                <option value="">Machine Learning</option>
                <option value="">Graphic Design</option>
                <option value="">Deveopment</option>
              </select>
            </div>
            <div>
              <label className="block font-medium mb-1">
                Application Deadline
              </label>
              <input
                type="date"
                name="applicationdeadline"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#116D6E]"
                required
              />
            </div>
          </div>

          {/* Job Descriptions */}
          <div>
            <label className="block font-medium mb-1">Job Description</label>
            <textarea
              name="description"
              rows="3"
              placeholder="Enter job description"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#116D6E]"
              required
            ></textarea>
          </div>
          <div>
            <label className="block font-medium mb-1">Responsibilities</label>
            <textarea
              name="responsibilities"
              rows="2"
              placeholder="Enter Each responsibilities in a New Line"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#116D6E]"
              required
            ></textarea>
          </div>
          <div>
            <label className="block font-medium mb-1">Requirements</label>
            <textarea
              name="requirements"
              rows="2"
              placeholder="Enter Each requirements in a New Line"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#116D6E]"
              required
            ></textarea>
          </div>

          {/* Salary Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block font-medium mb-1">Minimum Salary</label>
              <input
                type="text"
                name="minimumSalary"
                placeholder="Min Salary"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#116D6E]"
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Maximum Salary</label>
              <input
                type="text"
                name="maximumSalary"
                placeholder="Max Salary"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#116D6E]"
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Currency</label>
              <select
                defaultValue={"Currency"}
                name="currency"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#116D6E]"
              >
                <option value="BDT">BDT</option>
                <option value="USD">USD</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1">Company Name</label>
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#116D6E]"
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Company Logo URL</label>
              <input
                type="url"
                name="companyLogo"
                placeholder="Company Logo URL"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#116D6E]"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1">Hr Name</label>
              <input
                defaultValue={user?.displayName}
                type="text"
                name="hrName"
                placeholder="Hr Name"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#116D6E]"
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Hr Email</label>
              <input
                defaultValue={user?.email}
                type="email"
                name="hrEmail"
                placeholder="Hr Email"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#116D6E]"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="btn bg-[#116D6E] hover:bg-[#0e5a5a] text-white px-6 py-2 rounded-md hover:rounded-3xl shadow-lg transition-all duration-200"
            >
              Submit Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
