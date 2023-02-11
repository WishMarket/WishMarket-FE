import CategoryItemCard from "./CategoryItemCard";

interface TabNums {
    currentTab: number;
    items: any;
}

export default function CategoryItemList({ currentTab, items }: TabNums) {
    return (
        <>
            {items.map((item: any) => {
                if (item.category !== 0 && item.category == currentTab) {
                    return <CategoryItemCard item={item} />;
                } else if (currentTab == 0 && item.best == true) {
                    return <CategoryItemCard item={item} />;
                }
            })}
        </>
    );
}
