import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const Contact = () => {
  const info = [
    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      value: "(+966) 571 010 226",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "a.alidrisy6@gmail.com",
    },
    {
      icon: <FaMapMarkedAlt />,
      title: "Address",
      value: "Riyadh, Saudi Arabia",
    },
  ];

  return (
    <section id='contact' className='py-16 lg:section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-22 max-sm:gap-10'>
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex justify-start items-center'
          >
            <div>
              <h4 className='text-2xl uppercase text-accent font-medium mb-2 tracking-wide'>
                Get in touch
              </h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                let's work <br /> together!
              </h2>
              <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
                <ul className='flex flex-col gap-10'>
                  {info.map((item, index) => (
                    <li key={index} className='flex items-center gap-6'>
                      <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-gradient text-accent rounded-md flex items-center justify-center'>
                        <div className='text-[28px]'>{item.icon}</div>
                      </div>
                      <div className='flex-1'>
                        <p className='text-white/60'>{item.title}</p>
                        <h3 className='text-xl'>{item.value}</h3>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
          <motion.form
            variants={fadeIn("left", 0.5)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'
          >
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type='text'
              placeholder='Your name'
            />
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type='text'
              placeholder='Your email'
            />
            <input
              className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
              type='text'
              placeholder='Your message'
            />
            <button className='btn btn-lg'>Send message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
