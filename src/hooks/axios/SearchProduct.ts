import axios from "axios";
import { SearchProduct } from "../../components/main/Main.interface";

export const getSearchProductList: any = async (setState: React.Dispatch<React.SetStateAction<SearchProduct[]>>, keyword: string, page: number, size: number) => {
    const SEARCH_PRODUCT_URL = `http://3.38.63.3:8080/api/products/search?keyword=${keyword}&page=${page}&size=${size}`;
    await axios
        .get(SEARCH_PRODUCT_URL, { withCredentials: true })
        .then((res) => {
            let response = res.data.content;
            setState(response);
        })
        .catch((error) => {
            console.log(error);
        });
};
