import axios from "axios";
import { Product } from "../../components/category/Category.interface";

export const getProductList: any = async (setState: React.Dispatch<React.SetStateAction<Product[]>>, category: number, page: number, size: number) => {
    const PRODUCT_URL = `http://3.38.63.3:8080/api/products/category?categoryCode=${category}&page=${page}&size=${size}`;
    await axios
        .get(PRODUCT_URL, { withCredentials: true })
        .then((res) => {
            let response = res.data.content;
            setState(response);
        })
        .catch((error) => {
            return error;
        });
};

export const getBestProduct = async (setState: React.Dispatch<React.SetStateAction<Product[]>>, page: number, size: number) => {
    const BEST_URL = `http://3.38.63.3:8080/api/products/best?page=${page}&size=${size}`;
    await axios
        .get(BEST_URL, { withCredentials: true })
        .then((res) => {
            let response = res.data.content;
            setState(response);
        })
        .catch((error) => {
            return error;
        });
};
