import axios from "axios";

type ProductObj = {
    productId: number;
    name: string;
    productImage: string;
    category: number;
    price: number;
    description: string;
    likes: number;
};

export const getProductDetail: any = async (setState: React.Dispatch<React.SetStateAction<ProductObj | null>>, id: number) => {
    const DETAIL_URL = `http://3.38.63.3:8080/api/products/${id}/detail`;
    await axios
        .get(DETAIL_URL, { withCredentials: true })
        .then((res) => {
            let response = res.data;
            setState(response);
        })
        .catch((error) => {
            console.log(error);
        });
};
