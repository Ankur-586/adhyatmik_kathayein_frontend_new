// src/components/home/BrowseCategories/CategoryGrid.jsx

import CategoryCard from "./CategoryCard";
import categoryData from "./categoryData";

const CategoryGrid = () => {
    return (
        <div
            className="
                grid
                gap-6
                sm:grid-cols-2
                lg:grid-cols-4
            "
        >
            {categoryData.map((category) => (
                <CategoryCard
                    key={category.id}
                    category={category}
                />
            ))}
        </div>
    );
};

export default CategoryGrid;