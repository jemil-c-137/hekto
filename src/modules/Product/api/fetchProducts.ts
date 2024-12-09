import Api from "@/api";

export const fetchFeaturedProducts = async () => {
    const response = await Api.getAllProducts();
    const { productsData } = response;
    return productsData;
}
