import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import axios from "axios";

const MyApplications = () => {
  const { user, loading } = useAuth();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // fetch(`http://localhost:3000/job-application?email=${user.email}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setJobs(data);
    //   });

    axios.get(`http://localhost:3000/job-application?email=${user.email}`, {withCredentials: true})
    .then(res => {
      setJobs(res.data)
    })


  }, [user.email]);

  if (loading) {
    return (
      <div className="w-full flex justify-center items-center mx-auto my-40">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  const handleWithdraw = (id) => {
    console.log(id);
    fetch(`http://localhost:3000/job-application/${id}`, {
      method: "DELETE",
    });
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    })
      .then((res) => {
        console.log(res)
        if (res.isConfirmed) {
          
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          const rem = jobs.filter((job) => job._id != id);
          setJobs(rem);
        }
      })
      .catch(err => {
        Swal.fire({
          title: "Something Wrong!",
          text: err,
          icon: "error"
        });
      })
  };

  return (
    <div className="my-10 md:my-36">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center">
          Applications Submitted
        </h2>
        {jobs.length === 0 ? (
          <p className="text-center text-gray-500">
            No applications available.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse border border-gray-200 shadow-lg">
              <thead className="bg-gray-100 text-sm md:text-base">
                <tr>
                  <th className="border border-gray-300 px-2 md:px-4 py-2">
                    Name
                  </th>
                  <th className="border border-gray-300 px-2 md:px-4 py-2">
                    Job Title
                  </th>
                  <th className="border border-gray-300 px-2 md:px-4 py-2">
                    Company
                  </th>
                  <th className="border border-gray-300 px-2 md:px-4 py-2">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="text-center">
                {jobs.map((job) => (
                  <tr
                    key={job._id}
                    className="hover:bg-gray-50 text-xs md:text-sm"
                  >
                    <td className="border border-gray-300 px-2 md:px-4 py-2">
                      {job.name}
                    </td>
                    <td className="border border-gray-300 px-2 md:px-4 py-2">
                      {job.tittle}
                    </td>
                    <td className="border border-gray-300 px-2 md:px-4 py-2 flex items-center gap-2">
                      <img className="w-[40px] h-[40px]"
                        src={job.company_logo}
                        // className="w-6 h-6 md:w-8 md:h-8 mr-1 md:mr-2 rounded-full"
                      />
                      {job.company}
                    </td>
                    <td className="border border-gray-300 px-2 md:px-4 py-2 text-center">
                      <button
                        onClick={() => handleWithdraw(job._id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-1 md:px-4 py-1 md:py-2 rounded shadow text-xs md:text-sm"
                      >
                        Withdraw
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
  );
};

export default MyApplications;
