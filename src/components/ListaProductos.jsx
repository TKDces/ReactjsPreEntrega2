import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

const ListaProductos = () => {
return (
    <NavDropdown title="Categorias" id="navbarScrollingDropdown">
        <NavDropdown.Item><NavLink to={`/category/samsung`} className='nav-link'>SAMSUNG</NavLink></NavDropdown.Item>
        <NavDropdown.Item><NavLink to={`/category/motorola`} className='nav-link'>MOTOROLA</NavLink></NavDropdown.Item>
        <NavDropdown.Item><NavLink to={`/category/iphone`} className='nav-link'>IPHONE</NavLink></NavDropdown.Item>
        <NavDropdown.Item><NavLink to={`/category/xiaomi`} className='nav-link'>XIAOMI</NavLink></NavDropdown.Item>
    </NavDropdown>
)
}

export default ListaProductos