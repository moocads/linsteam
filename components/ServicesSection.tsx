"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface ServiceCardProps {
  title: string
  imageSrc: string
  imageAlt: string
  index: number
}

const SERVICES = [
  {
    title: "Real Estate Services",
    imageSrc: "/images/real-estate-service.jpg",
    imageAlt: "Professional real estate services by Lin's Team",
  },
  {
    title: "Home Staging Service",
    imageSrc: "/images/home-staging-service.jpg",
    imageAlt: "Professional home staging services",
  },
  {
    title: "Building Supply Network",
    imageSrc: "/images/building-supply-network-service.jpg",
    imageAlt: "Building supply network partnerships",
  },
  {
    title: "Renovation & Design",
    imageSrc: "/images/renovation-design-service.jpg",
    imageAlt: "Renovation and interior design services",
  },
] as const

function ServiceCard({ title, imageSrc, imageAlt, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
      className="group relative aspect-[1/1] overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
      <div className="absolute bottom-0 left-0 p-4">
        <h3 className="text-[30px] font-bold leading-tight text-light">
          {title}
        </h3>
      </div>
    </motion.div>
  )
}

export default function ServicesSection() {
  return (
    <section id="services" className="border-t border-gold/30 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12 text-center text-3xl font-bold tracking-tight text-dark md:text-4xl"
        >
          Our  <span className="text-tertiary">Full-Service</span> Ecosystem
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              imageSrc={service.imageSrc}
              imageAlt={service.imageAlt}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
