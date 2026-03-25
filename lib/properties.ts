export type Property = {
  slug: string
  title: string
  price: string
  address: string
  bedrooms: number
  bathrooms: number
  sqft: number
  description: string
  heroImage: string
  gallery: string[]
  basicInformation: {
    status: string
    lotSize: string
    mlsId: string
    propertyType: string
  }
  areaAndLot: {
    lotSize: string
    lotDimensions: string
    lotFeatures: string
  }
  interiorAndExterior: {
    pool: string
    roof: string
    parking: string
    heatType: string
    airConditioning: string
    otherInteriorFeatures: string
    sewer: string
    substructure: string
  }
  agent: {
    name: string
    title: string
    phone: string
    email: string
    wechatQr: string
    photo: string
  }
}

export const properties: Property[] = [
  {
    slug: "123-yonge-st-1",
    title: "Elegant Family Home on Yonge",
    price: "$1,809,999",
    address: "123 Yonge St, Toronto, ON",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2600,
    description:
      "",
    heroImage: "/images/listing/cutted/lins-sold-listing1.jpg",
    gallery: ["/images/listing/cutted/lins-sold-listing1.jpg"],
    basicInformation: {
      status: "Sold",
      lotSize: "0.26 Acres",
      mlsId: "N12837410",
      propertyType: "Residential",
    },
    areaAndLot: {
      lotSize: "0.26 Acres",
      lotDimensions: "45 ft x 125 ft",
      lotFeatures: "Fenced Yard, Landscaped, Private Drive",
    },
    interiorAndExterior: {
      pool: "None",
      roof: "Shingles",
      parking: "Private Double",
      heatType: "Forced Air",
      airConditioning: "Central Air",
      otherInteriorFeatures: "Auto Garage Door Remote, Carpet Free, Central Vacuum",
      sewer: "Sewer",
      substructure: "Concrete",
    },
    agent: {
      name: "Min Lin",
      title: "Real Estate Broker",
      phone: "123-456-7890",
      email: "info@linsteam.ca",
      wechatQr: "/images/wechat.jpg",
      photo: "/images/team.jpg",
    },
  }
]

export function getAllProperties(): Property[] {
  return properties
}

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((property) => property.slug === slug)
}


