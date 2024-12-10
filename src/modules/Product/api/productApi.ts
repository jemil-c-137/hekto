import Api from "@/api"
import type { ProductResponse, ProductType } from '../types'


class ProductApi {
    private static instance: ProductApi
    private cache: Map<string, { data: any; timestamp: number }> = new Map()
    private cacheTimeout = 5 * 60 * 1000 // 5 minutes

    private constructor() {}

    static getInstance(): ProductApi {
        if (!ProductApi.instance) {
        ProductApi.instance = new ProductApi()
        }
        return ProductApi.instance
    }

    private async fetchFromApi(): Promise<ProductResponse> {
        try {
        return await Api.getAllProducts()
        } catch (error) {
        console.error('Error fetching products:', error)
        throw error
        }
    }

    private getCachedData(key: string) {
        const cached = this.cache.get(key)
        if (!cached) return null
        
        if (Date.now() - cached.timestamp > this.cacheTimeout) {
        this.cache.delete(key)
        return null
        }
        
        return cached.data
    }

    private setCachedData(key: string, data: any) {
        this.cache.set(key, { data, timestamp: Date.now() })
    }

    async getProducts(type: ProductType) {
        const cached = this.getCachedData(type)
        if (cached) return cached

        const response = await this.fetchFromApi()
        const data = {
            featured: response.productsData,
            latest: response.latestProductsData,
            trending: response.trendingProducts,
            topCategories: response.topCategories
        }[type]

        this.setCachedData(type, data)
        return data
    }
}

export const productApi = ProductApi.getInstance()