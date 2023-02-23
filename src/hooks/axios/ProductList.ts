import axios from "axios";

interface Product {
    best: boolean;
    category: number;
    createdAt: string;
    description: string;
    likes: number;
    modifiedAt: string;
    name: string;
    price: number;
    productId: number;
    productImageUrl: string;
}

export const getProductList: any = async (setState: React.Dispatch<React.SetStateAction<Product[]>>, category: number, page: number, size: number) => {
    const PRODUCT_URL = `http://3.38.63.3:8080/api/products/category?categoryCode=${category}&page=${page}&size=${size}`;
    await axios
        .get(PRODUCT_URL, { withCredentials: true })
        .then((res) => {
            let response = res.data.content;
            setState(response);
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
};

export const getBestProduct = async (setState: React.Dispatch<React.SetStateAction<Product[]>>) => {
    const BEST_URL = `http://3.38.63.3:8080/api/products/best`;
    await axios
        .get(BEST_URL, { withCredentials: true })
        .then((res) => {
            let response = res.data;
            setState(response);
        })
        .catch((error) => {
            console.log(error);
        });
};
