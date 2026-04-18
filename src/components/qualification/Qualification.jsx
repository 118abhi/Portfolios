import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GraduationCap, Briefcase, Calendar } from 'lucide-react'
import { cn } from "@/lib/utils"
import './qualification.css'

const education = [
    {
        title: "BSc in Computer Science",
        subtitle: "Rishi Ram Naresh Technical Institute, Uttar Pradesh",
        date: "2022 - Present"
    },
    {
        title: "Intermediate",
        subtitle: "Victory Inter College, Uttar Pradesh",
        date: "2020 - 2022"
    },
    {
        title: "Class X",
        subtitle: "Balkrishan I C Bhakriya Dewara Mau, Uttar Pradesh",
        date: "2020"
    }
]

const experience = [
    {
        title: "Frontend Developer Intern",
        subtitle: "Motioncut, Lucknow",
        date: "March 2024 - April 2024"
    },
    {
        title: "Full Stack Web Development Certification",
        subtitle: "Naresh IT, Hyderabad",
        date: "August 2023 - January 2024"
    }
]

function Qualification() {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <section className='qualification section' id="qualification">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="section__title"
            >
                Qualification
            </motion.h2>
            <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="section__subtitle"
            >
                My personal journey
            </motion.span>

            <div className="qualification__container container max-w-2xl">
                <div className="flex justify-center gap-8 mb-12">
                    <button
                        onClick={() => setActiveTab(1)}
                        className={cn(
                            "flex items-center gap-2 text-lg font-medium transition-colors",
                            activeTab === 1 ? "text-gray-900" : "text-gray-400 hover:text-gray-600"
                        )}
                    >
                        <GraduationCap size={24} /> Education
                    </button>

                    <button
                        onClick={() => setActiveTab(2)}
                        className={cn(
                            "flex items-center gap-2 text-lg font-medium transition-colors",
                            activeTab === 2 ? "text-gray-900" : "text-gray-400 hover:text-gray-600"
                        )}
                    >
                        <Briefcase size={22} /> Experience
                    </button>
                </div>

                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {(activeTab === 1 ? education : experience).map((item, index) => (
                                <div key={item.title} className="grid grid-cols-[1fr_max-content_1fr] gap-x-6">
                                    {index % 2 === 0 ? (
                                        <>
                                            <div className="text-right pb-10">
                                                <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
                                                <span className="text-sm text-gray-500 block mb-2">{item.subtitle}</span>
                                                <div className="flex items-center justify-end gap-1 text-xs text-gray-400 font-medium">
                                                    <Calendar size={12} /> {item.date}
                                                </div>
                                            </div>

                                            <div className="flex flex-col items-center">
                                                <span className="w-3 h-3 bg-gray-900 rounded-full" />
                                                <span className="w-[1px] h-full bg-gray-900 flex-grow my-1" />
                                            </div>

                                            <div />
                                        </>
                                    ) : (
                                        <>
                                            <div />

                                            <div className="flex flex-col items-center">
                                                <span className="w-3 h-3 bg-gray-900 rounded-full" />
                                                <span className="w-[1px] h-full bg-gray-900 flex-grow my-1" />
                                            </div>

                                            <div className="pb-10">
                                                <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
                                                <span className="text-sm text-gray-500 block mb-2">{item.subtitle}</span>
                                                <div className="flex items-center gap-1 text-xs text-gray-400 font-medium">
                                                    <Calendar size={12} /> {item.date}
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}

export default Qualification
