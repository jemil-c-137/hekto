export enum LatestProductsOptions {
  NewArrival = 'new-arrival',
  BestSeller = 'best-seller',
  Featured = 'featured',
  SpecialOffer = 'special-offer'
}

export interface IProduct {
  id: number
  name: string
  price: string
  code: string | null
  imageUrl: string
  discountedPrice: string | null
  rating: number
  reviewsCount: number
  color: {
    name: string,
    hexValue: string
  }
  description: string
  categories: string[]
  tags: string[] | null
}

export interface IBlogPost {
  title: string
  subtext: string
  imageUrl: string
  slug: string
}

export interface IAllProductsResponse {
  productsData: IProduct[]
  latestProductsData: IProduct[]
  trendingProducts: IProduct[]
  topCategories: IProduct[][]
  productList: string[]
  blogposts: IBlogPost[]
}
