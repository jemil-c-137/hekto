export enum LatestProductsOptions {
  NewArrival = 'new-arrival',
  BestSeller = 'best-seller',
  Featured = 'featured',
  SpecialOffer = 'special-offer'
}

export interface IBlogPost {
  title: string
  subtext: string
  imageUrl: string
  slug: string
}
