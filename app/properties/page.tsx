import Image from "next/image"
import Link from "next/link"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { getAllProperties } from "@/lib/properties"

export default function PropertiesPage() {
  const properties = getAllProperties()

  return (
    <>
      <Header />
      <main className="bg-background">
        <section className="border-b border-gold/30 bg-dark py-10 md:py-14">
          <div className="mx-auto mt-20 max-w-7xl px-6">
            <h1 className="text-3xl font-bold uppercase tracking-tight text-light md:text-4xl">
              Property Listings
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-light/80 md:text-base">
              Explore curated properties from Lin&apos;s Team and click any listing to view full
              details, photos, and agent information.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {properties.map((property) => (
                <Link
                  key={property.slug}
                  href={`/properties/${property.slug}`}
                  className="group flex flex-col overflow-hidden rounded-lg border border-gray-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  aria-label={`View details for ${property.address}`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={property.heroImage}
                      alt={property.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2 p-5">
                    {/* <p className="text-xl font-bold text-foreground">{property.price}</p> */}
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {property.address}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      <span>
                        {property.bedrooms} <span className="font-normal">Bedrooms</span>
                      </span>
                      <span>
                        {property.bathrooms} <span className="font-normal">Bathrooms</span>
                      </span>
                      <span>
                        {property.sqft.toLocaleString()} <span className="font-normal">Sq.Ft</span>
                      </span>
                    </div>
                    <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">
                      {property.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

