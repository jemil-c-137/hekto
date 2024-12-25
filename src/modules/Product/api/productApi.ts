import { handleResponse } from '@/api'
import { API_BASE_URL } from '@/shared/constants';
import { IProduct } from '../types';

export const getFeaturedProducts = async () => {
    const response = await fetch(`${API_BASE_URL}/products?tags=featured`);
    const collection = await handleResponse(response);
    return collection;
}


export const getLatestProducts = async () => {
    const response = await fetch(`${API_BASE_URL}/products?tags=latest`);
    const collection = await handleResponse(response);
    return collection;
}

export const getTrendingProducts = async () => {
    const response = await fetch(`${API_BASE_URL}/products?tags=trending`);
    const collection = await handleResponse(response);
    return collection;
}

export const getTopCategories = async (): Promise<IProduct[][]> => {
    const response = await fetch(`${API_BASE_URL}/products?tags=top-categories`);
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
