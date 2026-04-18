import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const skills = [
    { name: "Node JS", level: "Expert" },
    { name: "Express JS", level: "Intermediate" },
    { name: "Firebase", level: "Intermediate" },
    { name: "MongoDB", level: "Beginner" },
    { name: "RESTful API", level: "Intermediate" },
    { name: "Appwrite", level: "Intermediate" },
]

function BackEnd() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className='skills__content p-8 border rounded-3xl bg-white shadow-sm hover:shadow-md transition-shadow'
    >
        <h3 className="skills__title text-center text-xl font-semibold mb-6">Back-End</h3>

        <div className="grid grid-cols-2 gap-y-4 gap-x-8">
            {skills.map((skill, index) => (
                <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start gap-2"
                >
                    <CheckCircle2 size={16} className="mt-1 text-gray-900" />
                    <div>
                        <h3 className="text-base font-medium leading-none">{skill.name}</h3>
                        <span className="text-xs text-gray-500">{skill.level}</span>
                    </div>
                </motion.div>
            ))}
        </div>
    </motion.div>
  )
}

export default BackEnd
