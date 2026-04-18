import { motion } from 'framer-motion'
import { Award, Briefcase, Headphones } from 'lucide-react'
import "./about.css"

const infoItems = [
  { icon: Award, title: "Experience", subtitle: "< 6 Months Working" },
  { icon: Briefcase, title: "Completed", subtitle: "≈ 5 Projects" },
  { icon: Headphones, title: "Support", subtitle: "Online 24/7" },
]

export default function Info() {
  return (
    <div className="about__info grid grid-cols-3 gap-4">
      {infoItems.map((item, index) => {
        const Icon = item.icon
        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="about__box p-4 border rounded-xl flex flex-col items-center text-center bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <Icon size={24} className="mb-2 text-gray-900" />
            <h3 className="about__title text-sm font-semibold">{item.title}</h3>
            <span className="about__subtitle text-xs text-gray-500">{item.subtitle}</span>
          </motion.div>
        )
      })}
    </div>
  )
}
