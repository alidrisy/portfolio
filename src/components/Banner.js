import React from "react";
import Image from "../assets/avatar.svg";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      id='home'
      className='min-h-[85vh] lg:min-h-[90vh] flex items-center'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row'>
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[35px] lg:text-[60px]  font-bold uppercase leading-[0.8]'
            >
              Abdulrahman <span>Alidrisy</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 text-[26px] lg:text-[45px] font-secondary font-semibold uppercase leading-[1]'
            >
              <span className='mr-3  text-white'>I am a</span>
              <TypeAnimation
                sequence={[
                  "Frontend Developer",
                  2000,
                  "Backend Developer",
                  2000,
                  "Fullstack Developer",
                  2000,
                ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-8 max-w-lg mx-auto lg:mx-0'
            >
              A dedicated software engineer with a passion for building robust
              and scalable applications. I strive to create innovative solutions
              that meet user needs and drive business success.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className='flex gap-x-6 max-w-max mb-12 items-center mx-auto lg:mx-0'
            >
              <button className='btn btn-sm'>Connect Me</button>
              <a href='#' className='text-gradient btn-link'>
                My Portfolio
              </a>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'
            >
              <a href='#'>
                <FaGithub className='icon' />
              </a>
              <a href='#'>
                <FaLinkedin className='icon' />
              </a>
              <a href='#'>
                <FaTwitter className='icon' />
              </a>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn("down", 0.5)}
            initial='hidden'
            whileInView={"show"}
            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'
          >
            <img src={Image} alt='avatar' />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
