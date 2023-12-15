import React from 'react';
import { useCartContext } from '../Context/CartContext';
import ItemCount from '../ItemCount/ItemCount'

const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    const handleAddToCart = (quantity) => {
       console.log(`Añadir al carrito: ${quantity} unidades`);
    };
    return (
        <div className='itemCart'>
            <img src={product.image} alt={product.title} />
            <div>
                <p>Título: {product.title}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio u.: ${product.price}</p>
                <p>Subtotal: ${product.quantity * product.price}</p>
                <ItemCount
                    initial={product.quantity}
                    stock={product.stock} 
                    onAdd={handleAddToCart}
                />

                <button onClick={() => removeProduct(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart