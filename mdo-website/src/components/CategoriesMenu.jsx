import React from 'react';
import jsonObject from "../categories.json";
import "./components.css";

const CategoriesMenu = ({ activeCategory, setActiveCategory, setActiveSubCategory }) => {

    const handleCategoryClick = (category) => {
        setActiveCategory(category);  // Set the active category
        setActiveSubCategory(null);   // Reset the active subcategory
    };

    const handleSubCategoryClick = (subcategory) => {
        setActiveSubCategory(subcategory);  // Set the active subcategory to show its products
    };

    return (
        <div className={`categories-menu`}>
            <ul>
                {jsonObject.categories.map((category) => (
                    <li key={category.id}>
                        <div
                            className="category-name"
                            onClick={() => handleCategoryClick(category)} // Pass the category object
                        >
                            {category.name}
                        </div>

                        {/* If category has child categories, display them */}
                        {category.child_categories && activeCategory?.id === category.id && (
                            <ul className="child-categories">
                                {category.child_categories.map((child) => (
                                    <li
                                        key={child.id}
                                        className="child-category"
                                        onClick={() => handleSubCategoryClick(child)}  // Click subcategory
                                    >
                                        {child.name}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoriesMenu;
