"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

const ACHIEVEMENTS = [
  "Founder of Lin's Team since 2017",
  "Top Individual Producer (2016-2024)",
  "Champion Team Leader (2018-2025)",
  "Dedicated to maximizing client outcomes through strategy, resources, and execution",
] as const

export default function AboutSection() {
  return (
    <section id="about" className="relative py-0">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/about-background.jpg')" }}
      />
      <div className="absolute inset-0" aria-hidden />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-12 md:flex-row md:gap-24">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative w-full max-w-sm flex-shrink-0 overflow-hidden md:w-1/3"
          >
            <Image
              src="/images/lin_min_original.png"
              alt="Min Lin, Founder and Team Leader of Lin's Team"
              width={400}
              height={500}
              className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </motion.div>

          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-4"
          >
            <h2 className="text-3xl font-bold tracking-tight text-light md:text-4xl">
              MIN LIN
            </h2>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-semibold text-gold">
                Founder & Team Leader
              </p>
              <p className="text-sm font-semibold text-gold">
                Founder & Vice President, Bay Street Group
              </p>
            </div>
            <ul className="mt-4 flex flex-col gap-3">
              {ACHIEVEMENTS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                  <span className="text-sm leading-relaxed text-light/90">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
