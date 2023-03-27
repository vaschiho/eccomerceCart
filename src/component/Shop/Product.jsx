import React, { useState } from 'react'
import ImageDisplay from './ImageDisplay'
import ProductItem from './ProductItem'

import image1 from '../../assets/images/image-product-1-thumbnail.jpg'
import image2 from '../../assets/images/image-product-2-thumbnail.jpg'
import image3 from '../../assets/images/image-product-3-thumbnail.jpg'
import image4 from '../../assets/images/image-product-4-thumbnail.jpg'
import imagemain1 from '../../assets/images/image-product-1.jpg'
import imagemain2 from '../../assets/images/image-product-2.jpg'
import imagemain3 from '../../assets/images/image-product-3.jpg'
import imagemain4 from '../../assets/images/image-product-4.jpg'

const products = [
    {
        id: "p1",
        price: 123.23,
        name: "Sneaker Company",
        header: "Fall Limited Edition Sneakers",
        amountInStock: 16,
        description: " These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer",
        image: [image1, image2, image3, image4],
        imageMain: [imagemain1, imagemain2, imagemain3, imagemain4]
    }

]

const Product = () => {
    const [product] = useState(products)

    // console.log(product)

    // console.log(product[0].image)

    return (
        <div >
            {product.map((item) => {
                return (
                    <div key={item.id} className="flex-col sm:flex-row justify-between gap-36  sm:py-10 px-0 sm:px-6  " style={{ display: "flex", justifyContent: "between", alignItems: "center" }}>
                        <ImageDisplay images={item.image} imageMain={item.imageMain} />

                        <ProductItem
                            id={item.id}
                            price={item.price}
                            name={item.name}
                            header={item.header}
                            description={item.description}
                            image={item.image.slice(0, 1)}
                            amountInStock={item.amountInStock}
                        />
                    </div>

                );
            })}
        </div>

    )
}

export default Product