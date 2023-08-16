import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { github } from '../assets'
import { sectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = ({ index, name, title, description, image, source_code_link, tags }) => {
  return (
    <motion.div
      variants={fadeIn('up', 'straight', index * 0.5, 0.75)}
    >
      <Tilt 
        options={{
          max: 25,
          scale: 1,
          speed: 450,
        }}
        className='bg-[#0B0B3B] p-5 rounded-2xl sm:w-[360px] w-full'
      >

        <div className='relative w-full h-[230px]'>
          <img 
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div 
              onClick={() => window.open(source_code_link, '_blank')}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img 
                src={github} 
                alt='github'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>

            {/* for live link */}
            {/* <div 
              onClick={() => window.open(source_code_link, '_blank')}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img 
                src={github} 
                alt='github'
                className='w-1/2 h-1/2 object-contain'
              />
            </div> */}
          </div>
        </div>

        <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
      
        <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
        </div>
      </Tilt>
    </motion.div>
  )

}
 
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'> 
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Coupling my deep passion for learning with a hands-on approach, I continually broaden my skillset through a combination of academic studies, bootcamps, and tutorials, as well as embarking on entirely self-guided projects. The projects showcased here represent a diversity of learning pathways and encompass some of my proudest achievements to date. Reflecting both the depth and breadth of my experience, these works underline my tenacity, curiosity, and perpetual drive to embrace new challenges.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
          
      </div>
    </>
  )
}

export default sectionWrapper(Works, 'projects')