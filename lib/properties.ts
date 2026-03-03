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
      "Beautifully updated detached home on iconic Yonge Street, featuring sun-filled living spaces, high ceilings, and a thoughtfully designed layout ideal for family life and entertaining.",
    heroImage: "/images/property-1.jpg",
    gallery: ["/images/property-1.jpg", "/images/property-2.jpg", "/images/property-3.jpg"],
    basicInformation: {
      status: "For Sale",
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
  },
  {
    slug: "123-yonge-st-2",
    title: "Modern Townhome Retreat",
    price: "$1,629,000",
    address: "123B Yonge St, Toronto, ON",
    bedrooms: 3,
    bathrooms: 3,
    sqft: 2100,
    description:
      "Sophisticated modern townhome with open-concept living, designer finishes, and a private outdoor terrace in the heart of the city.",
    heroImage: "/images/property-2.jpg",
    gallery: ["/images/property-2.jpg", "/images/property-3.jpg", "/images/property-4.jpg"],
    basicInformation: {
      status: "For Sale",
      lotSize: "0.18 Acres",
      mlsId: "N12837411",
      propertyType: "Townhouse",
    },
    areaAndLot: {
      lotSize: "0.18 Acres",
      lotDimensions: "24 ft x 110 ft",
      lotFeatures: "Balcony, Urban, Low Maintenance Yard",
    },
    interiorAndExterior: {
      pool: "None",
      roof: "Membrane",
      parking: "Attached Garage",
      heatType: "Forced Air",
      airConditioning: "Central Air",
      otherInteriorFeatures: "Open Concept, Floor-to-Ceiling Windows, Custom Kitchen",
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
  },
  {
    slug: "123-yonge-st-3",
    title: "Classic Colonial Residence",
    price: "$2,049,999",
    address: "123C Yonge St, Toronto, ON",
    bedrooms: 5,
    bathrooms: 4,
    sqft: 3200,
    description:
      "Timeless colonial-style residence with generous principal rooms, a chef-inspired kitchen, and refined details throughout.",
    heroImage: "/images/property-3.jpg",
    gallery: ["/images/property-3.jpg", "/images/property-1.jpg", "/images/property-4.jpg"],
    basicInformation: {
      status: "For Sale",
      lotSize: "0.32 Acres",
      mlsId: "N12837412",
      propertyType: "Detached",
    },
    areaAndLot: {
      lotSize: "0.32 Acres",
      lotDimensions: "60 ft x 135 ft",
      lotFeatures: "Corner Lot, Mature Trees, Cul-de-Sac",
    },
    interiorAndExterior: {
      pool: "In-Ground",
      roof: "Shingles",
      parking: "Private Drive, 4 Spaces",
      heatType: "Forced Air",
      airConditioning: "Central Air",
      otherInteriorFeatures: "Chef's Kitchen, Crown Moulding, Hardwood Floors",
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
  },
  {
    slug: "123-yonge-st-4",
    title: "Craftsman-Style Luxury Home",
    price: "$1,949,000",
    address: "123D Yonge St, Toronto, ON",
    bedrooms: 4,
    bathrooms: 4,
    sqft: 2800,
    description:
      "Warm craftsman-inspired home blending character details with modern comfort, complete with landscaped grounds and inviting outdoor living areas.",
    heroImage: "/images/property-4.jpg",
    gallery: ["/images/property-4.jpg", "/images/property-1.jpg", "/images/property-2.jpg"],
    basicInformation: {
      status: "For Sale",
      lotSize: "0.29 Acres",
      mlsId: "N12837413",
      propertyType: "Detached",
    },
    areaAndLot: {
      lotSize: "0.29 Acres",
      lotDimensions: "50 ft x 130 ft",
      lotFeatures: "Ravine, Landscaped, Deck, Covered Porch",
    },
    interiorAndExterior: {
      pool: "None",
      roof: "Shingles",
      parking: "Private Drive, 3 Spaces",
      heatType: "Forced Air",
      airConditioning: "Central Air",
      otherInteriorFeatures: "Vaulted Ceilings, Gas Fireplace, Built-In Storage",
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
  },
]

export function getAllProperties(): Property[] {
  return properties
}

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((property) => property.slug === slug)
}


