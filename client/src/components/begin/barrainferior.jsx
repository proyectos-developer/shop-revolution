import React from 'react'

import icono_gift from '../../assets/iconos/icono_gift_white_96.png'
import icono_testimonials from '../../assets/iconos/icono_testimonials_white_96.png'
import icono_order from '../../assets/iconos/icono_order_white_96.png'

export default function BarraInferior({proporcional}) {

    return (
        <div style={{width: '100%', height: 365 / proporcional, background: '#434377', paddingRight: 350 / proporcional, paddingLeft: 350 / proporcional,
            paddingTop: 50 / proporcional, paddingBottom: 40 / proporcional}}>
            <div className='d-flex justify-content-between' style={{width: 1220 / proporcional, height: 275 / proporcional}}>
                <div style={{width: 350 / proporcional, height: 275 / proporcional}}>
                    <div className='d-flex justify-content-center' style={{width: 350 / proporcional, height: 50 / proporcional,
                            marginTop: 20 / proporcional, marginBottom: 20 / proporcional}}>
                        <img src={icono_order} style={{width: 50 / proporcional, height: 50 / proporcional}}/>
                    </div>
                    <p style={{fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0, color: 'white', textAlign: 'center', fontWeight: 600,
                            marginBottom: 20 / proporcional}}>
                        ORDEN DE GUÍA
                    </p>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0, color: 'white', textAlign: 'center', fontWeight: 400}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
                <div style={{width: 350 / proporcional, height: 275 / proporcional}}>
                    <div className='d-flex justify-content-center' style={{width: 350 / proporcional, height: 50 / proporcional,
                            marginTop: 20 / proporcional, marginBottom: 20 / proporcional}}>
                        <img src={icono_gift} style={{width: 50 / proporcional, height: 50 / proporcional}}/>
                    </div>
                    <p style={{fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0, color: 'white', textAlign: 'center', fontWeight: 600,
                            marginBottom: 20 / proporcional}}>
                        CHEQUE DE REGALO
                    </p>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0, color: 'white', textAlign: 'center', fontWeight: 400}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
                <div style={{width: 350 / proporcional, height: 275 / proporcional}}>
                    <div className='d-flex justify-content-center' style={{width: 350 / proporcional, height: 50 / proporcional,
                            marginTop: 20 / proporcional, marginBottom: 20 / proporcional}}>
                        <img src={icono_testimonials} style={{width: 50 / proporcional, height: 50 / proporcional}}/>
                    </div>
                    <p style={{fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0, color: 'white', textAlign: 'center', fontWeight: 600,
                            marginBottom: 20 / proporcional}}>
                        TESTIMONIOS
                    </p>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0, color: 'white', textAlign: 'center', fontWeight: 400}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
            </div>
        </div>
    )
}