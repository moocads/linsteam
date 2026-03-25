export type Property = {
  slug: string
  title: string
  price: string
  address: string
  bedrooms: number | string
  bathrooms: number | string
  sqft: number | string
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

type PropertyInput = Omit<Property, "slug">

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

function buildProperties(inputs: PropertyInput[]): Property[] {
  const used = new Map<string, number>()

  return inputs.map((input) => {
    const base = slugify(`${input.address} ${input.basicInformation.propertyType}`)
    const count = (used.get(base) ?? 0) + 1
    used.set(base, count)
    const slug = count === 1 ? base : `${base}-${count}`
    return { ...input, slug }
  })
}

export const properties: Property[] = buildProperties([
  {
    title: "194 Burbank Dr., Toronto",
    price: "N/A",
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
      phone: "(647) 615-9999",
      email: "info@linrealtyteam.com",
      wechatQr: "/images/wechat.jpg",
      photo: "/images/team.jpg",
    },
  },
  {
    title: "18 Rinas Ave, Marhkam",
    price: "N/A",
    address: "18 Rinas Ave, Marhkam",
    bedrooms: "N/A",
    bathrooms: "N/A",
    sqft: "N/A",
    description:
      "N/A",
    heroImage: "/images/listing/cutted/lins-sold-listing2.jpg",
    gallery: ["/images/listing/cutted/lins-sold-listing2.jpg"],
    basicInformation: {
      status: "Sold",
      lotSize: "N/A",
      mlsId: "N/A",
      propertyType: "Detached",
    },
    areaAndLot: {
      lotSize: "N/A",
      lotDimensions: "N/A",
      lotFeatures: "N/A",
    },
    interiorAndExterior: {
      pool: "N/A",
      roof: "N/A",
      parking: "N/A",
      heatType: "N/A",
      airConditioning: "N/A",
      otherInteriorFeatures: "N/A",
      sewer: "N/A",
      substructure: "N/A",
    },
    agent: {
      name: "Min Lin",
      title: "Real Estate Broker",
      phone: "(647) 615-9999",
      email: "info@linrealtyteam.com",
      wechatQr: "/images/wechat.jpg",
      photo: "/images/team.jpg",
    },
  },
  {
    title: "66 Vanderhoof Ave., Toronto",
    price: "N/A",
    address: "66 Vanderhoof Ave., Toronto",
    bedrooms: "N/A",
    bathrooms: "N/A",
    sqft: "N/A",
    description:
      "N/A",
    heroImage: "/images/listing/cutted/lins-sold-listing3.jpg",
    gallery: ["/images/listing/cutted/lins-sold-listing3.jpg"],
    basicInformation: {
      status: "Sold",
      lotSize: "N/A",
      mlsId: "N/A",
      propertyType: "Detached",
    },
    areaAndLot: {
      lotSize: "N/A",
      lotDimensions: "N/A",
      lotFeatures: "N/A",
    },
    interiorAndExterior: {
      pool: "N/A",
      roof: "N/A",
      parking: "N/A",
      heatType: "N/A",
      airConditioning: "N/A",
      otherInteriorFeatures: "N/A",
      sewer: "N/A",
      substructure: "N/A",
    },
    agent: {
      name: "Min Lin",
      title: "Real Estate Broker",
      phone: "(647) 615-9999",
      email: "info@linrealtyteam.com",
      wechatQr: "/images/wechat.jpg",
      photo: "/images/team.jpg",
    },
  },
  {
    title: "105 Wild Orchid Cres., Markham",
    price: "N/A",
    address: "105 Wild Orchid Cres., Markham",
    bedrooms: "N/A",
    bathrooms: "N/A",
    sqft: "N/A",
    description:
      "N/A",
    heroImage: "/images/listing/cutted/lins-sold-listing4.jpg",
    gallery: ["/images/listing/cutted/lins-sold-listing4.jpg"],
    basicInformation: {
      status: "Sold",
      lotSize: "N/A",
      mlsId: "N/A",
      propertyType: "Detached",
    },
    areaAndLot: {
      lotSize: "N/A",
      lotDimensions: "N/A",
      lotFeatures: "N/A",
    },
    interiorAndExterior: {
      pool: "N/A",
      roof: "N/A",
      parking: "N/A",
      heatType: "N/A",
      airConditioning: "N/A",
      otherInteriorFeatures: "N/A",
      sewer: "N/A",
      substructure: "N/A",
    },
    agent: {
      name: "Min Lin",
      title: "Real Estate Broker",
      phone: "(647) 615-9999",
      email: "info@linrealtyteam.com",
      wechatQr: "/images/wechat.jpg",
      photo: "/images/team.jpg",
    },
  },
  {
    title: "168 Maple Ave., Richmond Hill",
    price: "N/A",
    address: "168 Maple Ave., Richmond Hill",
    bedrooms: "N/A",
    bathrooms: "N/A",
    sqft: "N/A",
    description:
      "N/A",
    heroImage: "/images/listing/cutted/lins-sold-listing5.jpg",
    gallery: ["/images/listing/cutted/lins-sold-listing5.jpg"],
    basicInformation: {
      status: "Sold",
      lotSize: "N/A",
      mlsId: "N/A",
      propertyType: "Detached",
    },
    areaAndLot: {
      lotSize: "N/A",
      lotDimensions: "N/A",
      lotFeatures: "N/A",
    },
    interiorAndExterior: {
      pool: "N/A",
      roof: "N/A",
      parking: "N/A",
      heatType: "N/A",
      airConditioning: "N/A",
      otherInteriorFeatures: "N/A",
      sewer: "N/A",
      substructure: "N/A",
    },
    agent: {
      name: "Min Lin",
      title: "Real Estate Broker",
      phone: "(647) 615-9999",
      email: "info@linrealtyteam.com",
      wechatQr: "/images/wechat.jpg",
      photo: "/images/team.jpg",
    },
  },
  {
    title: "176 Canlish Rd., Toronto",
    price: "N/A",
    address: "176 Canlish Rd., Toronto",
    bedrooms: "N/A",
    bathrooms: "N/A",
    sqft: "N/A",
    description:
      "N/A",
    heroImage: "/images/listing/cutted/lins-sold-listing6.jpg",
    gallery: ["/images/listing/cutted/lins-sold-listing6.jpg"],
    basicInformation: {
      status: "Sold",
      lotSize: "N/A",
      mlsId: "N/A",
      propertyType: "Detached",
    },
    areaAndLot: {
      lotSize: "N/A",
      lotDimensions: "N/A",
      lotFeatures: "N/A",
    },
    interiorAndExterior: {
      pool: "N/A",
      roof: "N/A",
      parking: "N/A",
      heatType: "N/A",
      airConditioning: "N/A",
      otherInteriorFeatures: "N/A",
      sewer: "N/A",
      substructure: "N/A",
    },
    agent: {
      name: "Min Lin",
      title: "Real Estate Broker",
      phone: "(647) 615-9999",
      email: "info@linrealtyteam.com",
      wechatQr: "/images/wechat.jpg",
      photo: "/images/team.jpg",
    },
  },
  {
    title: "1537 5 Everson Dr., Toronto",
    price: "N/A",
    address: "1537 5 Everson Dr., Toronto",
    bedrooms: "N/A",
    bathrooms: "N/A",
    sqft: "N/A",
    description:
      "N/A",
    heroImage: "/images/listing/cutted/lins-sold-listing7.jpg",
    gallery: ["/images/listing/cutted/lins-sold-listing7.jpg"],
    basicInformation: {
      status: "Sold",
      lotSize: "N/A",
      mlsId: "N/A",
      propertyType: "Detached",
    },
    areaAndLot: {
      lotSize: "N/A",
      lotDimensions: "N/A",
      lotFeatures: "N/A",
    },
    interiorAndExterior: {
      pool: "N/A",
      roof: "N/A",
      parking: "N/A",
      heatType: "N/A",
      airConditioning: "N/A",
      otherInteriorFeatures: "N/A",
      sewer: "N/A",
      substructure: "N/A",
    },
    agent: {
      name: "Min Lin",
      title: "Real Estate Broker",
      phone: "(647) 615-9999",
      email: "info@linrealtyteam.com",
      wechatQr: "/images/wechat.jpg",
      photo: "/images/team.jpg",
    },
  },
  {
    title: "300 Alton Towers Circ 404, Toronto",
    price: "N/A",
    address: "300 Alton Towers Circ 404, Toronto",
    bedrooms: "N/A",
    bathrooms: "N/A",
    sqft: "N/A",
    description:
      "N/A",
    heroImage: "/images/listing/cutted/lins-sold-listing8.jpg",
    gallery: ["/images/listing/cutted/lins-sold-listing8.jpg"],
    basicInformation: {
      status: "Sold",
      lotSize: "N/A",
      mlsId: "N/A",
      propertyType: "Detached",
    },
    areaAndLot: {
      lotSize: "N/A",
      lotDimensions: "N/A",
      lotFeatures: "N/A",
    },
    interiorAndExterior: {
      pool: "N/A",
      roof: "N/A",
      parking: "N/A",
      heatType: "N/A",
      airConditioning: "N/A",
      otherInteriorFeatures: "N/A",
      sewer: "N/A",
      substructure: "N/A",
    },
    agent: {
      name: "Min Lin",
      title: "Real Estate Broker",
      phone: "(647) 615-9999",
      email: "info@linrealtyteam.com",
      wechatQr: "/images/wechat.jpg",
      photo: "/images/team.jpg",
    },
  },
  {
    title: "221 Goldhawk Tr., Toronto",
    price: "N/A",
    address: "221 Goldhawk Tr., Toronto",
    bedrooms: "N/A",
    bathrooms: "N/A",
    sqft: "N/A",
    description:
      "N/A",
    heroImage: "/images/listing/cutted/lins-sold-listing10.jpg",
    gallery: ["/images/listing/cutted/lins-sold-listing10.jpg"],
    basicInformation: {
      status: "Sold",
      lotSize: "N/A",
      mlsId: "N/A",
      propertyType: "Detached",
    },
    areaAndLot: {
      lotSize: "N/A",
      lotDimensions: "N/A",
      lotFeatures: "N/A",
    },
    interiorAndExterior: {
      pool: "N/A",
      roof: "N/A",
      parking: "N/A",
      heatType: "N/A",
      airConditioning: "N/A",
      otherInteriorFeatures: "N/A",
      sewer: "N/A",
      substructure: "N/A",
    },
    agent: {
      name: "Min Lin",
      title: "Real Estate Broker",
      phone: "(647) 615-9999",
      email: "info@linrealtyteam.com",
      wechatQr: "/images/wechat.jpg",
      photo: "/images/team.jpg",
    },
  },
  {
    title: "83 Casely Ave., Richmond Hill",
    price: "N/A",
    address: "83 Casely Ave., Richmond Hill",
    bedrooms: "N/A",
    bathrooms: "N/A",
    sqft: "N/A",
    description:
      "N/A",
    heroImage: "/images/listing/cutted/lins-sold-listing11.jpg",
    gallery: ["/images/listing/cutted/lins-sold-listing11.jpg"],
    basicInformation: {
      status: "Sold",
      lotSize: "N/A",
      mlsId: "N/A",
      propertyType: "Detached",
    },
    areaAndLot: {
      lotSize: "N/A",
      lotDimensions: "N/A",
      lotFeatures: "N/A",
    },
    interiorAndExterior: {
      pool: "N/A",
      roof: "N/A",
      parking: "N/A",
      heatType: "N/A",
      airConditioning: "N/A",
      otherInteriorFeatures: "N/A",
      sewer: "N/A",
      substructure: "N/A",
    },
    agent: {
      name: "Min Lin",
      title: "Real Estate Broker",
      phone: "(647) 615-9999",
      email: "info@linrealtyteam.com",
      wechatQr: "/images/wechat.jpg",
      photo: "/images/team.jpg",
    },
  },
  {
    title: "525 Glengarry Ave., Toronto",
    price: "N/A",
    address: "525 Glengarry Ave., Toronto",
    bedrooms: "N/A",
    bathrooms: "N/A",
    sqft: "N/A",
    description:
      "N/A",
    heroImage: "/images/listing/cutted/lins-sold-listing12.jpg",
    gallery: ["/images/listing/cutted/lins-sold-listing12.jpg"],
    basicInformation: {
      status: "Sold",
      lotSize: "N/A",
      mlsId: "N/A",
      propertyType: "Detached",
    },
    areaAndLot: {
      lotSize: "N/A",
      lotDimensions: "N/A",
      lotFeatures: "N/A",
    },
    interiorAndExterior: {
      pool: "N/A",
      roof: "N/A",
      parking: "N/A",
      heatType: "N/A",
      airConditioning: "N/A",
      otherInteriorFeatures: "N/A",
      sewer: "N/A",
      substructure: "N/A",
    },
    agent: {
      name: "Min Lin",
      title: "Real Estate Broker",
      phone: "(647) 615-9999",
      email: "info@linrealtyteam.com",
      wechatQr: "/images/wechat.jpg",
      photo: "/images/team.jpg",
    },
  },
  {
    title: "38 Far Niente St., Richmond Hill",
    price: "N/A",
    address: "38 Far Niente St., Richmond Hill",
    bedrooms: "N/A",
    bathrooms: "N/A",
    sqft: "N/A",
    description:
      "N/A",
    heroImage: "/images/listing/cutted/lins-sold-listing13.jpg",
    gallery: ["/images/listing/cutted/lins-sold-listing13.jpg"],
    basicInformation: {
      status: "Sold",
      lotSize: "N/A",
      mlsId: "N/A",
      propertyType: "Detached",
    },
    areaAndLot: {
      lotSize: "N/A",
      lotDimensions: "N/A",
      lotFeatures: "N/A",
    },
    interiorAndExterior: {
      pool: "N/A",
      roof: "N/A",
      parking: "N/A",
      heatType: "N/A",
      airConditioning: "N/A",
      otherInteriorFeatures: "N/A",
      sewer: "N/A",
      substructure: "N/A",
    },
    agent: {
      name: "Min Lin",
      title: "Real Estate Broker",
      phone: "(647) 615-9999",
      email: "info@linrealtyteam.com",
      wechatQr: "/images/wechat.jpg",
      photo: "/images/team.jpg",
    },
  }
])

export function getAllProperties(): Property[] {
  return properties
}

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((property) => property.slug === slug)
}


