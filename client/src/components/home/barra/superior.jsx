import React, { useState } from 'react'

import icono_profile_blue from '../../../assets/iconos/icono_profile_blue_96.png'
import icono_heart_blue from '../../../assets/iconos/icono_heart_blue_96.png'
import icono_toggle_blue from '../../../assets/iconos/icono_toggle_blue_96.png'
import icono_phone_white from '../../../assets/iconos/icono_phone_white_96.png'
import icono_search_black from '../../../assets/iconos/icono_search_black_96.png'
import icono_shop_white from '../../../assets/iconos/icono_shop_white_96.png'

export default function BarraSuperior({proporcional}) {

    const [buscar_producto, setBuscarProducto] = useState('')

    const [boton_buscar, setBotonBuscar] = useState (false)

    return (
        <div style={{width: '100%', height: 100 / proporcional, height: 125 / proporcional,
                    paddingLeft: 350 / proporcional, paddingRight: 350 / proporcional}}>
            <div className='d-flex' style={{width: 1220 / proporcional, height: 50 / proporcional}}>
                <div className='d-flex justify-content-start' style={{width: 610 / proporcional, height: 50 / proporcional, paddingTop: 12.5 / proporcional,
                    paddingBottom: 12.5 / proporcional}}>
                    <div className='rounded' style={{width: 25 / proporcional, height: 25 / proporcional, background: '#434377', marginRight: 5 / proporcional}}>
                        <img src={icono_phone_white} style={{width: 14 / proporcional, height: 14 / proporcional, margin: 5.5 / proporcional}}/>
                    </div>
                    <p style={{fontSize: 14 / proporcional, lineHeight: `${25 / proporcional}px`, marginBottom: 0, color: '#000000', fontWeight: 400}}>
                        Call Center Support 24/7: (01)6176600
                    </p>
                </div>
                <div className='d-flex justify-content-end' style={{width: 610 / proporcional, height: 50 / proporcional, paddingTop: 12.5 / proporcional,
                    paddingBottom: 12.5 / proporcional}}>
                    <div className='d-flex' style={{width: 'auto', height: 25 / proporcional, marginRight: 5 / proporcional, cursor: 'pointer'}}>
                        <img src={icono_profile_blue} style={{width: 14 / proporcional, height: 14 / proporcional, margin: 5.5 / proporcional, 
                            marginRight: 10 / proporcional}}/>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${25 / proporcional}px`, marginBottom: 0, fontWeight: 400}}>Mi cuenta</p>
                    </div>
                    <div className='d-flex' style={{width: 'auto', height: 25 / proporcional, marginRight: 5 / proporcional, cursor: 'pointer'}}>
                        <img src={icono_heart_blue} style={{width: 14 / proporcional, height: 14 / proporcional, margin: 5.5 / proporcional, 
                            marginRight: 10 / proporcional}}/>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${25 / proporcional}px`, marginBottom: 0, fontWeight: 400}}>Mi lista</p>
                    </div>
                    <div className='d-flex' style={{width: 'auto', height: 25 / proporcional, marginRight: 5 / proporcional, cursor: 'pointer'}}>
                        <img src={icono_toggle_blue} style={{width: 14 / proporcional, height: 14 / proporcional, margin: 5.5 / proporcional, 
                            marginRight: 10 / proporcional}}/>
                        <p style={{fontSize: 14 / proporcional, lineHeight: `${25 / proporcional}px`, marginBottom: 0, fontWeight: 400}}>Comparar</p>
                    </div>
                </div>
            </div>
            <div className='d-flex' style={{width: 1220 / proporcional, height: 75 / proporcional}}>
                <div className='d-flex justify-content-start' style={{width: 350 / proporcional, height: 75 / proporcional}}>
                    <p style={{fontSize: 30 / proporcional, lineHeight: `${75 / proporcional}px`, fontWeight: 600, color: 'rgb(67, 67, 119)', marginBottom: 0}}>
                        SHOP REVOLUTION
                    </p>
                </div>
                <div className='d-flex justify-content-center' 
                        style={{width: 518.7 / proporcional, height: 75 / proporcional, paddingTop: 12.5 / proporcional, paddingBottom: 12.5 / proporcional}}>
                    <input  
                        style={{width: 350 / proporcional, height: 50 / proporcional, border: '1px solid #bdbdbd', borderTopLeftRadius: 8 / proporcional,
                                borderBottomLeftRadius: 8 / proporcional, borderTopRightRadius: 0, borderBottomRightRadius: 0}}
                        value={buscar_producto}
                        onChange={(event) => setBuscarProducto(event.target.value)}
                        className='form-control'
                        placeholder='Ejemplo: Radio, celular, frutas...'/>
                    <div className='d-flex justify-content-center' style={{width: 150 / proporcional, height: 50 / proporcional, background: '#bdbdbd',
                            paddingTop: 13 / proporcional, paddingBottom: 13 / proporcional, borderTopRightRadius: 8 / proporcional,
                            borderBottomRightRadius: 8 / proporcional, borderTopLeftRadius: 0, borderBottomLeftRadius: 0,
                            border: '1px solid #bdbdbd'}}>
                        <img src={icono_search_black} style={{width: 24 / proporcional, height: 24 / proporcional, marginRight: 10 / proporcional, cursor: 'pointer'}}/>
                        <p style={{width: 20 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 500, marginBottom: 0, color: '#212121'}}>Buscar</p>
                    </div>
                </div>
                <div className='d-flex justify-content-end' 
                        style={{width: 350 / proporcional, height: 75 / proporcional, paddingTop: 12.5 / proporcional, paddingBottom: 12.5 / proporcional,
                            cursor: 'pointer'}}>
                    <div className='d-flex' style={{width: 220 / proporcional, height: 50 / proporcional}}>
                        <div style={{width: 50 / proporcional, height: 50 / proporcional, padding: 8 / proporcional, background: '#434377',
                                borderTopLeftRadius: 8 / proporcional, borderBottomLeftRadius: 8 / proporcional}}>
                            <img src={icono_shop_white} style={{width: 32 / proporcional, height: 32 / proporcional, cursor: 'pointer'}}/>
                        </div>
                        <div className='d-flex justify-content-center' 
                                style={{width: 170 / proporcional, height: 50 / proporcional, border: '1px solid #bdbdbd', borderLeft: 'none', 
                                    borderTopRightRadius: 8 / proporcional, borderBottomRightRadius: 8 / proporcional}}>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${50 / proporcional}px`, color: '#555555', marginBottom: 0, 
                                        marginRight: 5 / proporcional}}>
                                0 Item(s)
                            </p>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${50 / proporcional}px`, color: '#555555', marginBottom: 0, 
                                        marginRight: 5 / proporcional}}>
                                -
                            </p>
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${50 / proporcional}px`, color: '#555555', marginBottom: 0}}>
                                S/. 0.00
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}