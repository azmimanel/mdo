import React, { useState } from "react";
import CategoriesMenu from "../components/CategoriesMenu";
import Header from "../components/Header";
import Footer from "../components/Footer";
import style from "./pages.module.css";

const Products = () => {
    const [activeCategory, setActiveCategory] = useState(null); // Active category (parent)
    const [activeSubCategory, setActiveSubCategory] = useState(null); // Active subcategory (child)
    const [zoomedImage, setZoomedImage] = useState(null); // State to hold the zoomed image

    const getActiveProducts = () => {
        if (activeSubCategory) {
            return activeSubCategory.products;
        } else if (activeCategory && !activeCategory.child_categories) {
            return activeCategory.products;
        }
        return [];
    };

    const handleImageClick = (image) => {
        setZoomedImage(image); // Set the clicked image for zoom
    };

    const closeModal = () => {
        setZoomedImage(null); // Close the zoomed image
    };

    return (
        <>
            <Header />
            <div>
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
                                    src={require(`../Assets/${product.image}`)} // Adjust path as necessary
                                    alt={product.description}
                                    className={style.product_image}
                                    onClick={() => handleImageClick(product.image)} // Click event to zoom
                                />
                                <div className={style.product_info}>
                                    <p className={style.product_description}>{product.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Zoomed image modal */}
                {zoomedImage && (
                    <div className={style.zoomed_image_modal} onClick={closeModal}>
                        <img
                            src={require(`../Assets/${zoomedImage}`)} // Adjust path as necessary
                            alt="Zoomed"
                            className={style.zoomed_image}
                        />
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Products;
