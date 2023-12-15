import React, {useState} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';

const ItemDetail = ({item}) => {
  
  const[goToCart, setGoToCart] = useState(false);
  const {addProduct} = useCartContext()
  const onAdd = (quantity) =>{
   setGoToCart(true);
   addProduct(item, quantity);
  }

  return (
    <div className='row'>
        <div className='col-md4 offset-md4'>
            <img src={item.image} className='card-fluid' alt={item.title}/>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>Cantidad: {item.stock}</p>
            <p>${item.price}</p>
        </div>
        <div>
        {goToCart ? <Link to='/cart'>Terminar compra</Link> :<ItemCount stock={item.stock} initial={0} onAdd={onAdd} />}
        </div>
    </div>
    
  )
}

export default ItemDetail