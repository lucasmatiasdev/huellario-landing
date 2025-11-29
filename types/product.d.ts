export type ProductCategory = "Ropita" | "Camitas" | "Juguetes"

export type Product = {
    id: string;
    name: string;
    description: string;
    category: ProductCategory;
    price: number;
    image?: string;
    tags?: string[];
};
