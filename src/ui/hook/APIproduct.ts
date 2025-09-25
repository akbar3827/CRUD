import axios from "axios";
import { useEffect, useState } from "react";

type id = number | string;

export interface TypeCard {
    id: id;
    title: string;
    price: number;
    rating: string;
    discountPercentage: string;
    stock: string;
    tags: [];
    brand: string;
    sku: string;
    dimensions: {
        width: string;
        height: string;
        depth: string;
    };
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: [
        {
            rating: string;
            comment: string;
            date: string;
            reviewerName: string;
            reviewerEmail: string;
        }
    ];
    returnPolicy: string;
    minimumOrderQuantity: string;
    meta: {
        createdAt: string;
        updatedAt: string;
        barcode: string;
        qrCode: string;
    };
    description: string;
    category: string;
    image: string;
    thumbnail: string;
};

export const APiproduct1 = () => {

    const [card, setCard] = useState<TypeCard[]>([]);

    const AxiosAPI = async () => {
        try {
            const respone = await axios.get("https://dummyjson.com/products");
            setCard(respone.data.products);
        } catch (error) {
            alert(`${error}`);
        }
    };

    useEffect(() => {
        AxiosAPI();
    }, []);

    return { card }
}