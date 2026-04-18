import { motion } from 'framer-motion'
import FrontEnd from './FrontEnd'
import BackEnd from './BackEnd'
import Others from './Others'
import './skills.css'

function Skills() {
  return (
    <section className="skills section" id="skills">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section__title"
        >
          Skills
        </motion.h2>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section__subtitle"
        >
          My Technical Level
        </motion.span>

        <div className="skills__container container grid gap-8">
            <FrontEnd/>
            <BackEnd/>
        </div>
        <div className="container mt-8">
          <Others/>
        </div>
    </section>
  )
}

export default Skills
