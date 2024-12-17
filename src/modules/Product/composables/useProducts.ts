import { onMounted, ref } from "vue";
import { productApi } from "../api/productApi";
import { IProduct, ProductType } from "../types";

export function useProducts(productType: ProductType) {
    const products = ref<IProduct[]>([])
    const topCategories = ref<IProduct[][]>([]);
    const error = ref<string | null>(null)
    const loading = ref<boolean>(false);

    onMounted(async () => {
        loading.value = true;
        await productApi.getProducts(productType).then((data) => {
            products.value = data
            topCategories.value = data.topCategories
        }).catch((error) => {
            error.value = error;
        }).finally(() => {
            loading.value = false;
        })

    })

    if (productType === 'topCategories') {
        return { topCategories, error, loading }
    }

    return { products, error, loading }
}