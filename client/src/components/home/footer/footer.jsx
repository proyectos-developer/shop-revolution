import React from 'react'

import icono_visa from '../../../assets/iconos/icono_pago_visa_20.png'
import icono_american from '../../../assets/iconos/icono_pago_american_20.png'
import icono_paypal from '../../../assets/iconos/icono_pago_paypal_20.png'
import icono_mastercard from '../../../assets/iconos/icono_pago_mastercard_20.png'
import icono_debit from '../../../assets/iconos/icono_pago_debito_20.png'

export default function Footer({proporcional}) {
    
    return (
        <div style={{width: '100%', paddingLeft: 350 / proporcional, paddingRight: 350 / proporcional, background: '#434377', paddingTop: 20 / proporcional, 
                paddingBottom: 20 / proporcional}}>
            <div className='d-flex' style={{width: 1220 / proporcional, height: 20 / proporcional}}>
                <div className='d-flex' style={{width: 810 / proporcional, height: 20 / proporcional}}>
                    <div style={{width: 160 / proporcional, height: 20 / proporcional}}>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0, color: 'white', fontWeight: 500}}>
                            @2024 SUPERSHOP
                        </p>
                    </div>
                    <div className='d-flex' style={{width: 600 / proporcional, height: 20 / proporcional}}>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0, color: 'white', fontWeight: 400, marginRight: 5 / proporcional}}>
                            Políticas:
                        </p>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0, color: 'white', fontWeight: 400, marginRight: 5 / proporcional}}>
                            Terminos de uso
                        </p>
                        <div style={{width: 2 / proporcional, height: 20 / proporcional, background: 'white', marginRight: 5 / proporcional}}/>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0, color: 'white', fontWeight: 400, marginRight: 5 / proporcional}}>
                            Seguridad
                        </p>
                        <div style={{width: 2 / proporcional, height: 20 / proporcional, background: 'white', marginRight: 5 / proporcional}}/>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0, color: 'white', fontWeight: 400, marginRight: 5 / proporcional}}>
                            Privacidad
                        </p>
                        <div style={{width: 2 / proporcional, height: 20 / proporcional, background: 'white', marginRight: 5 / proporcional}}/>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0, color: 'white', fontWeight: 400}}>
                            Infracciones
                        </p>
                    </div>
                </div>
                <div className='d-flex justify-content-end' style={{width: 810 / proporcional, height: 20 / proporcional}}>
                    <p style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0, color: 'white', fontWeight: 500}}>
                        MÉTODOS DE PAGO
                    </p>
                    <div className='d-flex justify-content-center' style={{width: 40 / proporcional, height: 20 / proporcional}}>
                        <img src={icono_visa} style={{width: 32 / proporcional, height: 20 / proporcional}}/>
                    </div>
                    <div className='d-flex justify-content-center' style={{width: 40 / proporcional, height: 20 / proporcional}}>
                        <img src={icono_american} style={{width: 29 / proporcional, height: 20 / proporcional}}/>
                    </div>
                    <div className='d-flex justify-content-center' style={{width: 40 / proporcional, height: 20 / proporcional}}>
                        <img src={icono_paypal} style={{width: 32 / proporcional, height: 20 / proporcional}}/>
                    </div>
                    <div className='d-flex justify-content-center' style={{width: 40 / proporcional, height: 20 / proporcional}}>
                        <img src={icono_mastercard} style={{width: 33 / proporcional, height: 20 / proporcional}}/>
                    </div>
                    <div className='d-flex justify-content-center' style={{width: 40 / proporcional, height: 20 / proporcional}}>
                        <img src={icono_debit} style={{width: 28 / proporcional, height: 20 / proporcional}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}