import React from 'react'
import { Outlet } from 'react-router-dom'

import BarraMenu from './barra/menu.jsx'
import BarraSuperior from './barra/superior.jsx'
import FooterPrincipal from './footer/principal.jsx'
import FooterSociales from './footer/sociales.jsx'
import Footer from './footer/footer.jsx'

export default function PanelHome({proporcional}) {
  
  return (
    <div style={{width: '100%'}}>
        <BarraSuperior proporcional={proporcional}/>
        <BarraMenu proporcional={proporcional}/>
        <Outlet/>
        <FooterPrincipal proporcional={proporcional}/>
        <div style={{width: 1220, height: 2 / proporcional, background: '#bdbdbd', marginLeft: 350 / proporcional, 
            marginRight: 350 / proporcional}}/>
        <FooterSociales proporcional={proporcional}/>
        <Footer proporcional={proporcional}/>
    </div>
  )
}