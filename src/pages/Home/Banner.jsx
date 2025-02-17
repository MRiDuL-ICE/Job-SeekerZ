import React from "react";
import { motion } from "motion/react";
import { easeInOut, reverseEasing } from "motion";
import img1 from "../../assets/img/img1.jpg";
import img2 from "../../assets/img/img2.jpg";

const Banner = () => {
  return (
    <div>
      <div className="hero w-4/5 bg-base-100 md:min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <motion.div className="">
            <motion.img
              animate={{ y: [50, 100, 50] }}
              transition={{
                duration: 3,
                delay: 0,
                ease: easeInOut,
                repeat: Infinity,
                repeatType: reverseEasing,
              }}
              src={img1}
              className="md:w-[38rem] w-[10rem] rounded-t-[4rem] rounded-br-[5rem] shadow-2xl border-b-[1rem] border-l-[10px] border-[#116D6E]"
            />
            <motion.img
              animate={{ x: [100, 150, 100] }}
              transition={{
                duration: 3,
                delay: 1.5,
                ease: easeInOut,
                repeat: Infinity,
                repeatType: reverseEasing,
              }}
              src={img2}
              className="md:w-[38rem] w-[10rem] top-50 rounded-t-[4rem] rounded-br-[5rem] shadow-2xl border-b-[1rem] border-l-[10px] border-[#116D6E]"
            />
          </motion.div>
          <motion.div
            animate={{ x: [0, 50, 0] }}
            transition={{
              duration: 3,
              delay: 0,
              ease: easeInOut,
              repeat: Infinity,
              repeatType: reverseEasing,
            }}
          >
            <motion.h1 className="text-5xl font-bold text-[#116D6E]">
              Latest job for you
            </motion.h1>
            <p className="py-6 w-2/3">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn px-6 py-2 bg-[#116D6E] text-white rounded-md hover:rounded-3xl hover:bg-[#116D6E]/90 transition-all duration-200">Get Started</button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
