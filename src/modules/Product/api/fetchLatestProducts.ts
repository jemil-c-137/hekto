import Api from "@/api";

export const fetchLatestProducts = async () => {
    const response = await Api.getAllProducts();
    const { latestProductsData } = response;
    return latestProductsData;
}
