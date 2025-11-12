import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className='w-full h-full relative flex items-center justify-center'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.3, duration: 0.4, ease: "easeIn" },
        }}
        className="relative flex items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { delay: 0.5, duration: 0.4, ease: "easeInOut" },
          }}
          className='w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] xl:w-[480px] xl:h-[480px]  relative z-10'
        >
          <div className='w-full h-full rounded-full overflow-hidden bg-[#c9b8a3]'>
            <Image
                src="/avatar.png"
                alt="Abdulrahman Alidrisy"
                width={480}
                height={480}
                priority
                className="object-cover rounded-full w-full h-full"
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 480px"
            />
          </div>
        </motion.div>

        <motion.svg
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[340px] sm:h-[340px] xl:w-[500px] xl:h-[500px]'
          fill='transparent'
          viewBox='0 0 506 506'
          xmlns={"http://www.w3.org/2000/svg"}
        >
          <motion.circle
            cx='253'
            cy='253'
            r='250'
            stroke='#c9b8a3'
            strokeWidth='4'
            strokeLinecap={"round"}
            strokeLinejoin={"round"}
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
              transition: {
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;