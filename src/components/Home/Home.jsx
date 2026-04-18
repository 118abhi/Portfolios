import { motion } from 'framer-motion';
import './home.css'
import Social from './Social'
import Data from './Data'
import ScrollDown from './ScrollDown'

export default function Home() {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="home__content grid"
        >
          <Social />

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="home__img"
          ></motion.div>

          <Data/>
        </motion.div>

        <ScrollDown/>
      </div>
    </section>
  )
}
