import { motion } from 'framer-motion'
import { ExternalLink, Github, Monitor, Layout, CheckCircle, Cloud, Clock } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projects = [
    {
        title: "Netflix Clone",
        description: "A fully functional Netflix clone with user authentication and movie browsing.",
        icon: Monitor,
        codeUrl: "https://abhisahani.netlify.app/login",
        liveUrl: "#",
        tech: ["React", "Firebase", "Tailwind"]
    },
    {
        title: "Portfolio Website",
        description: "Modern portfolio built with React and smooth animations.",
        icon: Layout,
        codeUrl: "https://portfolio-abhi-silk.vercel.app/",
        liveUrl: "#home",
        tech: ["React", "Framer Motion", "Tailwind"]
    },
    {
        title: "To-Do List App",
        description: "Task management app with persistence and clean UI.",
        icon: CheckCircle,
        codeUrl: "#",
        liveUrl: "#",
        tech: ["JavaScript", "HTML", "CSS"]
    },
    {
        title: "Weather App",
        description: "Real-time weather forecasting using public APIs.",
        icon: Cloud,
        codeUrl: "#",
        liveUrl: "#",
        tech: ["React", "API", "CSS"]
    },
    {
        title: "Stopwatch Web App",
        description: "Precise stopwatch with lap functionality and modern design.",
        icon: Clock,
        codeUrl: "#",
        liveUrl: "#",
        tech: ["HTML", "CSS", "JS"]
    }
]

function Services() {
  return (
    <section className="section services" id="services">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section__title"
        >
          Projects
        </motion.h2>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section__subtitle"
        >
          My work
        </motion.span>

        <div className="services__container container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => {
                const Icon = project.icon
                return (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card className="h-full flex flex-col bg-white border rounded-3xl overflow-hidden hover:shadow-lg transition-shadow">
                            <CardHeader className="flex flex-row items-center gap-4 pt-6">
                                <div className="p-3 bg-gray-100 rounded-2xl">
                                    <Icon size={24} className="text-gray-900" />
                                </div>
                                <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow pt-0 pb-4">
                                <p className="text-sm text-gray-500 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map(t => (
                                        <span key={t} className="px-2 py-1 bg-gray-50 text-[10px] font-semibold text-gray-600 rounded-md border uppercase tracking-wider">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter className="flex gap-2 pt-0 pb-6">
                                <Button variant="outline" size="sm" className="rounded-xl flex-1 gap-2" asChild>
                                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                                        <Github size={14} /> Code
                                    </a>
                                </Button>
                                <Button size="sm" className="rounded-xl flex-1 gap-2 bg-gray-900 text-white" asChild>
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink size={14} /> Live
                                    </a>
                                </Button>
                            </CardFooter>
                        </Card>
                    </motion.div>
                )
            })}
        </div>    
    </section>
  )
}

export default Services
