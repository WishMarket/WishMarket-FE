import axios from "axios";

export const getProductList = async () => {
    const TEST_URL = "http://3.38.63.3:8080/api/product/categories/?category=1&page=1&size=12";
    await axios
        .get(TEST_URL, { withCredentials: true })
        .then((res) => {
            console.log(res);
        })
        .catch((error) => {
            console.log(error);
        });
};
