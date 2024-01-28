import { useEffect, useState, useRef } from 'react';
import axios from 'axios'

import './ProductList.css';

import Card from '../card/Card';

const ProductList = ({ pageSize = 25 }) => {
    const [product, setProduct] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const observer = useRef();

    const lastProductRef = node => {
        if(isLoading) return;

        if(observer.current) {
            observer.current.disconnect();
        }
        observer.current = new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting && hasMore) {
                getProductList();
            }
        })
        if(node) {
            observer.current.observe(node);
        }
    };

    useEffect(() => {
        getProductList()
    }, []);

    const getProductList = async () => {
        if(isLoading || !hasMore) return;
        setIsLoading(true);
        axios.get('https://dummyjson.com/products', {
            params: {
                skip: (page - 1) * pageSize,
                limit: pageSize,
            }
        }).then(res => {
            setIsLoading(false);
            setPage(prev => prev+1);
            setHasMore(res.data.products?.length > 0);
            setProduct(prev => ([...prev, ...res.data.products]));
        }).catch(() => {
            setIsLoading(false);
        })
    }

    return (
        <>
            <div className='product_wrapper'>
                {
                    product?.map((prod, index) => {
                        if(index + 1 === product.length) {
                            return (<div key={prod.id} ref = { lastProductRef }><Card product={prod} /></div>)
                        } else {
                            return (<Card key={prod.id} product={prod} />)
                        }
                    })
                }
            </div>
            <div className='product_footer'>
                {isLoading && 
                    <div>
                        Loading...
                    </div>
                }
                {
                    product?.length ? (
                        <>
                            <span>Happy Shopping!!</span>
                            <span>😊😊</span>
                        </>
                    ) : (<></>)
                }
            </div>
        </>
    )
}

export default ProductList
