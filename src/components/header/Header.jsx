import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, User, FileText, Briefcase, GraduationCap, MessageSquare } from 'lucide-react'
import { cn } from "@/lib/utils"
import "./header.css"

const navItems = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Skills', href: '#skills', icon: FileText },
  { name: 'Projects', href: '#services', icon: Briefcase },
  { name: 'Education', href: '#qualification', icon: GraduationCap },
  { name: 'Contact Me', href: '#contact', icon: MessageSquare },
]

export default function Header() {
    const [activeNav, setActiveNav] = useState("#home")
    const [toggle, setToggle] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header className={cn(
            "fixed top-0 left-0 w-full z-[100] transition-all duration-300",
            scrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"
        )} id='header'>
            <nav className="container flex items-center justify-between px-4 mx-auto">
                <a href="index.html" className="text-xl font-semibold text-gray-900 transition-colors hover:text-gray-600">
                    Abhii Sahani
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:block">
                    <ul className="flex items-center gap-8">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.href}
                                    onClick={() => setActiveNav(item.href)}
                                    className={cn(
                                        "text-sm font-medium transition-colors hover:text-gray-900 flex items-center gap-1",
                                        activeNav === item.href ? "text-gray-900" : "text-gray-500"
                                    )}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button
                        onClick={() => setToggle(!toggle)}
                        className="p-2 text-gray-600 hover:text-gray-900"
                    >
                        {toggle ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {toggle && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden border-t"
                    >
                        <ul className="grid grid-cols-3 gap-4 p-6">
                            {navItems.map((item) => {
                                const Icon = item.icon
                                return (
                                    <li key={item.name}>
                                        <a
                                            href={item.href}
                                            onClick={() => {
                                                setActiveNav(item.href)
                                                setToggle(false)
                                            }}
                                            className={cn(
                                                "flex flex-col items-center gap-2 text-xs font-medium transition-colors p-2 rounded-lg",
                                                activeNav === item.href ? "bg-gray-100 text-gray-900" : "text-gray-500 hover:bg-gray-50"
                                            )}
                                        >
                                            <Icon size={20} />
                                            {item.name}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
