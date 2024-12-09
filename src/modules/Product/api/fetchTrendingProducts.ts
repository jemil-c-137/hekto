import Api from "@/api";

export const fetchTrendingProducts = async () => {
    const response = await Api.getAllProducts();
    const { trendingProducts } = response;
    return trendingProducts;
}
