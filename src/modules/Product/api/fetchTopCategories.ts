import Api from "@/api";

export const fetchTopCategories = async () => {
    const response = await Api.getAllProducts();
    const { topCategories } = response;
    return topCategories;
}
