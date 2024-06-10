import React, { useState } from 'react'
import css from './Products.module.css'
import Plane from '../../assets/plane.png'
import { ProductsData } from '../../data/products'

const Products = () => {
    const [MenuProducts, setMenuProducts] = useState(ProductsData)

    //filter through all product and return type of product if its equall to the type passed/assigned
    const filter = (type) => {
        setMenuProducts(ProductsData.filter((product) => product.type === type)) 
    }

  return (
    <div id="product" className={css.container}>
        <img src={Plane} alt="" />
        <h1>Our Feature Products</h1>

        <div className={css.products}>

            <ul className={css.menu}>
                {/* assign filter type to category using onclick event listener */}
                <li onClick={() => setMenuProducts(ProductsData)}>All</li>

                <li onClick={() => filter('skin care')}>Skin Care</li>

                <li onClick={() => filter('conditioner')}>Conditioners</li>

                <li onClick={() => filter('foundation')}>Foundations</li>
            </ul>

            <div className={css.list}>
                {
                    MenuProducts.map((product, i) => (
                        <div  className={css.product}>
                            
                            <div className="left_s">
                                <div className="name">
                                    <span>{product.name}</span>
                                    <span>{product.detail}</span>
                                </div>

                                <span>{product.price}$</span>
                                <div>Shop Now</div>
                            </div>

                            <div className="right_s">
                                <img src={product.img} alt="Product" className='product_img' />
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Products