import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, ExternalLink } from 'lucide-react'
import './footer.css'

function Footer() {
  return (
    <footer className="footer bg-white border-t py-12">
      <div className="footer__container container">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="footer__title text-2xl font-bold text-center mb-8"
        >
          Abhii
        </motion.h1>

        <ul className="footer__list flex justify-center gap-8 mb-8">
          <li>
            <a href="#about" className='text-sm text-gray-500 hover:text-gray-900 transition-colors'>About</a>
          </li>
          <li>
            <a href="#services" className='text-sm text-gray-500 hover:text-gray-900 transition-colors'>Projects</a>
          </li>
          <li>
            <a href="#qualification" className='text-sm text-gray-500 hover:text-gray-900 transition-colors'>Education</a>
          </li>
        </ul>

        <div className="footer__social flex justify-center gap-6 mb-8">
            {[
                { name: 'HackerRank', href: '#' },
                { name: 'LeetCode', href: '#' },
                { name: 'CodeChef', href: '#' },
                { name: 'CodeForces', href: '#' }
            ].map((social) => (
                <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-semibold text-gray-400 hover:text-gray-900 transition-colors flex items-center gap-1"
                >
                    {social.name} <ExternalLink size={10} />
                </a>
            ))}
        </div>

        <div className="flex justify-center gap-6 mb-8 text-gray-400">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-gray-900 transition-colors"><Github size={20} /></a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-gray-900 transition-colors"><Linkedin size={20} /></a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="hover:text-gray-900 transition-colors"><Twitter size={20} /></a>
        </div>

        <span className='footer__copy block text-center text-xs text-gray-400'>
          &#169; {new Date().getFullYear()} Abhisahani. All rights reserved
        </span>
      </div>
    </footer>
  )
}

export default Footer
