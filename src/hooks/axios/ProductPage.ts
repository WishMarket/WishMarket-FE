import axios from "axios";

export const getTotalBestElements = async (setState: React.Dispatch<React.SetStateAction<number>>) => {
    const BEST_URL = `http://3.38.63.3:8080/api/products/best?page=1&size=12`;
    await axios
        .get(BEST_URL, { withCredentials: true })
        .then((res) => {
            let response = res.data.totalElements;
            setState(response);
        })
        .catch((error) => {
            console.log(error);
        });
};

export const getTotalBestPages = async (setState: React.Dispatch<React.SetStateAction<number>>) => {
    const BEST_URL = `http://3.38.63.3:8080/api/products/best?page=1&size=12`;
    await axios
        .get(BEST_URL, { withCredentials: true })
        .then((res) => {
            let response = res.data.totalPages;
            setState(response);
        })
        .catch((error) => {
            console.log(error);
        });
};

export const getTotalElements = async (setState: React.Dispatch<React.SetStateAction<number>>, code: number) => {
    const PRODUCT_URL = `http://3.38.63.3:8080/api/products/category?categoryCode=${code}&page=1&size=12`;
    await axios
        .get(PRODUCT_URL, { withCredentials: true })
        .then((res) => {
            let response = res.data.totalElements;
            setState(response);
        })
        .catch((error) => {
            console.log(error);
        });
};

export const getTotalPages = async (setState: React.Dispatch<React.SetStateAction<number>>, code: number) => {
    const PRODUCT_URL = `http://3.38.63.3:8080/api/products/category?categoryCode=${code}&page=1&size=12`;
    await axios
        .get(PRODUCT_URL, { withCredentials: true })
        .then((res) => {
            let response = res.data.totalPages;
            setState(response);
        })
        .catch((error) => {
            console.log(error);
        });
};

export const getSearchTotalElements = async (setState: React.Dispatch<React.SetStateAction<number>>, keyword: string, page: number) => {
    const SEARCH_URL = `http://3.38.63.3:8080/api/products/search?keyword=${keyword}&page=${page}&size=12`;
    await axios
        .get(SEARCH_URL, { withCredentials: true })
        .then((res) => {
            let response = res.data.totalElements;
            setState(response);
        })
        .catch((error) => {
            console.log(error);
        });
};

export const getSearchTotalPages = async (setState: React.Dispatch<React.SetStateAction<number>>, keyword: string, page: number) => {
    const SEARCH_URL = `http://3.38.63.3:8080/api/products/search?keyword=${keyword}&page=${page}&size=12`;
    await axios
        .get(SEARCH_URL, { withCredentials: true })
        .then((res) => {
            let response = res.data.totalPages;
            setState(response);
        })
        .catch((error) => {
            console.log(error);
        });
};
