import React from 'react'

import SliderPrincipal from './slider.jsx'
import FiltroProductosPrimero from './filtroprimero.jsx'
import ResultaoProductosPrimero from './productosprimero.jsx'
import FiltroProductosSegundo from './filtrosegundo.jsx'
import ResultaoProductosSegundo from './productossegundo.jsx'
import MarcasProveedores from './marcasproveedores.jsx'
import BarraInferior from './barrainferior.jsx'

export default function BeginScreen({proporcional}) {
    
    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div style={{width: '100%', height: 925 / proporcional}}>
                <SliderPrincipal proporcional={proporcional}/>
            </div>
            <FiltroProductosPrimero proporcional={proporcional}/>
            <ResultaoProductosPrimero proporcional={proporcional}/>
            <FiltroProductosSegundo proporcional={proporcional}/>
            <ResultaoProductosSegundo proporcional={proporcional}/>
            <MarcasProveedores proporcional={proporcional}/>
            <BarraInferior proporcional={proporcional}/>
        </div>
    )
}