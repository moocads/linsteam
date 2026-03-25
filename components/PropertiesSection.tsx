"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { getAllProperties } from "@/lib/properties"

interface PropertyCardProps {
  imageSrc: string
  imageAlt: string
  price: string
  address: string
  slug: string
  index: number
}

function PropertyCard({
  imageSrc,
  imageAlt,
  price,
  address,
  slug,
  index,
}: PropertyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
      className="transition-all duration-300 hover:-translate-y-1"
    >
      <Link
        href={`/properties/${slug}`}
        className="group flex flex-col gap-3"
        aria-label={`View details for ${address}`}
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-sm ">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col gap-1">
          {/* <p className="text-xl font-bold text-foreground">{price}</p> */}
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {address}
          </p>
        </div>
      </Link>
    </motion.div>
  )
}

export default function PropertiesSection() {
  const properties = getAllProperties().slice(0, 8)

  return (
    <section id="properties" className="bg-background py-16 md:py-24 border-t border-gold/30">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12 text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl"
        >
          Our <span className="text-tertiary">Sold</span> Properties
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {properties.map((property, index) => (
            <PropertyCard
              key={property.slug}
              imageSrc={property.heroImage}
              imageAlt={property.title}
              price={property.price}
              address={property.address}
              slug={property.slug}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 flex justify-center"
        >
          <Link
            href="/properties"
            className="border-0 bg-tertiary px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:scale-[1.02] hover:bg-foreground hover:text-background"
          >
            View Listing
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
