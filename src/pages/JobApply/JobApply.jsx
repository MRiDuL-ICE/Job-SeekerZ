import React from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const job = useLoaderData();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const phone = form.get("phone");
    const resume = form.get("resume");
    const linkedin = form.get("linkedin");
    const github = form.get("github");
    const portfolio = form.get("portfolio");
    const coverLetter = form.get("coverLetter");

    const jobApplication = {
      job_id: id,
      name,
      phone,
      applicant_email: user.email,
      linkedin,
      github,
      resume,
      portfolio,
      coverLetter,
    };

    fetch("https://job-seekerz-server.vercel.app/job-applications", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Submitted!",
            text: "Application successfully submitted!",
            icon: "success",
          });
          navigate("/myApplications");
        }
        e.target.reset();
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
    <div className="my-32">
      <div className="max-w-4xl mx-auto p-4">
        <div className="bg-white shadow-md rounded-lg p-10">
          <div className="flex items-center space-x-4 mb-6">
            <img
              src={job.company_logo}
              alt={job.company}
              className="w-16 h-16"
            />
            <div>
              <h1 className="text-2xl font-bold">{job.title}</h1>
              <p>{job.company}</p>
              <p className="text-gray-500">
                {job.location} | {job.jobType}
              </p>
              <p className="text-gray-500">
                Salary: {job.salaryRange.currency} {job.salaryRange.min}-
                {job.salaryRange.max}
              </p>
            </div>
          </div>

          <div className="mb-4">
            <h2 className="text-lg font-semibold">Job Description</h2>
            <p>{job.description}</p>
          </div>

          <div className="mb-4">
            <h2 className="text-lg font-semibold">Requirements</h2>
            <ul className="list-disc list-inside">
              {job.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <h2 className="text-lg font-semibold">Responsibilities</h2>
            <ul className="list-disc list-inside">
              {job.responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
          </div>

          <p className="text-gray-500 mb-6">
            Application Deadline: {job.applicationDeadline}
          </p>
        </div>

        <form
          className="bg-white shadow-md rounded-lg p-10 mt-6"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl text-center text-[#116D6E] font-semibold mb-4">
            Apply Now
          </h2>

          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={user.displayName}
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#116D6E] focus:border-[#116D6E]"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              defaultValue={user.email}
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#116D6E] focus:border-[#116D6E]"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#116D6E] focus:border-[#116D6E]"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="resume"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Resume
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#116D6E] focus:border-[#116D6E]"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="linkedin"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              LinkedIn Profile
            </label>
            <input
              type="url"
              id="linkedin"
              name="linkedin"
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#116D6E] focus:border-[#116D6E]"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="github"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              GitHub Profile
            </label>
            <input
              type="url"
              id="github"
              name="github"
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#116D6E] focus:border-[#116D6E]"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="portfolio"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Portfolio Link
            </label>
            <input
              type="url"
              id="portfolio"
              name="portfolio"
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#116D6E] focus:border-[#116D6E]"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="coverLetter"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Cover Letter
            </label>
            <textarea
              id="coverLetter"
              name="coverLetter"
              rows="4"
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#116D6E] focus:border-[#116D6E]"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="btn bg-[#116D6E] hover:bg-[#0e5a5a] text-white px-6 py-2 rounded-md hover:rounded-3xl shadow-lg transition-all duration-200"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApply;
