import { onMounted, ref } from "vue";
import { IProduct } from "../types";
import { ApiError } from "@/api";

export function useProducts(apiCall: Function) {
    const products = ref<IProduct[]>([]);
    const error = ref<string | null>(null);
    const loading = ref<boolean>(false);

    onMounted(async () => {
        loading.value = true;
        await apiCall().then((data: IProduct[]) => {
            products.value = data
        }).catch((err: string | null | ApiError) => {
            if (err instanceof ApiError) {
                error.value = err.message;
            } else {
                error.value = err;
            }
        }).finally(() => {
            loading.value = false;
        })
    })

    return { products, error, loading }
}
