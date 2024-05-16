/*import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right","spring",0.5 * index, 0.75 )} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div options={{max: 45, scale:1, speed: 450}} className="bg-tertiary rounded-[20px] py-t px-12 min-h-[280px] flex jusitfy-evenl items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)}> 
        Hi, I'm Golsa, a third year Computer Science student 
        with a deep passion for various fields in Computer Science
        including Software Development, Front-end and Game Development.
        I'm skilled in Java, Python and C, with expertise in framworks
        like React, Node.js and Three.js. I'm a quick learner and 
        enjoy working in a team to create efficient, scalable, and 
        user-friendly solutions that solve real-world problems. Let's 
        work together to bring ideas to life!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}

      </div>
    </>
  )
}

export default SectionWrapper(About, "about")*/

/*import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div options={{ max: 45, scale: 1, speed: 450 }} className="bg-tertiary rounded-[20px] py-t px-12 min-h-[280px] flex justify-evenl items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4"> 
        Hi, I'm Golsa, a third year Computer Science student 
        with a deep passion for various fields in Computer Science
        including Software Development, Front-end and Game Development.
        I'm skilled in Java, Python and C, with expertise in frameworks
        like React, Node.js and Three.js. I'm a quick learner and 
        enjoy working in a team to create efficient, scalable, and 
        user-friendly solutions that solve real-world problems. Let's 
        work together to bring ideas to life!
      </motion.p>

      <div className="mt-10 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");*/

import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div options={{ max: 45, scale: 1, speed: 450 }} className="bg-tertiary rounded-[20px] py-t px-12 min-h-[280px] flex justify-evenl items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        <h2 className={styles.sectionHeadText}>Overview</h2>
        <p className={styles.sectionSubText}>Introduction</p>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4"> 
        Hi, I'm Golsa, a third year Computer Science student 
        with a deep passion for various fields in Computer Science
        including Software Development, Front-end and Game Development.
        I'm skilled in Java, Python and C, with expertise in frameworks
        like React, Node.js and Three.js. I'm a quick learner and 
        enjoy working in a team to create efficient, scalable, and 
        user-friendly solutions that solve real-world problems. Let's 
        work together to bring ideas to life!
      </motion.p>

      <div className="mt-4 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");





