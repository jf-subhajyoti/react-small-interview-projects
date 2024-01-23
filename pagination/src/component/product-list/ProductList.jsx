import { useEffect, useState, useRef } from 'react';
import axios from 'axios'

import './ProductList.css';

import Card from '../card/Card';
import Paggination from '../paggination/Paggination';

const ProductList = ({ pageSize = 25 }) => {
    const [page, setPage] = useState(1);
    const [product, setProduct] = useState([]);
    const totalProduct = useRef(0);
    useEffect(() => {
        const getProductList = async () => {
            let res = await axios.get('https://dummyjson.com/products', {
                params: {
                    skip: (page - 1) * pageSize,
                    limit: pageSize,
                }
            });
            console.log(res);
            setProduct(res.data.products);
            totalProduct.current = res.data.total;
        }
        getProductList();
    }, [page]);

    return (
        <>
            <div className='product_wrapper'>
                {
                    product?.map(prod => {
                        return (
                            <Card key={prod.id} product={prod} />
                        )
                    })
                }
            </div>
            <Paggination selectedPage={page} setPage={setPage} totalPage={Math.round(Math.ceil(totalProduct.current / pageSize))} />
        </>
    )
}

export default ProductList
