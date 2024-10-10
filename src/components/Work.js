import React from "react";
import image1 from "../assets/ijar1.png";
import image2 from "../assets/portfolio-img2.png";
import { FaGithub } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const projects = [
  {
    num: "01",
    category: "Full-Stack",
    title: "Ijar",
    description:
      "Ijar simplifies rentals, whether you're sharing your car or need one. If your car's idle and you want extra cash, or you need a ride for the weekend, Ijar connects owners and renters easily, making the process effortless.",
    stack:
      "Express.js, React, MongoDB, Node.js, ShadCN, PaypalAPI, Tailwind.css",
    image: image1,
    live: "https://ijar.tech",
    github: "https://github.com/alidrisy/ijar",
  },
  {
    num: "02",
    category: "Full-Stack",
    title: "AudioTube",
    description:
      "AudioTube makes listening to YouTube content effortless. Stream or download YouTube videos as audio, saving data and storage space. Ideal for music, podcasts,  AudioTube works seamlessly even with slow internet. Enjoy it.",
    stack: "React, Tailwind.css, Python, Flask, YouTubeDL, Ffmpeg",
    image: image2,
    live: "https://github.com/alidrisy/AudioTube.1.2",
    github: "https://github.com/alidrisy/AudioTube.1.2",
  },
];

const Work = () => {
  return (
    <section id='work' className='section'>
      <div className='container mx-auto'>
        <div className='flex-1 flex-col gap-y-12 mb-10 lg:mb-0'>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial='hidden'
            whileInView={"show"}
          >
            <h2 className='h2 leading-tight text-accent font-bold '>
              My Latest <br /> Work
            </h2>
            <p className='max-w-2xl text-xl mb-10'>
              I worked on various projects that involve building full-stack
              applications. I'm always looking for opportunities to collaborate
              with talented developers and teams.
            </p>
            <div className='mb-10'>
              <a
                target='_blank'
                href='https://github.com/alidrisy?tab=repositories'
                className='btn btn-sm p-3 cursor-pointer mb-16 font-bold'
              >
                See All Projects
              </a>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial='hidden'
            whileInView={"show"}
            className='flex flex-col xl:flex-row gap-10'
          >
            {projects.map((pj) => (
              <div className='group relative overflow-hidden border-2 border-white/20 rounded-xl'>
                <div className='group-hover:bg-black/70 w-full h-full absolute inset-0 z-40 transition-all duration-300'></div>
                <img
                  className='group-hover:scale-125 transition-all duration-500'
                  src={pj.image}
                  alt='project1'
                />
              <div className="overflow-auto">

                <div className='absolute -bottom-full left-12 group-hover:bottom-64 max-sm:group-hover:bottom-52 transition-all duration-500 max-sm:duration-700 text-white font-bold text-[15px] z-50'>
                  <span className='text-gradient max-sm:text-lg'>
                    {pj.category}
                  </span>
                </div>
                <div className='absolute -bottom-full left-12 max-sm:left-44 group-hover:bottom-52 transition-all duration-700 max-sm:duration-700 text-white font-bold text-[15px] z-50'>
                  <span className='text-3xl max-sm:text-lg'>{pj.title}</span>
                </div>
                <div className='absolute -bottom-full left-12 group-hover:bottom-20 transition-all duration-1000 text-white font-bold text-[15px] z-50 max-w-[500px]'>
                  <span className='text-lg font-[500] max-sm:text-sm'>
                    {pj.description}
                  </span>
                </div>
                <div className='absolute -bottom-full left-12 group-hover:bottom-4 mx-w-[30px] transition-all duration-[1200ms] text-white font-bold text-[15px] z-50 max-w-[500px] lg:max-w-[400px] max-sm:max-w-[300px] max-xs:max-w-[200px]'>
                  <span className='text-xl text-accent font-bold max-sm:text-sm'>
                    {pj.stack}
                  </span>
                </div>
                <div className='flex items-end justify-end space-x-2 absolute -bottom-full right-8 group-hover:bottom-5 transition-all duration-1000 text-white font-bold text-[15px] z-50'>
                  <a
                    href={pj.live}
                    target='_blank'
                    className='btn  h-9 w-9  max-sm:h-5 max-sm:w-5 transition-all duration-300 flex justify-center items-center hover:rotate-45 hover:scale-110 cursor-pointer'
                    rel='noreferrer'
                  >
                    <BsArrowUpRight className='text-2xl max-sm:text-sm' />
                  </a>
                  <a
                    href={pj.github}
                    target='_blank'
                    className='btn h-9 w-9 max-sm:h-5 max-sm:w-5  transition-all duration-500 flex justify-center items-center hover:scale-110 cursor-pointer'
                    rel='noreferrer'
                    >
                    <FaGithub className='text-2xl max-sm:text-sm' />
                  </a>
                </div>
                    </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
