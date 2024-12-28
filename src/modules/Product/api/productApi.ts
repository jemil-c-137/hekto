import { handleResponse } from '@/api'
import { API_BASE_URL } from '@/shared/constants';
import { IProduct, IProductsResponse } from '../types';

const productsEndpoint = `${API_BASE_URL}/products`;

export const getFeaturedProducts = async (): Promise<IProductsResponse> => {
    const response = await fetch(`${productsEndpoint}/featured`);
    const collection = await handleResponse(response);
    return collection;
}


export const getLatestProducts = async (): Promise<IProductsResponse> => {
    const response = await fetch(`${productsEndpoint}/latest`);
    const collection = await handleResponse(response);
    return collection;
}

export const getTrendingProducts = async (): Promise<IProductsResponse>   => {
    const response = await fetch(`${productsEndpoint}/trending`);
    const collection = await handleResponse(response);
    return collection;
}

export const getTopCategories = async (): Promise<IProductsResponse[]> => {
    const response = await fetch(`${productsEndpoint}/top-categories`);
    const collection = await handleResponse(response);
    console.log(collection, 'collection');

    const itemsPerChunk = 4;
    const result = collection.reduce((resultArray: IProduct[][], item: IProduct, index: number) => {
        const chunkIndex = Math.floor(index / itemsPerChunk)
        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = []
        }
        resultArray[chunkIndex].push(item)
        return resultArray
    }, [])

    return result;
}
