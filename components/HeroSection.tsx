"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero_banner.jpg"
        alt="Luxury Toronto property showcasing Lin's Team real estate expertise"
        fill
        className="object-cover"
        priority
        quality={90}
      />

      {/* Gradient overlay: 0% #0B0B0B 100% opacity → 62% #3C3C3C 52% opacity → 100% #717171 0% opacity */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgb(0, 0, 0) 0%, rgba(26, 26, 26, 0.52) 52%, rgba(113, 113, 113, 0) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center gap-6"
        >
          <h1 className="text-balance text-4xl font-bold uppercase leading-tight tracking-tight text-light md:text-5xl lg:text-6xl">
            <span className="text-gold">Beyond Buying & <span className="text-tertiary">Selling</span></span>
            <br />
            We Build Property Value.
          </h1>

          <p className="text-sm font-medium uppercase tracking-widest text-gold/80 md:text-base">
            {"Toronto's Award-Winning Real Estate Growth Team."}
          </p>

          <Button
            asChild
            size="lg"
            className="mt-4 text-sm font-semibold uppercase tracking-widest transition-transform duration-300 hover:scale-[1.02]"
          >
            <Link href="#about">Learn More</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
