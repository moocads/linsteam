"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin } from "lucide-react"


const CONTACT_INFO = [
  {
    icon: Phone,
    label: "Phone",
    value: "(647) 615-9999",
    href: "tel:(647) 615-9999",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@linsteam.ca",
    href: "mailto:info@linsteam.ca",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "8300 Woodbine Ave suite 500, Markham, ON L3R 9Y7",
    href: "https://maps.app.goo.gl/fQgS24DpnnmfLuW38",
  },
] as const

export default function ContactSection() {
  return (
    <section id="contact" className="bg-dark py-0">
      <div className="flex flex-col lg:flex-row">
        {/* Team Photo */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative min-h-[300px] w-full lg:w-1/2"
        >
          <Image
            src="/images/team.jpg"
            alt="Lin's Team group photo"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex w-full flex-col justify-center gap-8 bg-dark/95 px-8 py-12 lg:w-1/2 lg:px-16"
        >
          <h2 className="text-3xl font-bold uppercase tracking-tight text-light md:text-4xl">
            Contact Us
          </h2>

          <div className="flex flex-col items-start gap-4">
            {CONTACT_INFO.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-4 text-light/90 transition-colors duration-300 hover:text-gold"
                aria-label={`${item.label}: ${item.value}`}
              >
                <item.icon className="h-5 w-5 flex-shrink-0 text-gray" />
                <span className="text-sm">{item.value}</span>
              </a>
            ))}
          </div>

          {/* QR Codes placeholder */}
          <div className="flex gap-4">
            <div className="flex h-36 w-36 items-center justify-center rounded-lg bg-light p-0">
              <div className="flex h-full w-full flex-col items-center justify-center gap-1 rounded border border-gray-border">
               <Image src="/images/wechat.jpg" alt="Wechat" width={200} height={200} />
              </div>
            </div>
        <div className="flex h-36 w-36 items-center justify-center rounded-lg bg-light p-0">
              <div className="flex h-full w-full flex-col items-center justify-center gap-1 rounded border border-gray-border">
               <Image src="/images/red.jpg" alt="小红书" width={200} height={200} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
