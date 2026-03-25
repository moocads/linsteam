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
    slug: "lins-sold-listing1",
    title: "194 Burbank Dr., Toronto",
    price: "$1,809,999",
    address: "194 Burbank Dr., Toronto",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2600,
    description:
      "",
    heroImage: "/images/listing/cutted/lins-sold-listing1.jpg",
    gallery: ["/images/listing/cutted/lins-sold-listing1.jpg"],
    basicInformation: {
      status: "Sold",
      lotSize: "",
      mlsId: "",
      propertyType: "Detached",
    },
    areaAndLot: {
      lotSize: "",
      lotDimensions: "",
      lotFeatures: "",
    },
    interiorAndExterior: {
      pool: "",
      roof: "",
      parking: "Private Double",
      heatType: "",
      airConditioning: "",
      otherInteriorFeatures: "",
      sewer: "",
      substructure: "",
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


