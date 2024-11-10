import React, { useState } from "react";
import CategoriesMenu from "../components/CategoriesMenu";
import style from "./pages.module.css";
import jsonObject from "../categories.json";

const Products = () => {
    const defaultCategory = jsonObject.categories.find(category => category.name === "Pierres");

    const [activeCategory, setActiveCategory] = useState(defaultCategory || null);
    const [activeSubCategory, setActiveSubCategory] = useState(null);
    const [zoomedImage, setZoomedImage] = useState(null);

    const getActiveProducts = () => {
        // If a subcategory is active, return its products
        if (activeSubCategory) {
            return activeSubCategory.products;
        }

        // If there are child categories in the active category, gather their products
        if (activeCategory?.child_categories) {
            return activeCategory.child_categories.reduce(
                (allProducts, childCategory) => [...allProducts, ...childCategory.products],
                []
            );
        }

        // If there are no child categories, return products of the active category
        return activeCategory?.products || [];
    };

    const handleImageClick = (image) => {
        setZoomedImage(image);
    };

    const closeModal = () => {
        setZoomedImage(null);
    };

    return (
        <>
            <div style={{ display: 'flex', margin: '20px' }}>
                <CategoriesMenu
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                    setActiveSubCategory={setActiveSubCategory}
                />

                {activeCategory && (
                    <div className={style.product_list_container}>
                        {getActiveProducts()?.map((product, index) => (
                            <div key={index} className={style.product_item}>
                                <img
                                    src={require(`../Assets/${product.image}`)}
                                    alt={product.description}
                                    className={style.product_image}
                                    onClick={() => handleImageClick(product.image)}
                                />
                                <div className={style.product_info}>
                                    <p className={style.product_description}>{product.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {zoomedImage && (
                    <div className={style.zoomed_image_modal} onClick={closeModal}>
                        <img
                            src={require(`../Assets/${zoomedImage}`)}
                            alt="Zoomed"
                            className={style.zoomed_image}
                        />
                    </div>
                )}
            </div>
        </>
    );
};

export default Products;
