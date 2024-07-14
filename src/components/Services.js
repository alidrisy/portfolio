import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const services = [
  {
    num: "01",
    title: "Backend Development",
    desc: "Expert in building robust and scalable backend systems using Node.js, Express, and MongoDB.",
    href: "",
  },
  {
    num: "02",
    title: "API Development",
    desc: "Proficient in designing and implementing RESTful APIs with comprehensive documentation.",
    href: "",
  },
  {
    num: "03",
    title: "Database Management",
    desc: "Experienced in working with SQL and NoSQL databases, ensuring data integrity and performance optimization.",
    href: "",
  },
  {
    num: "04",
    title: "DevOps & Deployment",
    desc: "Skilled in deploying applications and managing CI/CD pipelines for continuous integration and delivery.",
    href: "",
  },
];

const Services = () => {
  return (
    <section id='services' className='section min-h-[100vh]'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:space-x-10'>
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='mb-12 lg:mb-0 lg:bg-services lg:bg-bottom mix-blend-lighten bg-no-repeat bg-contain bg-start '
          >
            <h2 className='h2 max-sm:text-[35px] font-bold text-accent mb-6 max-sm:mb-3'>
              What I Do.
            </h2>
            <h3 className='h3 max-sm:text-[25px] max-w-[455px] mb-10 max-sm:mb-5'>
              I specialize in building backend systems and APIs, managing
              databases, and deploying applications.
            </h3>
            <Link
              to='work'
              smooth={true}
              spy={true}
              className='btn btn-sm p-3 cursor-pointer'
              href=''
            >
              See My Work
            </Link>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div>
              {services.map((service) => (
                <div className='border-b border-white/20 h-[146px] mb-[38px]'>
                  <div className='flex items-center gap-4 mb-6 max-w-[676px]'>
                    <div className='text-accent text-[40px] self-start pt-1 font-bold'>
                      {service.num}
                    </div>
                    <div>
                      <h4 className='text-[20px] hover:text-gradient font-semibold tracking-wider font-primary mb-6'>
                        {service.title}
                      </h4>
                      <p className='font-secondary leading-tight line-clamp-2'>
                        {service.desc}
                      </p>
                    </div>
                    <div className='flex items-end flex-col'>
                      <a className='btn h-9 w-9 mb-[42px] transition-all duration-300 flex justify-center items-center hover:rotate-45 cursor-pointer'>
                        <BsArrowUpRight className=' text-2xl' />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
