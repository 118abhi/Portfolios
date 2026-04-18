import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'
import AboutImg from "../../assets/abhi.jpeg"
import CV from "../../assets/cv.pdf"
import Info from './Info'
import "./about.css"

function About() {
  return (
    <section className="about section" id="about">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section__title"
        >
          About Me
        </motion.h2>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section__subtitle"
        >
          My Introduction
        </motion.span>

        <div className="about__container container grid">
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              src={AboutImg}
              alt="About Me"
              className="about__img rounded-2xl shadow-lg"
            />

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="about__data"
            >
                <Info/>

                <p className="about__description">
                  A CS student specializing in Frontend and MERN stack, armed with
                  problem-solving skills and a thirst for learning. I thrive on challenges and embrace new
                  opportunities with enthusiasm. As a Frontend developer, I craft innovative solutions that make a difference.
                  {"Let's"} create the future together!
                </p>

                <motion.a
                  href={CV}
                  download=''
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="button button--flex"
                >
                  Download CV
                  <FileText size={20} className="button__icon" />
                </motion.a>
            </motion.div>
        </div>
    </section>
  )
}

export default About
