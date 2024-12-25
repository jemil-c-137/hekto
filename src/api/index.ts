import { API_BASE_URL } from "@/shared/constants";

export class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'ApiError';
  }
}

export const handleResponse = async (response: Response) => {
  if (!response.ok) {
    throw new ApiError(response.status, `API Error: ${response.statusText}`);
  }
  return response.json();
};

const api = {
  // Product Methods
  async getAllProducts() {
    const response = await fetch(`${API_BASE_URL}/products`);
    return handleResponse(response);
  },

  async getProducts(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    const response = await fetch(`${API_BASE_URL}/products?${queryString}`);
    return handleResponse(response);
  },

  async getProduct(id: number) {
    const response = await fetch(`${API_BASE_URL}/products/${id}`);
    return handleResponse(response);
  },

  async getTopCategories() {
    const response = await fetch(`${API_BASE_URL}/products?tags=top-categories`);
    const collection = await handleResponse(response);
    console.log(collection, 'collection');
    return collection;
  },

  // Blog Methods
  async getBlogPosts() {
    const response = await fetch(`${API_BASE_URL}/blog-posts`);
    return handleResponse(response);
  },
};

export default api;
