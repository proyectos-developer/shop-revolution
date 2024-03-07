import React from 'react'

import icono_check_blue from '../../../assets/iconos/icono_check_blue_96.png'

export default function FooterPrincipal({proporcional}) {
    
    return (
        <div style={{width: '100%', paddingLeft: 350 / proporcional, paddingRight: 350 / proporcional, paddingTop: 40 / proporcional,
                paddingBottom: 35 / proporcional}}>
            <div className='d-flex justify-content-between' style={{width: 1220 / proporcional, height: 'auto'}}>
                <div style={{width: 280 / proporcional, height: 'auto'}}>
                    <p style={{fontSize: 16 / proporcional, color: '#212121', fontWeight: 700, marginBottom: 20 / proporcional, lineHeight: `${20 / proporcional}px`}}>
                        Ayuda
                    </p>
                    <div className='d-flex' style={{width: 280 / proporcional, height: 20 / proporcional, marginBottom: 10 / proporcional}}>
                        <img src={icono_check_blue} style={{width: 14 / proporcional, height: 14 / proporcional, marginTop: 3 / proporcional, 
                            marginBottom: 3 / proporcional, marginRight: 5 / proporcional}}/>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, color: '#212121', marginBottom: 0}}>
                            Pagos
                        </p>
                    </div>
                    <div className='d-flex' style={{width: 280 / proporcional, height: 20 / proporcional, marginBottom: 10 / proporcional}}>
                        <img src={icono_check_blue} style={{width: 14 / proporcional, height: 14 / proporcional, marginTop: 3 / proporcional, 
                            marginBottom: 3 / proporcional, marginRight: 5 / proporcional}}/>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, color: '#212121', marginBottom: 0}}>
                            Tarjetas guardadas
                        </p>
                    </div>
                    <div className='d-flex' style={{width: 280 / proporcional, height: 20 / proporcional, marginBottom: 10 / proporcional}}>
                        <img src={icono_check_blue} style={{width: 14 / proporcional, height: 14 / proporcional, marginTop: 3 / proporcional, 
                            marginBottom: 3 / proporcional, marginRight: 5 / proporcional}}/>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, color: '#212121', marginBottom: 0}}>
                            Entregas
                        </p>
                    </div>
                    <div className='d-flex' style={{width: 280 / proporcional, height: 20 / proporcional, marginBottom: 10 / proporcional}}>
                        <img src={icono_check_blue} style={{width: 14 / proporcional, height: 14 / proporcional, marginTop: 3 / proporcional, 
                            marginBottom: 3 / proporcional, marginRight: 5 / proporcional}}/>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, color: '#212121', marginBottom: 0}}>
                            Cancelacion y retornos
                        </p>
                    </div>
                    <div className='d-flex' style={{width: 280 / proporcional, height: 20 / proporcional, marginBottom: 10 / proporcional}}>
                        <img src={icono_check_blue} style={{width: 14 / proporcional, height: 14 / proporcional, marginTop: 3 / proporcional, 
                            marginBottom: 3 / proporcional, marginRight: 5 / proporcional}}/>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, color: '#212121', marginBottom: 0}}>
                            Hechos
                        </p>
                    </div>
                    <div className='d-flex' style={{width: 280 / proporcional, height: 20 / proporcional, marginBottom: 10 / proporcional}}>
                        <img src={icono_check_blue} style={{width: 14 / proporcional, height: 14 / proporcional, marginTop: 3 / proporcional, 
                            marginBottom: 3 / proporcional, marginRight: 5 / proporcional}}/>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, color: '#212121', marginBottom: 0}}>
                            Reportes
                        </p>
                    </div>
                </div>
                <div style={{width: 280 / proporcional, height: 'auto'}}>
                    <p style={{fontSize: 16 / proporcional, color: '#212121', fontWeight: 700, marginBottom: 20 / proporcional, lineHeight: `${20 / proporcional}px`}}>
                        Tienda
                    </p>
                    <div className='d-flex' style={{width: 280 / proporcional, height: 20 / proporcional, marginBottom: 10 / proporcional}}>
                        <img src={icono_check_blue} style={{width: 14 / proporcional, height: 14 / proporcional, marginTop: 3 / proporcional, 
                            marginBottom: 3 / proporcional, marginRight: 5 / proporcional}}/>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, color: '#212121', marginBottom: 0}}>
                            Contáctanos
                        </p>
                    </div>
                    <div className='d-flex' style={{width: 280 / proporcional, height: 20 / proporcional, marginBottom: 10 / proporcional}}>
                        <img src={icono_check_blue} style={{width: 14 / proporcional, height: 14 / proporcional, marginTop: 3 / proporcional, 
                            marginBottom: 3 / proporcional, marginRight: 5 / proporcional}}/>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, color: '#212121', marginBottom: 0}}>
                            Acerca de nosotros
                        </p>
                    </div>
                    <div className='d-flex' style={{width: 280 / proporcional, height: 20 / proporcional, marginBottom: 10 / proporcional}}>
                        <img src={icono_check_blue} style={{width: 14 / proporcional, height: 14 / proporcional, marginTop: 3 / proporcional, 
                            marginBottom: 3 / proporcional, marginRight: 5 / proporcional}}/>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, color: '#212121', marginBottom: 0}}>
                            Blog
                        </p>
                    </div>
                    <div className='d-flex' style={{width: 280 / proporcional, height: 20 / proporcional, marginBottom: 10 / proporcional}}>
                        <img src={icono_check_blue} style={{width: 14 / proporcional, height: 14 / proporcional, marginTop: 3 / proporcional, 
                            marginBottom: 3 / proporcional, marginRight: 5 / proporcional}}/>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, color: '#212121', marginBottom: 0}}>
                            Especiales
                        </p>
                    </div>
                    <div className='d-flex' style={{width: 280 / proporcional, height: 20 / proporcional, marginBottom: 10 / proporcional}}>
                        <img src={icono_check_blue} style={{width: 14 / proporcional, height: 14 / proporcional, marginTop: 3 / proporcional, 
                            marginBottom: 3 / proporcional, marginRight: 5 / proporcional}}/>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, color: '#212121', marginBottom: 0}}>
                            Nuevos productos
                        </p>
                    </div>
                    <div className='d-flex' style={{width: 280 / proporcional, height: 20 / proporcional, marginBottom: 10 / proporcional}}>
                        <img src={icono_check_blue} style={{width: 14 / proporcional, height: 14 / proporcional, marginTop: 3 / proporcional, 
                            marginBottom: 3 / proporcional, marginRight: 5 / proporcional}}/>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, color: '#212121', marginBottom: 0}}>
                            Más vendidos
                        </p>
                    </div>
                </div>
                <div style={{width: 280 / proporcional, height: 'auto'}}>
                    <p style={{fontSize: 16 / proporcional, color: '#212121', fontWeight: 700, marginBottom: 20 / proporcional, lineHeight: `${20 / proporcional}px`}}>
                        Mi cuenta
                    </p>
                    <div className='d-flex' style={{width: 280 / proporcional, height: 20 / proporcional, marginBottom: 10 / proporcional}}>
                        <img src={icono_check_blue} style={{width: 14 / proporcional, height: 14 / proporcional, marginTop: 3 / proporcional, 
                            marginBottom: 3 / proporcional, marginRight: 5 / proporcional}}/>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, color: '#212121', marginBottom: 0}}>
                            Mis ordenes
                        </p>
                    </div>
                    <div className='d-flex' style={{width: 280 / proporcional, height: 20 / proporcional, marginBottom: 10 / proporcional}}>
                        <img src={icono_check_blue} style={{width: 14 / proporcional, height: 14 / proporcional, marginTop: 3 / proporcional, 
                            marginBottom: 3 / proporcional, marginRight: 5 / proporcional}}/>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, color: '#212121', marginBottom: 0}}>
                            Mi lista de favoritos
                        </p>
                    </div>
                    <div className='d-flex' style={{width: 280 / proporcional, height: 20 / proporcional, marginBottom: 10 / proporcional}}>
                        <img src={icono_check_blue} style={{width: 14 / proporcional, height: 14 / proporcional, marginTop: 3 / proporcional, 
                            marginBottom: 3 / proporcional, marginRight: 5 / proporcional}}/>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, color: '#212121', marginBottom: 0}}>
                            Recibos de créditos
                        </p>
                    </div>
                    <div className='d-flex' style={{width: 280 / proporcional, height: 20 / proporcional, marginBottom: 10 / proporcional}}>
                        <img src={icono_check_blue} style={{width: 14 / proporcional, height: 14 / proporcional, marginTop: 3 / proporcional, 
                            marginBottom: 3 / proporcional, marginRight: 5 / proporcional}}/>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, color: '#212121', marginBottom: 0}}>
                            Mis direcciones
                        </p>
                    </div>
                    <div className='d-flex' style={{width: 280 / proporcional, height: 20 / proporcional, marginBottom: 10 / proporcional}}>
                        <img src={icono_check_blue} style={{width: 14 / proporcional, height: 14 / proporcional, marginTop: 3 / proporcional, 
                            marginBottom: 3 / proporcional, marginRight: 5 / proporcional}}/>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, color: '#212121', marginBottom: 0}}>
                            Mi personal
                        </p>
                    </div>
                    <div className='d-flex' style={{width: 280 / proporcional, height: 20 / proporcional, marginBottom: 10 / proporcional}}>
                        <img src={icono_check_blue} style={{width: 14 / proporcional, height: 14 / proporcional, marginTop: 3 / proporcional, 
                            marginBottom: 3 / proporcional, marginRight: 5 / proporcional}}/>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, color: '#212121', marginBottom: 0}}>
                            Reportes
                        </p>
                    </div>
                </div>
                <div style={{width: 280 / proporcional, height: 'auto'}}>
                    <p style={{fontSize: 16 / proporcional, color: '#212121', fontWeight: 700, marginBottom: 20 / proporcional, lineHeight: `${20 / proporcional}px`}}>
                        Clientes
                    </p>
                    <div className='d-flex' style={{width: 280 / proporcional, height: 20 / proporcional, marginBottom: 10 / proporcional}}>
                        <img src={icono_check_blue} style={{width: 14 / proporcional, height: 14 / proporcional, marginTop: 3 / proporcional, 
                            marginBottom: 3 / proporcional, marginRight: 5 / proporcional}}/>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, color: '#212121', marginBottom: 0}}>
                            Compras en línea
                        </p>
                    </div>
                    <div className='d-flex' style={{width: 280 / proporcional, height: 20 / proporcional, marginBottom: 10 / proporcional}}>
                        <img src={icono_check_blue} style={{width: 14 / proporcional, height: 14 / proporcional, marginTop: 3 / proporcional, 
                            marginBottom: 3 / proporcional, marginRight: 5 / proporcional}}/>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, color: '#212121', marginBottom: 0}}>
                            Programa de afiliación
                        </p>
                    </div>
                    <div className='d-flex' style={{width: 280 / proporcional, height: 20 / proporcional, marginBottom: 10 / proporcional}}>
                        <img src={icono_check_blue} style={{width: 14 / proporcional, height: 14 / proporcional, marginTop: 3 / proporcional, 
                            marginBottom: 3 / proporcional, marginRight: 5 / proporcional}}/>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, color: '#212121', marginBottom: 0}}>
                            Tarjetas de regalo
                        </p>
                    </div>
                    <div className='d-flex' style={{width: 280 / proporcional, height: 20 / proporcional, marginBottom: 10 / proporcional}}>
                        <img src={icono_check_blue} style={{width: 14 / proporcional, height: 14 / proporcional, marginTop: 3 / proporcional, 
                            marginBottom: 3 / proporcional, marginRight: 5 / proporcional}}/>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, color: '#212121', marginBottom: 0}}>
                            Primera suscripción
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}