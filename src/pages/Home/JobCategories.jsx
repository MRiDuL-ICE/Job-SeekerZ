import React, { useState, useRef } from "react";
import { BsBriefcase } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { FaChartBar } from "react-icons/fa";
import { HiCode } from "react-icons/hi";
import { HiUsers } from "react-icons/hi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdOutlineVerified } from "react-icons/md";
import categoryimg from '../../assets/lottie/category.json'
import hiringimg from '../../assets/lottie/hiringbg.json'
import Lottie from "lottie-react";

const JobCategories = () => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const categories = [
    {
      title: "Marketing & Sale",
      jobs: "1526 Jobs Available",
      icon: BsBriefcase,
      color: "bg-blue-100",
    },
    {
      title: "Customer Help",
      jobs: "185 Jobs Available",
      icon: BiSupport,
      color: "bg-purple-100",
    },
    {
      title: "Finance",
      jobs: "168 Jobs Available",
      icon: FaChartBar,
      color: "bg-green-100",
    },
    {
      title: "Software",
      jobs: "1856 Jobs Available",
      icon: HiCode,
      color: "bg-yellow-100",
    },
    {
      title: "Human Resource",
      jobs: "165 Jobs Available",
      icon: HiUsers,
      color: "bg-red-100",
    },
  ];

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300; // Adjust this value to control scroll distance
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  // Check scroll possibility on mount and after content changes
  React.useEffect(() => {
    checkScroll();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll);

      return () => {
        container.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      };
    }
  }, []);

  return (
    <div className="w-full mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-[#116D6E] mb-4">
          Browse by category
        </h2>
        <p className="text-gray-600">
          Find the job that's perfect for you. about 800+ new jobs everyday
        </p>
      </div>

      {/* Categories Section */}
      <div className="relative flex justify-center items-center mx-auto">
        {/* Navigation Arrow - Left */}
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute mx-auto -left-10 top-10 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 z-10 transition-opacity duration-300"
          >
            <IoIosArrowBack className="text-gray-600 text-xl" />
          </button>
        )}

        {/* Categories Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto pb-4 scroll-smooth hide-scrollbar"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex-none w-64 p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${category.color}`}>
                  <category.icon className="text-2xl text-[#116D6E]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0c4f50] mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-500">{category.jobs}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrow - Right */}
        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute -right-10 top-10 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 z-10 transition-opacity duration-300"
          >
            <IoIosArrowForward className="text-gray-600 text-xl" />
          </button>
        )}
      </div>

      {/* Hiring Banner */}
      <div className="mt-12 p-8 bg-white rounded-xl border border-gray-200 flex md:flex-row flex-col items-center justify-between">
        <div className="flex md:flex-row flex-col justify-start items-center">
          <div className="text-left flex md:flex-row flex-col items-center">
            <div className="md:w-1/4">
                <Lottie className="w-6/7" animationData={categoryimg}></Lottie>
            </div>
            <div>
            <p className="text-gray-500 mb-2">WE ARE</p>
            <h3 className="text-4xl font-bold text-[#116D6E] mb-1">HIRING</h3>
            <p className="text-gray-600">
              Let's Work Together & Explore Opportunities
            </p>
            </div>
          </div>
          <div className="px-6 md:py-0 py-6">
            <Lottie className="w-44" animationData={hiringimg}></Lottie>
          </div>
        </div>
        <button className="bg-[#116D6E] w-44 flex justify-center items-center gap-1 h-12 text-white px-6 py-2 rounded-lg hover:bg-[#155657] transition-colors duration-300">
        <MdOutlineVerified /> Apply now
        </button>
      </div>

      {/* Custom styles for hiding scrollbar */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default JobCategories;
