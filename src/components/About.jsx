import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { sectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full blue-white-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-[#0B0B3B] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);



const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className='flex justify-between '>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          As a Computer Science graduate with a passion for web 
          development, I have honed my skills in Python, JavaScript, 
          React, Django, HTML/CSS, Tailwind, and more. What sets me 
          apart is my unique blend of interdisciplinary experiences 
          and a commitment to continuous learning, which fuels my 
          ability to innovate and adapt. I specialize in delivering 
          efficient, scalable, and impactful web solutions that may 
          not always follow conventional paths, but yield 
          extraordinary results.
          <br /><br />
          "We cannot solve our problems with the same thinking we used when we created them."
          <br /><p className='text-right pr-10'>- Albert Einstein</p> 
        </motion.p>

        <img 
          src="src/assets/about_me.png" 
          alt="me" 
          className='w-[400px] h-[300px] object-contain shadow-xl'
        />

      </div>
      

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default sectionWrapper(About, 'about')