import CategoryItemCard from "./CategoryItemCard";
import { CategoryTab } from "./Category.interface";

export default function CategoryItemList({ items, setItems }: CategoryTab) {
    return (
        <>
            {items.map((item) => (
                <CategoryItemCard item={item} key={item.productId} />
            ))}
        </>
    );
}
