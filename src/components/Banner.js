import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Photo from "./Photo";
import { Link } from "react-scroll";
import X from "../assets/x.svg";

const Banner = () => {
  return (
    <section
      id='home'
      className='min-h-[88vh] lg:min-h-[90vh] flex items-center'
    >
      <div className='container mx-auto px-4'>
        <div className='flex flex-col-reverse lg:flex-row items-center gap-y-8 lg:gap-x-12'>
          <div className='flex-1 text-center lg:text-left'>
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className='text-2xl sm:text-3xl lg:text-5xl font-bold uppercase leading-tight mb-4'
            >
              Abdulrahman <span>Alidrisy</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 text-xl sm:text-2xl lg:text-4xl font-semibold uppercase'
            >
              <span className='mr-3 text-white'>I am a</span>
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
              className='mb-8 max-w-lg mx-auto lg:mx-0 text-sm sm:text-base'
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
              className='flex flex-col sm:flex-row gap-4 sm:gap-x-6 max-w-max mb-8 mx-auto lg:mx-0 items-center'
            >
              <a
                className='btn btn-sm flex justify-center items-center'
                href='./abdo_cv.pdf'
                target='_blank'
                rel="noopener noreferrer"
                download='Abdulrahman_Alidrisy_resume.pdf'
              >
                See My CV
              </a>
              <Link
                to='contact'
                activeClass='active'
                smooth={true}
                spy={true}
                className='text-gradient cursor-pointer btn-link text-center sm:text-left'
              >
                Connect With Me
              </Link>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className='flex justify-center lg:justify-start text-2xl gap-x-6 max-w-max mx-auto lg:mx-0'
            >
              <a href='https://github.com/alidrisy' target='_blank' rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <FaGithub />
              </a>
              <a
                href='https://www.linkedin.com/in/abdulrahman-alidrisy-7940b8271/'
                target='_blank'
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href='https://x.com/AbdulrahmanAdeb'
                className='text-xl text-white hover:text-accent transition-colors'
                target='_blank'
                rel="noopener noreferrer"
              >
                <img src={X} alt="X logo" className='h-6 w-6' />
              </a>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn("down", 0.5)}
            initial='hidden'
            whileInView={"show"}
            className='flex-1 max-w-[280px] sm:max-w-[320px] lg:max-w-[482px] mx-auto'
          >
            <Photo />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;