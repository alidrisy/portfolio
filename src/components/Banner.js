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
      <div className='container mx-auto'>
        <div className='flex flex-col-reverse  gap-y-8 xl:flex-row items-center max-sm:mb-16'>
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[35px] lg:text-[60px]  font-bold uppercase leading-[0.8] pb-2'
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
              className='flex gap-x-6 max-w-max mb-12  items-center mx-auto lg:mx-0'
            >
              <a
                className='btn-sm btn flex justify-center items-center cursor-pointer '
                href='https://drive.google.com/file/d/1mqBmegInAGrOZlTajf-cRHfsX-qJ3AMT'
                target='_blank'
                download='Abdulrahman_Alidrisy_resume.pdf'
              >
                See My Cv
              </a>
              <Link
                to='contact'
                activeClass='active'
                smooth={true}
                spy={true}
                className='text-gradient cursor-pointer btn-link'
              >
                Connect Me
              </Link>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'
            >
              <a href='https://github.com/alidrisy' target='_blank'>
                <FaGithub className='icon' />
              </a>
              <a
                href='https://www.linkedin.com/in/abdulrahman-alidrisy-7940b8271/'
                target='_blank'
              >
                <FaLinkedin className='icon' />
              </a>
              <a
                href='https://x.com/AbdulrahmanAdeb'
                className='text-xl text-white'
                target='_blank'
              >
                <img src={X} className='h-[18px] pt-[2px]' />
              </a>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn("down", 0.5)}
            initial='hidden'
            whileInView={"show"}
            className='flex flex-1 max-w-[320px] lg:max-w-[482px]'
          >
            <Photo />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
