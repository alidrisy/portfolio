import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";
const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section
      id='about'
      className='section min-h-[80vh] py-[8vh] sm:mb-[10vh]'
      ref={ref}
    >
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10  lg:flex-row'>
          {/* <div className='flex-1 bg-about bg-no-repeat bg-contain h-[440px]  mix-blend-lighten bg-top'></div> */}
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className='flex-1'
          >
            <h2 className='h2 text-[50px] text-accent font-bold mb-2 max-sm:mb-1 max-sm:text-[40px]'>
              About Me
            </h2>
            <h3 className='h3 text-[30px] mb-4 max-sm:mb-2 max-sm:text-[20px]'>
              I'm a highly motivated and results-oriented Software Engineer.
            </h3>
            <p className='text-xl max-sm:text-lg'>
              I have an extensive experience in C, JavaScript, and Python.
              Proficient in MERN stack development and DevOps practices, with a
              proven track record in real-world projects through the ALX-SE
              Program by Holberton School. Demonstrates strong problem-solving
              skills and a passion for continuous learning and improvement.
            </p>

            <div className='flex flex-wrap font-tertiary gap-8 mt-12 max-sm:mt-6 lg:gap-x-10 '>
              <div>
                <div className='text-[45px] max-sm:text-[40px]  text-gradient mb-2 max-sm:mb-1'>
                  {inView ? <CountUp start={0} end={1} duration={2.5} /> : 0}
                </div>
                <div className='font-primary text-md max-sm:text-sm tracking-[2px]'>
                  Years of <br /> experience.
                </div>
              </div>
              <div>
                <div className='text-[45px] max-sm:text-[40px]  text-gradient mb-2 max-sm:mb-1'>
                  {inView ? <CountUp start={0} end={38} duration={2.5} /> : 0}
                </div>
                <div className='font-primary text-md max-sm:text-sm tracking-[2px]'>
                  Github <br /> Repositories.
                </div>
              </div>
              <div>
                <div className='text-[45px] max-sm:text-[40px]  text-gradient mb-2 max-sm:mb-1'>
                  {inView ? <CountUp start={0} end={5} duration={2.5} /> : 0}
                </div>
                <div className='font-primary text-md max-sm:text-sm tracking-[2px]'>
                  Technologies <br /> Mastered.
                </div>
              </div>
              <div>
                <div className='text-[45px] max-sm:text-[40px]  text-gradient mb-2 max-sm:mb-1'>
                  <p>
                    +
                    {inView ? <CountUp start={0} end={2700} duration={3} /> : 0}
                  </p>
                </div>
                <div className='font-primary text-md max-sm:text-sm tracking-[2px]'>
                  Code <br /> Commits.
                </div>
              </div>
            </div>
            <div className='hidden lg:flex gap-x-6 max-w-max mt-12 items-center mx-auto lg:mx-0'>
              <a
                className='btn-sm btn flex justify-center items-center cursor-pointer '
                href='./abdo_cv.pdf'
                target='_blank'
                rel='noreferrer'
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
