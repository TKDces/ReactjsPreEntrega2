import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom';

//iMPORTAR lISTA 
import stock from '../../data/stock'

//Componets
import Item from '../Item/Item';


const ItemList = () => {

  const {categoryId} = useParams();

  const [ items, setItems ] = useState([]);
  const [ loading, setLoading ] = useState(false)

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
        .then((res) => categoryId ? setItems(res.filter(item => item.categoria == categoryId)) : setItems(res))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))
  }, [categoryId])
      
    return (
        <Row>
            {loading 
                ? <h4>Cargando</h4>
                : items.map((item) => (
                    <Col key={item.id} md="3">
                       <Item item={item}/> 
                    </Col>
                ))
            }
        </Row>
    )
}

export default ItemList