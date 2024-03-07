import React, { useState } from 'react'

import icono_button_right from '../../assets/iconos/icono_button_right_grey_96.png'
import icono_button_left from '../../assets/iconos/icono_button_left_grey_96.png'

import icono_star_empty from '../../assets/iconos/icono_star_empty_yellow_96.png'
import icono_star from '../../assets/iconos/icono_star_yellow_96.png'

import icono_button_plus from '../../assets/iconos/icono_button_plus_96.png'
import icono_button_minus from '../../assets/iconos/icono_button_minus_96.png'

import icono_carrito_white from '../../assets/iconos/icono_shop_white_96.png'

import icono_heart_white from '../../assets/iconos/icono_heart_white_96.png'
import icono_heart_blue from '../../assets/iconos/icono_heart_blue_96.png'
import icono_toggle_white from '../../assets/iconos/icono_toggle_white_96.png'
import icono_toggle_blue from '../../assets/iconos/icono_toggle_blue_96.png'
import icono_search_white from '../../assets/iconos/icono_search_white_96.png'
import icono_search_blue from '../../assets/iconos/icono_search_blue_96.png'
import icono_shop_white from '../../assets/iconos/icono_shop_white_96.png'

export default function Producto({proporcional}) {

    const [cantidad, setCantidad] = useState(1)

    return (
        <div className='' style={{width: 915 / proporcional, height: 'auto'}}>
            <div className='' style={{width: 915 / proporcional, height: 553 / proporcional, border: '1px solid #e5e5e5', padding: 20 / proporcional, marginBottom: 30 / proporcional}}>
                <div className='d-flex' style={{width: 875 / proporcional, height: 513 / proporcional}}>
                    <div style={{width: 328 / proporcional, height: 513 / proporcional}}>
                        <div style={{width: 328 / proporcional, height: 417 / proporcional, border: '1px solid #bdbdbd', marginBottom: 5 / proporcional}}/>
                        <div className='d-flex' style={{width: 328 / proporcional, height: 91 / proporcional}}>
                            <div style={{width: 32 / proporcional, height: 91 / proporcional}}>
                                <img src={icono_button_left} style={{width: 32 / proporcional, height: 32 / proporcional, marginTop: 29.5 / proporcional,
                                        marginBottom: 29.5 / proporcional, cursor: 'pointer'}}/>
                            </div>
                            <div style={{width: 66 / proporcional, height: 91 / proporcional}}>
                                <div style={{width: 66 / proporcional, height: 91 / proporcional, border: '1px solid #bdbdbd'}}/>
                            </div>
                            <div style={{width: 66 / proporcional, height: 91 / proporcional}}>
                                <div style={{width: 66 / proporcional, height: 91 / proporcional, border: '1px solid #bdbdbd'}}/>
                            </div>
                            <div style={{width: 66 / proporcional, height: 91 / proporcional}}>
                                <div style={{width: 66 / proporcional, height: 91 / proporcional, border: '1px solid #bdbdbd'}}/>
                            </div>
                            <div style={{width: 66 / proporcional, height: 91 / proporcional}}>
                                <div style={{width: 66 / proporcional, height: 91 / proporcional, border: '1px solid #bdbdbd'}}/>
                            </div>
                            <div style={{width: 32 / proporcional, height: 91 / proporcional}}>
                                <img src={icono_button_right} style={{width: 32 / proporcional, height: 32 / proporcional, marginTop: 29.5 / proporcional,
                                        marginBottom: 29.5 / proporcional, cursor: 'pointer'}}/>
                            </div>
                        </div>
                    </div>
                    <div style={{width: 547 / proporcional, height: 513 / proporcional}}>
                        <div style={{width: 527 / proporcional, height: 513 / proporcional, marginLeft: 20 / proporcional}}>
                            <p style={{fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 15 / proporcional, 
                                color: 'rgb(51,51,51)', fontWeight: 700}}>
                                BlackBerry Passport
                            </p>
                            <div className='d-flex' style={{width: 527 / proporcional, height: 15 / proporcional}}>
                                <img src={icono_star_empty} style={{with: 15 / proporcional, height: 15 / proporcional, marginRight: 5 / proporcional}}/>
                                <img src={icono_star_empty} style={{with: 15 / proporcional, height: 15 / proporcional, marginRight: 5 / proporcional}}/>
                                <img src={icono_star_empty} style={{with: 15 / proporcional, height: 15 / proporcional, marginRight: 5 / proporcional}}/>
                                <img src={icono_star_empty} style={{with: 15 / proporcional, height: 15 / proporcional, marginRight: 5 / proporcional}}/>
                                <img src={icono_star_empty} style={{with: 15 / proporcional, height: 15 / proporcional, marginRight: 5 / proporcional}}/>
                                <div style={{width: 2 / proporcional, height: 15 / proporcional, background: '#bdbdbd', marginRight: 5 / proporcional}}/>
                                <p style={{fontSize: 14 / proporcional, lineHeight: `${15 / proporcional}px`, fontWeight: 400, color: 'rgb(51, 51, 51)', marginBottom: 0}}>
                                    0 Orders
                                </p>
                            </div>
                            <div className='d-flex' style={{width: 527 / proporcional, height: 15 / proporcional, marginTop: 4 / proporcional}}>
                                <p style={{fontSize: 14 / proporcional, lineHeight: `${15 / proporcional}px`, marginBottom: 0, color: 'rgb(102, 102, 102)', fontWeight: 400,
                                        marginRight: 5 / proporcional}}>
                                    Item code:
                                </p>
                                <p style={{fontSize: 14 / proporcional, lineHeight: `${15 / proporcional}px`, marginBottom: 0, color: 'rgb(153, 153, 153)', fontWeight: 400}}>
                                    #a10083
                                </p>
                            </div>
                            <div className='d-flex' style={{width: 527 / proporcional, height: 15 / proporcional, marginTop: 4 / proporcional}}>
                                <p style={{fontSize: 14 / proporcional, lineHeight: `${15 / proporcional}px`, marginBottom: 0, color: 'rgb(102, 102, 102)', fontWeight: 400,
                                        marginRight: 5 / proporcional}}>
                                    Disponible:
                                </p>
                                <p style={{fontSize: 14 / proporcional, lineHeight: `${15 / proporcional}px`, marginBottom: 0, color: 'rgb(64, 182, 49)', fontWeight: 400}}>
                                    En stock
                                </p>
                            </div>
                            <div style={{width: 527 / proporcional, height: 1 / proporcional, marginTop: 20 / proporcional, background: '#e5e5e5', 
                                            marginBottom: 10 / proporcional}}/>
                            <div className='d-flex' style={{width: 527 / proporcional, height: 41 / proporcional, marginBottom: 20 / proporcional}}>
                                <p style={{fontSize: 14 / proporcional, lineHeight: `${41 / proporcional}px`, fontWeight: 700, color: 'rgb(51, 51, 51)', 
                                        marginBottom: 0, marginRight: 50 / proporcional}}>PRECIO:</p>
                                <p style={{fontSize: 30 / proporcional, lineHeight: `${41 / proporcional}px`, fontWeight: 400, color: 'rgb(237, 50, 30)', 
                                        marginBottom: 0, marginRight: 20 / proporcional}}>s/. 416.00</p>
                                <p style={{fontSize: 14 / proporcional, lineHeight: `${41 / proporcional}px`, fontWeight: 400, color: 'rgb(153, 153, 153)', 
                                        marginBottom: 0, textDecorationLine: 'line-through'}}>s/. 512.25</p>
                            </div>
                            <div className='' style={{width: 527 / proporcional, height: 'auto', paddingTop: 30 / proporcional, paddingBottom: 30 / proporcional,
                                    paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional, background: 'rgb(250 250, 250)', border: '1px soli #e8e8e8'}}>
                                <div className='d-flex' style={{width: 527 / proporcional, height: 78 / proporcional}}>
                                    <p style={{fontSize: 14 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0, color: 'rgb(51, 51, 51)', fontWeight: 700,
                                        marginRight: 10 / proporcional}}>
                                        Cantidad
                                    </p>
                                    <div style={{width: 240 / proporcional, height: 70 / proporcional}}>
                                        <div className='d-flex' style={{width: 240 / proporcional, height: 30 / proporcional, border: '1px solid #e8e8e8', marginBottom: 10 / proporcional}}>
                                            <img src={icono_button_minus} style={{width: 30 / proporcional, height: 30 / proporcional}}/>
                                            <input 
                                                style={{width: 180 / proporcional, height: 30 / proporcional, fontSize: 16 / proporcional, 
                                                        textAlign: 'center', lineHeight: `${30 / proporcional}px`}}
                                                type='number'
                                                className='form-control'
                                                value={cantidad}
                                                onChange={(event) => setCantidad(event.target.value)}
                                                id='cantidad'/>
                                            <img src={icono_button_plus} style={{width: 30 / proporcional, height: 30 / proporcional}}/>
                                        </div>
                                        <div className='d-flex justify-content-center btn' style={{width: 240 / proporcional, heigth: 30 / proporcional, background: '#434377'}}>
                                            <img src={icono_carrito_white} style={{width: 14 / proporcional, height: 14 / proporcional, margin: 8 / proporcional}}/>
                                            <p style={{fontSize: 14 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'white', marginBottom: 0, fontWeight: 700}}>
                                                Agregar a carrito
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex' style={{width: 915 / proporcional, height: 40 / proporcional, marginBottom: 6 / proporcional}}>
                <div style={{width: 150 / proporcional, height: 40 / proporcional, background: '#434377', marginRight: 3 / proporcional, cursor: 'pointer'}}>
                    <p style={{fontSize: 14 / proporcional, lineHeight: `${40 / proporcional}px`, fontWeight: 700, marginBottom: 0, color: 'white',
                                textAlign: 'center'}}>
                        Descripción
                    </p>
                </div>
                <div style={{width: 150 / proporcional, height: 40 / proporcional, background: '#white', border: '1px solid rgb(232,232,232)', 
                            marginRight: 3 / proporcional, cursor: 'pointer'}}>
                    <p style={{fontSize: 14 / proporcional, lineHeight: `${40 / proporcional}px`, fontWeight: 700, marginBottom: 0, color: '#666666',
                                textAlign: 'center'}}>
                        Comentarios (0)
                    </p>
                </div>
                <div style={{width: 150 / proporcional, height: 40 / proporcional, background: '#white', border: '1px solid rgb(232,232,232)', cursor: 'pointer'}}>
                    <p style={{fontSize: 14 / proporcional, lineHeight: `${40 / proporcional}px`, fontWeight: 700, marginBottom: 0, color: '#666666',
                                textAlign: 'center'}}>
                        Tags
                    </p>
                </div>
            </div>
            <div style={{width: 915 / proporcional, height: 'auto', padding: 20 / proporcional, border: '1px solid #e8e8e8', marginBottom: 15 / proporcional}}>
                <div style={{width: 865 / proporcional, height: 'auto'}}>
                    <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, fontWeight: 700, marginBottom: 10 / proporcional, 
                            color: '#333333', fontWeight: 700}}>
                        Descripción
                    </p>
                    <p style={{fontSize: 14 / proporcional, fontWeight: 400, color: 'rgb(102, 102, 102)', marginBottom: 10 / proporcional, 
                        lineHeight: `${24 / proporcional}px`}}>
                    Donec pede justo, fringilla vel, aliquet nec, vulpu tate eget. Sed quia consequuntur magni dolores. Id eges tas massa sem et elit. Donec pede justo, fringilla vel, aliquet nec, vulpu tate eget. Sed quia consequuntur magni dolores. Id eges tas massa sem et elit.
                    </p>
                    <p style={{fontSize: 14 / proporcional, fontWeight: 400, color: 'rgb(102, 102, 102)', marginBottom: 10 / proporcional, 
                        lineHeight: `${24 / proporcional}px`}}>
                    Donec pede justo, fringilla vel, aliquet nec, vulpu tate eget. Sed quia consequuntur magni dolores. Id eges tas massa sem et elit. Donec pede justo, fringilla vel, aliquet nec, vulpu tate eget. Sed quia consequuntur magni dolores. Id eges tas massa sem et elit.
                    </p>
                    <p style={{fontSize: 14 / proporcional, fontWeight: 400, color: 'rgb(102, 102, 102)', marginBottom: 10 / proporcional, 
                        lineHeight: `${24 / proporcional}px`}}>
                    Qenean commodo ligula eget dolor. Aenean massa. Cumt sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla onsequat mas quis enim. Donec pede justo, fringilla vel, aliquet nec, vulpu tate eget. Sed quia consequuntur magni dolores. Id eges tas massa sem et elit. Viva mus semper cursus libero
                    </p>
                </div>
            </div>
            <div style={{width: 915 / proporcional, height: 'auto'}}>
                <div className='d-flex justify-content-between' style={{width: 915 / proporcional, height: 30 / proporcional, marginBottom: 12 / proporcional}}>
                    <div className='d-flex justify-content-start' style={{width: 457.5 / proporcional, height: 30 / proporcional}}>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, color: 'rgb(51, 51, 51)', fontWeight: 700, marginBottom: 12 / proporcional}}>
                            Ventas adicionaless
                        </p>
                    </div>
                    <div className='d-flex justify-content-end' style={{width: 457.5 / proporcional, height: 30 / proporcional}}>
                        <img src={icono_button_left} style={{width: 30 / proporcional, height: 30 / proporcional, marginRight: 6 / proporcional}}/>
                        <img src={icono_button_right} style={{width: 30 / proporcional, height: 30 / proporcional}}/>
                    </div>
                </div>
                <div className='d-flex justify-content-between' style={{width: 915 / proporcional, height: 'auto', marginTop: 6 / proporcional}}>
                    <div className='shadow rounded' style={{width: 270 / proporcional, height: 'auto', 
                            border: '1px solid #e5e5e5', padding: 20 / proporcional}}>
                        <div style={{width: 230 / proporcional, height: 'auto'}}>
                            <div className='position-relative' style={{width: 228 / proporcional, height: 320 / proporcional}}>
                                <div style={{with: 228 / proporcional, height: 320 / proporcional, border: '1px solid rgba(229, 229, 229, 0.6)' }}/>
                                <div className='position-absolute' style={{width: 228 / proporcional, height: 75 / proporcional, top: 245 / proporcional }}>
                                    <div className='d-flex justify-content-center' style={{width: 228 / proporcional, height: 40 / proporcional, background: 'rgba(0, 0, 0, 0.3)'}}>
                                        <img src={icono_heart_white} style={{width: 24 / proporcional, height: 24 / proporcional, margin: 8 / proporcional, cursor: 'pointer'}}/>
                                        <img src={icono_toggle_white} style={{width: 24 / proporcional, height: 24 / proporcional, margin: 8 / proporcional, cursor: 'pointer'}}/>
                                        <img src={icono_search_white} style={{width: 24 / proporcional, height: 24 / proporcional, margin: 8 / proporcional, cursor: 'pointer'}}/>
                                    </div>
                                    <div className='d-flex justify-content-center' style={{width: 228 / proporcional, height: 35 / proporcional, background: '#434377',
                                            cursor: 'pointer'}}>
                                        <img src={icono_shop_white} style={{width: 24 / proporcional, height: 24 / proporcional, margin: 5.5 / proporcional}}/>
                                        <p style={{fontSize: 14 / proporcional, lineHeight: `${35 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'white'}}>
                                            Agregar a carrito
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div style={{width: 228 / proporcional, height: 73 / proporcional}}>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, color: '#333333', fontWeight: 700, marginBottom: 5 / proporcional}}>
                                    Asus 550a
                                </p>
                                <div className='d-flex' style={{width: 228 / proporcional, height: 24 / proporcional, marginBottom: 5 / proporcional}}>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0, color: '#434377', fontWeight: 700,
                                            marginRight: 6 / proporcional}}>
                                        S/. 486.00
                                    </p>
                                    <p style={{fontSize: 14 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0, color: '#999999', fontWeight: 400,
                                        textDecorationLine: 'line-through'}}>
                                        S/. 512.00
                                    </p>
                                </div>  
                                <div className='d-flex' style={{width: 228 / proporcional, height: 15 / proporcional}}>
                                    <img src={icono_star_empty} style={{width: 15 / proporcional, height: 15 / proporcional, marginRight: 5 / proporcional}}/>
                                    <img src={icono_star_empty} style={{width: 15 / proporcional, height: 15 / proporcional, marginRight: 5 / proporcional}}/>
                                    <img src={icono_star_empty} style={{width: 15 / proporcional, height: 15 / proporcional, marginRight: 5 / proporcional}}/>
                                    <img src={icono_star_empty} style={{width: 15 / proporcional, height: 15 / proporcional, marginRight: 5 / proporcional}}/>
                                    <img src={icono_star_empty} style={{width: 15 / proporcional, height: 15 / proporcional, marginRight: 5 / proporcional}}/>
                                    <div style={{width: 2 / proporcional, height: 15 / proporcional, background: '#bdbdbd', marginRight: 5 / proporcional}}/>
                                    <p style={{fontSize: 14 / proporcional, lineHeight: `${15 / proporcional}px`, fontWeight: 400, color: 'rgb(51, 51, 51)', marginBottom: 0}}>
                                        0 Orders
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='shadow rounded' style={{width: 270 / proporcional, height: 'auto', 
                            border: '1px solid #e5e5e5', padding: 20 / proporcional}}>
                        <div style={{width: 230 / proporcional, height: 'auto'}}>
                            <div className='position-relative' style={{width: 228 / proporcional, height: 320 / proporcional}}>
                                <div style={{with: 228 / proporcional, height: 320 / proporcional, border: '1px solid rgba(229, 229, 229, 0.6)' }}/>
                                <div className='position-absolute' style={{width: 228 / proporcional, height: 75 / proporcional, top: 245 / proporcional }}>
                                    <div className='d-flex justify-content-center' style={{width: 228 / proporcional, height: 40 / proporcional, background: 'rgba(0, 0, 0, 0.3)'}}>
                                        <img src={icono_heart_white} style={{width: 24 / proporcional, height: 24 / proporcional, margin: 8 / proporcional, cursor: 'pointer'}}/>
                                        <img src={icono_toggle_white} style={{width: 24 / proporcional, height: 24 / proporcional, margin: 8 / proporcional, cursor: 'pointer'}}/>
                                        <img src={icono_search_white} style={{width: 24 / proporcional, height: 24 / proporcional, margin: 8 / proporcional, cursor: 'pointer'}}/>
                                    </div>
                                    <div className='d-flex justify-content-center' style={{width: 228 / proporcional, height: 35 / proporcional, background: '#434377',
                                            cursor: 'pointer'}}>
                                        <img src={icono_shop_white} style={{width: 24 / proporcional, height: 24 / proporcional, margin: 5.5 / proporcional}}/>
                                        <p style={{fontSize: 14 / proporcional, lineHeight: `${35 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'white'}}>
                                            Agregar a carrito
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div style={{width: 228 / proporcional, height: 73 / proporcional}}>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, color: '#333333', fontWeight: 700, marginBottom: 5 / proporcional}}>
                                    Asus 550a
                                </p>
                                <div className='d-flex' style={{width: 228 / proporcional, height: 24 / proporcional, marginBottom: 5 / proporcional}}>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0, color: '#434377', fontWeight: 700,
                                            marginRight: 6 / proporcional}}>
                                        S/. 486.00
                                    </p>
                                    <p style={{fontSize: 14 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0, color: '#999999', fontWeight: 400,
                                        textDecorationLine: 'line-through'}}>
                                        S/. 512.00
                                    </p>
                                </div>  
                                <div className='d-flex' style={{width: 228 / proporcional, height: 15 / proporcional}}>
                                    <img src={icono_star_empty} style={{width: 15 / proporcional, height: 15 / proporcional, marginRight: 5 / proporcional}}/>
                                    <img src={icono_star_empty} style={{width: 15 / proporcional, height: 15 / proporcional, marginRight: 5 / proporcional}}/>
                                    <img src={icono_star_empty} style={{width: 15 / proporcional, height: 15 / proporcional, marginRight: 5 / proporcional}}/>
                                    <img src={icono_star_empty} style={{width: 15 / proporcional, height: 15 / proporcional, marginRight: 5 / proporcional}}/>
                                    <img src={icono_star_empty} style={{width: 15 / proporcional, height: 15 / proporcional, marginRight: 5 / proporcional}}/>
                                    <div style={{width: 2 / proporcional, height: 15 / proporcional, background: '#bdbdbd', marginRight: 5 / proporcional}}/>
                                    <p style={{fontSize: 14 / proporcional, lineHeight: `${15 / proporcional}px`, fontWeight: 400, color: 'rgb(51, 51, 51)', marginBottom: 0}}>
                                        0 Orders
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='shadow rounded' style={{width: 270 / proporcional, height: 'auto', 
                            border: '1px solid #e5e5e5', padding: 20 / proporcional}}>
                        <div style={{width: 230 / proporcional, height: 'auto'}}>
                            <div className='position-relative' style={{width: 228 / proporcional, height: 320 / proporcional}}>
                                <div style={{with: 228 / proporcional, height: 320 / proporcional, border: '1px solid rgba(229, 229, 229, 0.6)' }}/>
                                <div className='position-absolute' style={{width: 228 / proporcional, height: 75 / proporcional, top: 245 / proporcional }}>
                                    <div className='d-flex justify-content-center' style={{width: 228 / proporcional, height: 40 / proporcional, background: 'rgba(0, 0, 0, 0.3)'}}>
                                        <img src={icono_heart_white} style={{width: 24 / proporcional, height: 24 / proporcional, margin: 8 / proporcional, cursor: 'pointer'}}/>
                                        <img src={icono_toggle_white} style={{width: 24 / proporcional, height: 24 / proporcional, margin: 8 / proporcional, cursor: 'pointer'}}/>
                                        <img src={icono_search_white} style={{width: 24 / proporcional, height: 24 / proporcional, margin: 8 / proporcional, cursor: 'pointer'}}/>
                                    </div>
                                    <div className='d-flex justify-content-center' style={{width: 228 / proporcional, height: 35 / proporcional, background: '#434377',
                                            cursor: 'pointer'}}>
                                        <img src={icono_shop_white} style={{width: 24 / proporcional, height: 24 / proporcional, margin: 5.5 / proporcional}}/>
                                        <p style={{fontSize: 14 / proporcional, lineHeight: `${35 / proporcional}px`, marginBottom: 0, fontWeight: 400, color: 'white'}}>
                                            Agregar a carrito
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div style={{width: 228 / proporcional, height: 68 / proporcional}}>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, color: '#333333', fontWeight: 700, marginBottom: 5 / proporcional}}>
                                    Asus 550a
                                </p>
                                <div className='d-flex' style={{width: 228 / proporcional, height: 24 / proporcional, marginBottom: 5 / proporcional}}>
                                    <p style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0, color: '#434377', fontWeight: 700,
                                            marginRight: 6 / proporcional}}>
                                        S/. 486.00
                                    </p>
                                    <p style={{fontSize: 14 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0, color: '#999999', fontWeight: 400,
                                        textDecorationLine: 'line-through'}}>
                                        S/. 512.00
                                    </p>
                                </div>  
                                <div className='d-flex' style={{width: 228 / proporcional, height: 15 / proporcional}}>
                                    <img src={icono_star_empty} style={{width: 15 / proporcional, height: 15 / proporcional, marginRight: 5 / proporcional}}/>
                                    <img src={icono_star_empty} style={{width: 15 / proporcional, height: 15 / proporcional, marginRight: 5 / proporcional}}/>
                                    <img src={icono_star_empty} style={{width: 15 / proporcional, height: 15 / proporcional, marginRight: 5 / proporcional}}/>
                                    <img src={icono_star_empty} style={{width: 15 / proporcional, height: 15 / proporcional, marginRight: 5 / proporcional}}/>
                                    <img src={icono_star_empty} style={{width: 15 / proporcional, height: 15 / proporcional, marginRight: 5 / proporcional}}/>
                                    <div style={{width: 2 / proporcional, height: 15 / proporcional, background: '#bdbdbd', marginRight: 5 / proporcional}}/>
                                    <p style={{fontSize: 14 / proporcional, lineHeight: `${15 / proporcional}px`, fontWeight: 400, color: 'rgb(51, 51, 51)', marginBottom: 0}}>
                                        0 Orders
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}