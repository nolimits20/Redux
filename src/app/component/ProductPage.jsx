import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../slice/productSlice';
import styles from './ProductPage.module.css'; 
import Image from 'next/image';

const ProductPage = () => {
    const dispatch = useDispatch();
    const { items, status, error } = useSelector((state) => state.products);
    
    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProducts());
        }
    }, [status, dispatch]);

    if (status === 'loading') {
        return <div className={styles.loading}>Loading...</div>;
    } 

    if (status === 'failed') {
        return <div className={styles.error}>Error: {error}</div>;
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Our Products</h2>
            <div className={styles.productGrid}>
                {items.map((product) => (
                    <div key={product.id} className={styles.productCard}>
                        <div className={styles.productInfo}>
                            <h3 className={styles.productTitle}>{product.title}</h3>
                            <p className={styles.productPrice}>${product.price}</p>
                            <div className={styles.productRating}>
                                <span>★</span> {product.rating.toFixed(1)}
                            </div>
                            <p className={styles.productBrand}>{product.brand}</p>
                            <p className={styles.productCategory}>{product.category}</p>
                            <p className={styles.productDescription}>{product.description}</p>
                            <div className={styles.productMeta}>
                                <span>Stock: {product.stock}</span>
                                <span>Discount: {product.discountPercentage}%</span>
                            </div>
                            <button className={styles.addToCartButton}>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductPage;