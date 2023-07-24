import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>
    <motion.p variants={fadeIn("", "", 0.1, 1)}
    className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
    Innovative full-stack software engineer with experience in HTML/CSS and JavaScript. I have experience in Oracle, MySQL, Python, Node.js, React, and Three.js. I'm a quick learner and collaborate closely with other developers to create efficient, scalable, and user-friendly solutions that solve real-world problems. See below on how to contact me!
    </motion.p>
    </>
  )
}

export default About