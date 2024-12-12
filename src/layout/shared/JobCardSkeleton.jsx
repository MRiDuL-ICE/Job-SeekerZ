import React from "react";

const JobCardSkeleton = () => {
  return (
    <div>
      <div className="bg-white rounded-2xl p-6 border border-gray-200">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gray-200 animate-pulse" />
            <div>
              <div className="h-5 w-32 bg-gray-200 rounded animate-pulse mb-2" />
              <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>
          <div className="h-6 w-20 bg-gray-200 rounded-lg animate-pulse" />
        </div>
        <div className="space-y-3 mb-4">
          <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse" />
        </div>
        <div className="flex gap-2 mb-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-6 w-20 bg-gray-200 rounded-full animate-pulse"
            />
          ))}
        </div>
        <div className="flex justify-between items-end mt-6">
          <div className="space-y-2">
            <div className="h-6 w-32 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
          </div>
          <div className="h-10 w-28 bg-gray-200 rounded-lg animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default JobCardSkeleton;
