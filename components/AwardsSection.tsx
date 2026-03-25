"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const AWARDS = [
  {
    src: "/images/2025-champion.jpg",
    alt: "Bay Street Group Champion Resale Award",
  },
  {
    src: "/images/2022-champion.jpeg",
    alt: "Bay Street Group Illuminate 2024 Award",
  },
   {
    src: "/images/2022-champion-02.jpg",
    alt: "Bay Street Group Illuminate 2024 Award",
  },
] as const

export default function AwardsSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-12 md:flex-row md:items-start md:justify-between">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-4 md:max-w-md"
          >
            <h2 className="text-3xl font-bold uppercase tracking-tight text-foreground md:text-4xl">
              Recognized{" "}
              <span className="text-gold">Excellence</span>
              <br />
              Year After Year
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {
                "Min Lin has been consistently recognized by Bay Street Group with Diamond Awards, Team Leader Championships, and Top Resale Achievements."
              }
            </p>
          </motion.div>

          {/* Awards Images */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex gap-6"
          >
            {AWARDS.map((award) => (
              <div
                key={award.alt}
                className="relative h-48 w-40 overflow-hidden rounded-lg shadow-md md:h-64 md:w-52"
              >
                <Image
                  src={award.src}
                  alt={award.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
