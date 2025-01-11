import { IApiResponse } from "@/api/types";

export interface ProductCardProps {
    name: string
    price: string
    code: string | null
    imageUrl: string
    id: number;
    discountedPrice?: string | null;
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
        name: string
        hexValue: string
    }
    description: string
    categories: string[]
    tags: string[] | null
    videos: {
        description: string
        url: string
        title: string
    }[]
    productSpecifications: {
        type: string
        value: string
    }[]
    reviews: {
        author: string
        rate: number
        comment: string
    }[]
}

export interface ProductResponse {
    productsData: IProduct[]
    latestProductsData: IProduct[]
    trendingProducts: IProduct[]
    topCategories: IProduct[][]
}

export type ProductType = 'featured' | 'latest' | 'trending' | 'topCategories'

export interface IProductsResponse extends IApiResponse<IProduct[]> {}
