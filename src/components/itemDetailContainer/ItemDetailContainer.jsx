import React, { useState, useEffect } from 'react'
import { Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

//iMPORTAR lISTA 
import stock from '../../data/stock'
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

    const { itemId } = useParams();

    const [ loading, setLoading ] = useState(false)
    const [ item, setItem ] = useState({})
    
     //Funcion para obtener productos
     const onObtenerProductos = () => {
        return new Promise(( resolve, reject ) => {
          setTimeout(() => {
            resolve(stock)
            reject("Rechazado")
          }, 1000);
        })
    }
    
    useEffect(() => {
        setLoading(true)
        onObtenerProductos()
          .then((res) => setItem(res.find(item => item.id == itemId)))
          .catch((error) => console.log(error))
          .finally(() => setLoading(false))
    }, [])

    return (
        <div>
            <Row>
                {loading 
                    ? <h4>Cargando</h4>
                    : <ItemDetail item={item}/>
                }
            </Row>
        </div>
    )
}

export default ItemDetailContainer