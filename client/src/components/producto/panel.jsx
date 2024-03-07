import React from 'react'

import ProductosRecientes from './productosrecientes.jsx'
import Producto from './producto.jsx'

export default function DetallesProducto({proporcional}) {

    return (
        <div style={{width: '100%', paddingLeft: 350 / proporcional, paddingRight: 350 / proporcional, height: 'auto', paddingTop: 50 / proporcional,
            paddingBottom: 50 / proporcional}}>
            <div className='d-flex' style={{width: 1220 / proporcional, height: 'auto'}}>
                <ProductosRecientes proporcional={proporcional}/>
                <Producto proporcional={proporcional}/>
            </div>
        </div>
    )
}