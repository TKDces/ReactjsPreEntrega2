import { useContext } from 'react'
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import { BsFillTrashFill } from "react-icons/bs";

//Context
import { CartContext } from '../../context/CartContext'
import { Button } from 'react-bootstrap';

const CartScreen = () => {

    const { cart, onPrecioTotal, onEliminarItem } = useContext(CartContext)

    return (
        <div>
            <h4 className='text-start'>Lista de productos</h4>

            <hr />

            <ListGroup as="ol" numbered>
                { cart.map( c => (
                    <ListGroup.Item
                        key={c.id}
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                        <div className="fw-bold">
                            <Button onClick={() => onEliminarItem(c.id)} variant={'danger'} className='me-2'>
                                <BsFillTrashFill/>
                            </Button>
                            {c.producto}
                        </div>
                        <p className='mt-2'>
                            <strong>$ {c.price}</strong>
                        </p>
                        </div>
                        <Badge bg="primary" pill>
                            Total: {c.counter}
                        </Badge>
                    </ListGroup.Item>
                ))}

            </ListGroup>

            <hr />

            <h4 className='text-end'>Total: $ {onPrecioTotal()}</h4>
        </div>
    )
}

export default CartScreen