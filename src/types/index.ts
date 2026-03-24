export interface Company {
  name: string
  tagline: string
  siteUrl: string
  seoDescription: string
  email: string
  phones: string[]
  branches: { name: string; address: string }[]
  hours: string
  facebook: string
  hero: {
    headline: string
    subtext: string
    countdownHours: number
  }
  footer: {
    about: string
    serviceAreas: string[]
  }
}

export interface Service {
  name: string
  priceOld: string
  priceNew: string
  features: string[]
}

export interface Testimonial {
  initial: string
  name: string
  color: string
  rating: number
  text: string
}
