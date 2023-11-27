import React from 'react'
import { useState, useEffect } from 'react'
import {getFirestore, collection, getDocs, where, query} from "firebase/firestore"
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
 

const ItemListContainer = () => {

  const[item, setItem] = useState([]);
  const {id} = useParams();

  useEffect(()=>{
    const queryDb = getFirestore();
    const queryCollection = collection(queryDb, 'Items'); /// se utiliza el nombre de la const qeu trae el firestore y el nombre de la coleccion
    if(id){
     const queryFilter = query(queryCollection, where('categoryID', '==', id))
     getDocs(queryFilter).then((res)=> setItem(res.docs.map((p)=>({id: p.id, ...p.data()})))
     );
    }else{
      getDocs(queryCollection).then((res)=> setItem(res.docs.map((p)=>({id: p.id, ...p.data()})))
      );
    }
  }, [id])

  return (
    <div className='container'>
      <div className='row'>

        <ItemList item={item}/>


      </div>
        

    </div>
  )
}

export default ItemListContainer