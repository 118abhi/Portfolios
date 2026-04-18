import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function Data() {
  const [description, setDescription] = useState("");
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const descriptions = [
      "Logician fueling innovation. Thriving in change, I turn challenges into opportunities. Let's dream, create and inspire!",
      "Passionate software engineer driven by innovation. Join me in crafting the future, one line of code at a time!",
    ];
    const randomIndex = Math.floor(Math.random() * descriptions.length);
    setDescription(descriptions[randomIndex]);
  }, []);

  useEffect(() => {
    if (!description) return;
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      setDisplayedText(description.substring(0, currentIndex));
      currentIndex++;
      if (currentIndex > description.length) {
        clearInterval(typingInterval);
      }
    }, 40); // Faster typing speed
    return () => clearInterval(typingInterval);
  }, [description]);

  return (
    <div className="home__data">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="home__title"
        >
          Abhii Sahani
        </motion.h1>

        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="home__subtitle"
        >
          Aspiring Frontend Developer
        </motion.h3>

        <p className="home__description"> 
          {displayedText}
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-0.5 h-4 ml-1 bg-gray-900"
          />
        </p>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="button button--flex"
        >
          Say Hello
          <Send size={20} className="button__icon" />
        </motion.a>
    </div>
  )
}
