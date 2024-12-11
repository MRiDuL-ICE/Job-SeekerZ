import React from "react";
import { motion } from "motion/react";
import { easeInOut, reverseEasing } from "motion";
import img1 from "../../assets/img/img1.jpg";
import img2 from "../../assets/img/img2.jpg";

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-100 min-h-screen">
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
              className="w-[38rem] rounded-t-[4rem] rounded-br-[5rem] shadow-2xl border-b-[1rem] border-l-[10px] border-[#116D6E]"
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
              className="w-[38rem] top-50 rounded-t-[4rem] rounded-br-[5rem] shadow-2xl border-b-[1rem] border-l-[10px] border-[#116D6E]"
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
            <button className="btn bg-[#116D6E] text-white">Get Started</button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
