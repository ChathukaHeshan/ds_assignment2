import React from 'react'
import {Button} from "antd";

function UserCardBlock(props) {

    const renderCartImage = (images) => {
        if(images.length > 0) {
            let image = images[0]
            return `http://localhost:5000/${image}`
        }
    }

    const renderItems = () => (
        props.products && props.products.map(product => (
            <tr key={product._id}>
                <td>{product.title}</td>
                <td>
                    <img style={{ width: '70px' }} alt="product"
                    src={renderCartImage(product.images)} />
                </td>
                <td>{product.quantity}</td>
                <td>LKR  {product.price} </td>
                
                <Button
                onClick={()=> props.removeItem(product._id)}
                >Remove </Button>
            </tr>
        ))
    )

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Image</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {renderItems()}
                </tbody>
            </table>
        </div>
    )
}

export default UserCardBlock
