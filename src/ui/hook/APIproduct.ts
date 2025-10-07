import axios from "axios";
import { useEffect, useMemo, useState } from "react";

type id = number | string;

export interface TypeProduct {
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

export interface TypeProduct2 {
    id: id;
    title: string;
    price: number;
    description: string;
    category: {
        id: id;
        name: string;
        slug: string;
        image: string;
        creationAt: string;
        updatedAt: string;
    }
    slug: string;
    images: [
        string[1],
        string[2],
        string[3]
    ];
    creationAt: string;
    updatedAt: string;

}

export const APiproduct1 = () => {

    const [product, setProduct] = useState<TypeProduct[]>([]);

    const AxiosAPI = async () => {
        try {
            const respone = await axios.get("https://dummyjson.com/products");
            setProduct(respone.data.products);
        } catch (error) {
            alert(`${error}`);
        }
    };

    
    
    const [product2, setPRoduct2] = useState<TypeProduct2[]>([])
    
    
    const AxiosAPI2 = async () => {
        try {
            const respone = await axios.get("https://api.escuelajs.co/api/v1/products");
            setPRoduct2(respone.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        AxiosAPI();
        AxiosAPI2();
    }, []);

    return { product, product2 }
}