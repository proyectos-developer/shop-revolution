import React from 'react'

import icono_right from '../../assets/iconos/icono_right_grey_96.png'
import icono_triangulo from '../../assets/iconos/icono_triangulo_down_white_96.png'

import { useNavigate } from 'react-router-dom'

export default function FiltroProductos({proporcional}) {

    const navigate = useNavigate() 

    return (
        <div style={{width: 1220 / proporcional, marginLeft: 340 / proporcional, marginRight: 350 / proporcional, marginTop: 20 / proporcional, marginBottom: 100 / proporcional,
                height: 90 / proporcional, marginBottom: 30 / proporcional}}>
            <div className='d-flex justify-content-between' 
                 style={{width: 1220 / proporcional, height: 50 / proporcional, background: '#fafafa', border: '1px solid #e5e5e5'}}>
                 <div className='d-flex justify-content-start' style={{width: '50%', height: 48 / proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional,
                         paddingTop: 15 / proporcional, paddingBottom: 15 / proporcional}}>
                     <p style={{fontSize: 20 / proporcional, color: '#434377', fontWeight: 700, lineHeight: `${18 / proporcional}px`, marginBottom: 0}}>
                         Tablets y Laptops
                     </p>
                 </div>
                <div className='d-flex justify-content-end' style={{width: '50%', height: 48 / proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional,
                        paddingTop: 15 / proporcional, paddingBottom: 15 / proporcional, cursor: 'pointer'}}
                        onClick={() => navigate ('/')}>
                    <p style={{fontSize: 14 / proporcional, color: '#bdbdbd', fontWeight: 500, lineHeight: `${18 / proporcional}px`, marginBottom: 0}}>
                        Ver todo
                    </p>
                    <img className='rounded-circle' src={icono_right} style={{width: 20 / proporcional, height: 20 / proporcional, marginLeft: 10 / proporcional}}/>
                </div>
            </div>
            <div className='' 
                    style={{width: 1220 / proporcional, height: 40 / proporcional, background: 'white'}}>
                <div className='d-flex justify-content-start' style={{width: 1220 / proporcional, height: 40 / proporcional, paddingLeft: 20 / proporcional, 
                        paddingRight: 20 / proporcional, border: '1px solid #e5e5e5'}}>
                    <div style={{width: '15%', height: 38 / proporcional}}>
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${38 / proporcional}px`, cursor: 'pointer', color: '#434377', fontWeight: 600, 
                                textAlign: 'center', marginBottom: 0}}>
                            Más vendidos
                        </p>
                    </div>
                    <div style={{width: '20%', height: 38 / proporcional}}>
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${38 / proporcional}px`, cursor: 'pointer', color: '#555555', fontWeight: 600, 
                                textAlign: 'center', marginBottom: 0}}>
                            Nuevos productos
                        </p>
                    </div>
                    <div style={{width: '15%', height: 38 / proporcional}}>
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${38 / proporcional}px`, cursor: 'pointer', color: '#555555', fontWeight: 600, 
                                textAlign: 'center', marginBottom: 0}}>
                            Ofertas
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
