import React, { useState } from 'react';
import jsonObject from "../categories.json";
import "./components.css";

const CategoriesMenu = ({ activeCategory, setActiveCategory, setActiveSubCategory }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Track menu state for mobile

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        setActiveSubCategory(null);
    };

    const handleSubCategoryClick = (subcategory) => {
        setActiveSubCategory(subcategory);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            {/* Toggle button for mobile */}
            <div className="menu-toggle" onClick={toggleMenu}>
                {isMenuOpen ? "Close" : "Categories"}
            </div>

            {/* Conditionally render the menu based on isMenuOpen */}
            <div className={`categories-menu ${isMenuOpen ? "open" : ""}`}>
                <ul>
                    {jsonObject.categories.map((category) => (
                        <li key={category.id}>
                            <div
                                className={`category-name ${activeCategory?.id === category.id ? "active" : ""}`}
                                onClick={() => handleCategoryClick(category)}
                            >
                                {category.name}
                            </div>

                            {category.child_categories && activeCategory?.id === category.id && (
                                <ul className="child-categories">
                                    {category.child_categories.map((child) => (
                                        <li
                                            key={child.id}
                                            className="child-category"
                                            onClick={() => handleSubCategoryClick(child)}
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
        </>
    );
};

export default CategoriesMenu;
