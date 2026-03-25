import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"


import Header from "@/components/Header"
import Footer from "@/components/Footer"
import PropertyGallery from "@/components/PropertyGallery"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { getAllProperties, getPropertyBySlug } from "@/lib/properties"

type PropertyPageProps = {
  // In newer Next.js versions, `params` is async in server components
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  const properties = getAllProperties()

  return properties.map((property) => ({
    slug: property.slug,
  }))
}

export default async function PropertyDetailPage({ params }: PropertyPageProps) {
  const { slug } = await params
  const property = getPropertyBySlug(slug)

  if (!property) {
    notFound()
  }

  const mainImage = property.gallery[0] ?? property.heroImage

  return (
    <>
      <Header forceDark />
      <main className="bg-background">
        {/* Hero section */}
        <section className="relative h-[260px] overflow-hidden bg-dark md:h-[360px]">
          {mainImage && (
            <Image
              src={mainImage}
              alt={property.title}
              fill
              className="object-cover"
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/10" />
          <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 py-10">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold/80">
              Featured Listing
            </p>
            {/* <h1 className="mt-2 max-w-3xl text-3xl font-bold uppercase leading-tight tracking-tight text-light md:text-4xl">
              {property.title}
            </h1> */}
            <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-light/80">
              {property.address}
            </p>
            <p className="mt-4 text-3xl font-bold text-gold md:text-4xl">{property.price}</p>
            <div className="mt-4 flex flex-wrap gap-5 text-xs font-medium uppercase tracking-[0.22em] text-light/90">
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
          </div>
        </section>

        {/* Main content */}
        <section className="py-12 md:py-16">
          {/* Breadcrumb + back button */}
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 pb-6 text-xs md:text-sm">
            <nav aria-label="Breadcrumb" className="text-muted-foreground">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-gold">
                    Home
                  </Link>
                </li>
                <li className="text-gray">/</li>
                <li>
                  <Link href="/properties" className="hover:text-gold">
                    Properties
                  </Link>
                </li>
                <li className="text-gray">/</li>
                <li className="text-foreground">{property.address}</li>
              </ol>
            </nav>

            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-gray-border bg-dark text-[10px] font-semibold uppercase tracking-[0.22em] text-light"
            >
              <Link href="/properties">← Back to Properties</Link>
            </Button>
          </div>

          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
            {/* Left: gallery + description */}
            <div className="space-y-10">
              {/* Gallery */}
              <div className="space-y-4">
                <h2 className="text-lg font-semibold uppercase tracking-tight text-foreground">
                  Gallery
                </h2>
                <PropertyGallery images={property.gallery} title={property.title} />
              </div>

              {/* Description */}
              <div className="space-y-3">
                <h2 className="text-lg font-semibold uppercase tracking-tight text-foreground">
                  Description
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {property.description}
                </p>
              </div>

              {/* Property details accordion */}
              <div className="space-y-4">
                <h2 className="text-lg font-semibold uppercase tracking-tight text-foreground">
                  Property Details
                </h2>

                <Accordion type="multiple" className="space-y-3">
                  {/* Basic Information */}
                  <AccordionItem value="basic" className="border border-gray-border">
                    <AccordionTrigger data-state="open" className="bg-dark px-6 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-light hover:no-underline">
                      Basic Information
                    </AccordionTrigger>
                    <AccordionContent className="bg-light px-0 pb-0 pt-0">
                      <dl className="divide-y divide-gray-border text-xs md:text-sm">
                        <div className="flex items-center justify-between gap-6 px-6 py-3">
                          <dt className="uppercase tracking-[0.18em] text-gray">
                            Property Status
                          </dt>
                          <dd className="text-right font-medium text-foreground">
                            {property.basicInformation.status}
                          </dd>
                        </div>
                        <div className="flex items-center justify-between gap-6 px-6 py-3">
                          <dt className="uppercase tracking-[0.18em] text-gray">Lot Size</dt>
                          <dd className="text-right font-medium text-foreground">
                            {property.basicInformation.lotSize}
                          </dd>
                        </div>
                        <div className="flex items-center justify-between gap-6 px-6 py-3">
                          <dt className="uppercase tracking-[0.18em] text-gray">MLS ID</dt>
                          <dd className="text-right font-medium text-foreground">
                            {property.basicInformation.mlsId}
                          </dd>
                        </div>
                        <div className="flex items-center justify-between gap-6 px-6 py-3">
                          <dt className="uppercase tracking-[0.18em] text-gray">
                            Property Type
                          </dt>
                          <dd className="text-right font-medium text-foreground">
                            {property.basicInformation.propertyType}
                          </dd>
                        </div>
                      </dl>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Area & Lot */}
                  <AccordionItem value="area-lot" className="border border-gray-border">
                    <AccordionTrigger className="bg-dark px-6 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-light hover:no-underline">
                      Area &amp; Lot
                    </AccordionTrigger>
                    <AccordionContent className="bg-light px-0 pb-0 pt-0">
                      <dl className="divide-y divide-gray-border text-xs md:text-sm">
                        <div className="flex items-center justify-between gap-6 px-6 py-3">
                          <dt className="uppercase tracking-[0.18em] text-gray">Lot Size</dt>
                          <dd className="text-right font-medium text-foreground">
                            {property.areaAndLot.lotSize}
                          </dd>
                        </div>
                        <div className="flex items-center justify-between gap-6 px-6 py-3">
                          <dt className="uppercase tracking-[0.18em] text-gray">
                            Lot Dimensions
                          </dt>
                          <dd className="text-right font-medium text-foreground">
                            {property.areaAndLot.lotDimensions}
                          </dd>
                        </div>
                        <div className="flex items-center justify-between gap-6 px-6 py-3">
                          <dt className="uppercase tracking-[0.18em] text-gray">Lot Features</dt>
                          <dd className="text-right font-medium text-foreground">
                            {property.areaAndLot.lotFeatures}
                          </dd>
                        </div>
                      </dl>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Interior & Exterior */}
                  <AccordionItem value="interior-exterior" className="border border-gray-border">
                    <AccordionTrigger className="bg-dark px-6 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-light hover:no-underline">
                      Interior &amp; Exterior
                    </AccordionTrigger>
                    <AccordionContent className="bg-light px-0 pb-0 pt-0">
                      <dl className="divide-y divide-gray-border text-xs md:text-sm">
                        <div className="flex items-center justify-between gap-6 px-6 py-3">
                          <dt className="uppercase tracking-[0.18em] text-gray">Pool</dt>
                          <dd className="text-right font-medium text-foreground">
                            {property.interiorAndExterior.pool}
                          </dd>
                        </div>
                        <div className="flex items-center justify-between gap-6 px-6 py-3">
                          <dt className="uppercase tracking-[0.18em] text-gray">Roof</dt>
                          <dd className="text-right font-medium text-foreground">
                            {property.interiorAndExterior.roof}
                          </dd>
                        </div>
                        <div className="flex items-center justify-between gap-6 px-6 py-3">
                          <dt className="uppercase tracking-[0.18em] text-gray">Parking</dt>
                          <dd className="text-right font-medium text-foreground">
                            {property.interiorAndExterior.parking}
                          </dd>
                        </div>
                        <div className="flex items-center justify-between gap-6 px-6 py-3">
                          <dt className="uppercase tracking-[0.18em] text-gray">Heat Type</dt>
                          <dd className="text-right font-medium text-foreground">
                            {property.interiorAndExterior.heatType}
                          </dd>
                        </div>
                        <div className="flex items-center justify-between gap-6 px-6 py-3">
                          <dt className="uppercase tracking-[0.18em] text-gray">
                            Air Conditioning
                          </dt>
                          <dd className="text-right font-medium text-foreground">
                            {property.interiorAndExterior.airConditioning}
                          </dd>
                        </div>
                        <div className="flex items-center justify-between gap-6 px-6 py-3">
                          <dt className="uppercase tracking-[0.18em] text-gray">
                            Other Interior Features
                          </dt>
                          <dd className="text-right font-medium text-foreground">
                            {property.interiorAndExterior.otherInteriorFeatures}
                          </dd>
                        </div>
                        <div className="flex items-center justify-between gap-6 px-6 py-3">
                          <dt className="uppercase tracking-[0.18em] text-gray">Sewer</dt>
                          <dd className="text-right font-medium text-foreground">
                            {property.interiorAndExterior.sewer}
                          </dd>
                        </div>
                        <div className="flex items-center justify-between gap-6 px-6 py-3">
                          <dt className="uppercase tracking-[0.18em] text-gray">
                            Substructure
                          </dt>
                          <dd className="text-right font-medium text-foreground">
                            {property.interiorAndExterior.substructure}
                          </dd>
                        </div>
                      </dl>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            {/* Right: agent contact card */}
            <aside className="space-y-6 rounded-lg border border-gray-border bg-card p-6 shadow-sm">
              <h2 className="text-lg font-semibold uppercase tracking-tight text-foreground">
                Contact Real Estate Agent
              </h2>

              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-full bg-gray-light">
                  <Image
                    src={property.agent.photo}
                    alt={property.agent.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{property.agent.name}</p>
                  <p className="text-xs text-muted-foreground">{property.agent.title}</p>
                </div>
              </div>

              <div className="space-y-1 text-sm text-muted-foreground">
                <p>
                  <span className="font-semibold text-foreground">Phone: </span>
                  <a href={`tel:${property.agent.phone}`} className="hover:text-gold">
                    {property.agent.phone}
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-foreground">Email: </span>
                  <a href={`mailto:${property.agent.email}`} className="hover:text-gold">
                    {property.agent.email}
                  </a>
                </p>
              </div>

              <div className="space-y-3">
                <Button asChild className="w-full">
                  <Link href={`tel:${property.agent.phone}`}>Call Agent</Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`mailto:${property.agent.email}`}>Email Agent</Link>
                </Button>
              </div>

              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  WeChat QR Code
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative h-28 w-28 overflow-hidden rounded-lg border border-gray-border bg-light">
                    <Image
                      src={property.agent.wechatQr}
                      alt={`WeChat QR code for ${property.agent.name}`}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <p className="max-w-[12rem] text-xs leading-relaxed text-muted-foreground">
                    Scan the QR code to connect with the agent on WeChat for more details and
                    private showings.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

