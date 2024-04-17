import React, { useEffect, useState } from 'react'
import Product from '../components/products'
import './ProductPage.css'

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

const ProductPage = () => {


    const [searchInp, setSearchInp] = useState('');
    // const [searchedProducts, setSearchedProducts] = useState([]);
    const [searchedProducts, setSearchedProducts] = useState<Product[]>([]);

    useEffect(() => {
        const searchProduct = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/products/search?q=${searchInp}`);
                const data = await response.json();
                setSearchedProducts(data.products);
                console.log(searchedProducts);
            } catch (error) {
                console.error('Error searching products:', error);
            }
        };

        if (searchInp.trim() !== '') {
            searchProduct();
        } else {
            setSearchedProducts([]);
        }
    }, [searchInp]);

    return (
        <div>
            <div className="search-section">
                <input type="text" className='searchInp' value={searchInp} onChange={(e) => setSearchInp(e.target.value)} id='searchInp' placeholder='Search Product' />
            </div>
            <div className="productCardsList">
                {searchedProducts.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default ProductPage
