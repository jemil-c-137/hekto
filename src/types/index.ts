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
}

export interface IBlogPost {
  title: string
  subtext: string
  imageUrl: string
  id: number
}

export interface IAllProductsResponse {
  productsData: IProduct[]
  latestProductsData: IProduct[]
  trendingProducts: IProduct[]
  topCategories: IProduct[][]
  productList: string[]
  blogposts: IBlogPost[]
}
