import React, { useState } from 'react'
import NavBar from '../components/NavBar/NavBar'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <NavBar/>

        <Container>
          <Outlet/>
        </Container>
    </div>
  )
}

export default Layout