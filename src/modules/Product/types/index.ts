export interface ProductCardProps {
    name: string
    price: string
    code: string | null
    imageUrl: string
    id: number;
    discountedPrice?: string | null;
}
