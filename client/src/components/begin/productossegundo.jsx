import React from 'react'

import icono_heart_white from '../../assets/iconos/icono_heart_white_96.png'
import icono_heart_blue from '../../assets/iconos/icono_heart_blue_96.png'
import icono_toggle_white from '../../assets/iconos/icono_toggle_white_96.png'
import icono_toggle_blue from '../../assets/iconos/icono_toggle_blue_96.png'
import icono_search_white from '../../assets/iconos/icono_search_white_96.png'
import icono_search_blue from '../../assets/iconos/icono_search_blue_96.png'
import icono_shop_white from '../../assets/iconos/icono_shop_white_96.png'

export default function ResultaoProductos({proporcional}) {

    return (
        <div className='' style={{width: '100%', paddingRight: 350 / proporcional, paddingLeft: 350 / proporcional}}>
        <div className='d-flex justify-content-between' style={{width: '100%', marginBottom: 30 / proporcional}}>
            <div className='shadow rounded' style={{width: 270 / proporcional, height: 382 / proporcional, 
                    border: '1px solid #e5e5e5', padding: 20 / proporcional}}>
                <div style={{width: 230 / proporcional, height: 342 / proporcional}}>
                    <div className='position-relative' style={{width: 228 / proporcional, height: 274 / proporcional}}>
                        <div style={{with: 228 / proporcional, height: 274 / proporcional, border: '1px solid rgba(229, 229, 229, 0.6)' }}/>
                        <div className='position-absolute' style={{width: 228 / proporcional, height: 75 / proporcional, top: 199 / proporcional }}>
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
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${34 / proporcional}px`, color: '#333333', fontWeight: 700, marginBottom: 0}}>
                            Asus 550a
                        </p>
                        <div className='d-flex' style={{width: 228 / proporcional, height: 34 / proporcional}}>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${34 / proporcional}px`, marginBottom: 0, color: '#434377', fontWeight: 700,
                                    marginRight: 6 / proporcional}}>
                                S/. 486.00
                            </p>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${34 / proporcional}px`, marginBottom: 0, color: '#999999', fontWeight: 400,
                                textDecorationLine: 'line-through'}}>
                                S/. 512.00
                            </p>
                        </div>  
                    </div>
                </div>
            </div>
            <div className='shadow rounded' style={{width: 270 / proporcional, height: 382 / proporcional, 
                    border: '1px solid #e5e5e5', padding: 20 / proporcional}}>
                <div style={{width: 230 / proporcional, height: 342 / proporcional}}>
                    <div className='position-relative' style={{width: 228 / proporcional, height: 274 / proporcional}}>
                        <div style={{with: 228 / proporcional, height: 274 / proporcional, border: '1px solid rgba(229, 229, 229, 0.6)' }}/>
                        <div className='position-absolute' style={{width: 228 / proporcional, height: 75 / proporcional, top: 199 / proporcional }}>
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
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${34 / proporcional}px`, color: '#333333', fontWeight: 700, marginBottom: 0}}>
                            Asus 550a
                        </p>
                        <div className='d-flex' style={{width: 228 / proporcional, height: 34 / proporcional}}>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${34 / proporcional}px`, marginBottom: 0, color: '#434377', fontWeight: 700,
                                    marginRight: 6 / proporcional}}>
                                S/. 486.00
                            </p>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${34 / proporcional}px`, marginBottom: 0, color: '#999999', fontWeight: 400,
                                textDecorationLine: 'line-through'}}>
                                S/. 512.00
                            </p>
                        </div>  
                    </div>
                </div>
            </div>
            <div className='shadow rounded' style={{width: 270 / proporcional, height: 382 / proporcional, 
                    border: '1px solid #e5e5e5', padding: 20 / proporcional}}>
                <div style={{width: 230 / proporcional, height: 342 / proporcional}}>
                    <div className='position-relative' style={{width: 228 / proporcional, height: 274 / proporcional}}>
                        <div style={{with: 228 / proporcional, height: 274 / proporcional, border: '1px solid rgba(229, 229, 229, 0.6)' }}/>
                        <div className='position-absolute' style={{width: 228 / proporcional, height: 75 / proporcional, top: 199 / proporcional }}>
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
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${34 / proporcional}px`, color: '#333333', fontWeight: 700, marginBottom: 0}}>
                            Asus 550a
                        </p>
                        <div className='d-flex' style={{width: 228 / proporcional, height: 34 / proporcional}}>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${34 / proporcional}px`, marginBottom: 0, color: '#434377', fontWeight: 700,
                                    marginRight: 6 / proporcional}}>
                                S/. 486.00
                            </p>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${34 / proporcional}px`, marginBottom: 0, color: '#999999', fontWeight: 400,
                                textDecorationLine: 'line-through'}}>
                                S/. 512.00
                            </p>
                        </div>  
                    </div>
                </div>
            </div>
            <div className='shadow rounded' style={{width: 270 / proporcional, height: 382 / proporcional, 
                    border: '1px solid #e5e5e5', padding: 20 / proporcional}}>
                <div style={{width: 230 / proporcional, height: 342 / proporcional}}>
                    <div className='position-relative' style={{width: 228 / proporcional, height: 274 / proporcional}}>
                        <div style={{with: 228 / proporcional, height: 274 / proporcional, border: '1px solid rgba(229, 229, 229, 0.6)' }}/>
                        <div className='position-absolute' style={{width: 228 / proporcional, height: 75 / proporcional, top: 199 / proporcional }}>
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
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${34 / proporcional}px`, color: '#333333', fontWeight: 700, marginBottom: 0}}>
                            Asus 550a
                        </p>
                        <div className='d-flex' style={{width: 228 / proporcional, height: 34 / proporcional}}>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${34 / proporcional}px`, marginBottom: 0, color: '#434377', fontWeight: 700,
                                    marginRight: 6 / proporcional}}>
                                S/. 486.00
                            </p>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${34 / proporcional}px`, marginBottom: 0, color: '#999999', fontWeight: 400,
                                textDecorationLine: 'line-through'}}>
                                S/. 512.00
                            </p>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
            <div className='d-flex justify-content-between' style={{width: '100%', marginBottom: 30 / proporcional}}>
                <div className='shadow rounded' style={{width: 270 / proporcional, height: 382 / proporcional, 
                        border: '1px solid #e5e5e5', padding: 20 / proporcional}}>
                    <div style={{width: 230 / proporcional, height: 342 / proporcional}}>
                        <div className='position-relative' style={{width: 228 / proporcional, height: 274 / proporcional}}>
                            <div style={{with: 228 / proporcional, height: 274 / proporcional, border: '1px solid rgba(229, 229, 229, 0.6)' }}/>
                            <div className='position-absolute' style={{width: 228 / proporcional, height: 75 / proporcional, top: 199 / proporcional }}>
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
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${34 / proporcional}px`, color: '#333333', fontWeight: 700, marginBottom: 0}}>
                                Asus 550a
                            </p>
                            <div className='d-flex' style={{width: 228 / proporcional, height: 34 / proporcional}}>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${34 / proporcional}px`, marginBottom: 0, color: '#434377', fontWeight: 700,
                                        marginRight: 6 / proporcional}}>
                                    S/. 486.00
                                </p>
                                <p style={{fontSize: 14 / proporcional, lineHeight: `${34 / proporcional}px`, marginBottom: 0, color: '#999999', fontWeight: 400,
                                    textDecorationLine: 'line-through'}}>
                                    S/. 512.00
                                </p>
                            </div>  
                        </div>
                    </div>
                </div>
                <div className='shadow rounded' style={{width: 270 / proporcional, height: 382 / proporcional, 
                        border: '1px solid #e5e5e5', padding: 20 / proporcional}}>
                    <div style={{width: 230 / proporcional, height: 342 / proporcional}}>
                        <div className='position-relative' style={{width: 228 / proporcional, height: 274 / proporcional}}>
                            <div style={{with: 228 / proporcional, height: 274 / proporcional, border: '1px solid rgba(229, 229, 229, 0.6)' }}/>
                            <div className='position-absolute' style={{width: 228 / proporcional, height: 75 / proporcional, top: 199 / proporcional }}>
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
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${34 / proporcional}px`, color: '#333333', fontWeight: 700, marginBottom: 0}}>
                                Asus 550a
                            </p>
                            <div className='d-flex' style={{width: 228 / proporcional, height: 34 / proporcional}}>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${34 / proporcional}px`, marginBottom: 0, color: '#434377', fontWeight: 700,
                                        marginRight: 6 / proporcional}}>
                                    S/. 486.00
                                </p>
                                <p style={{fontSize: 14 / proporcional, lineHeight: `${34 / proporcional}px`, marginBottom: 0, color: '#999999', fontWeight: 400,
                                    textDecorationLine: 'line-through'}}>
                                    S/. 512.00
                                </p>
                            </div>  
                        </div>
                    </div>
                </div>
                <div className='shadow rounded' style={{width: 270 / proporcional, height: 382 / proporcional, 
                        border: '1px solid #e5e5e5', padding: 20 / proporcional}}>
                    <div style={{width: 230 / proporcional, height: 342 / proporcional}}>
                        <div className='position-relative' style={{width: 228 / proporcional, height: 274 / proporcional}}>
                            <div style={{with: 228 / proporcional, height: 274 / proporcional, border: '1px solid rgba(229, 229, 229, 0.6)' }}/>
                            <div className='position-absolute' style={{width: 228 / proporcional, height: 75 / proporcional, top: 199 / proporcional }}>
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
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${34 / proporcional}px`, color: '#333333', fontWeight: 700, marginBottom: 0}}>
                                Asus 550a
                            </p>
                            <div className='d-flex' style={{width: 228 / proporcional, height: 34 / proporcional}}>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${34 / proporcional}px`, marginBottom: 0, color: '#434377', fontWeight: 700,
                                        marginRight: 6 / proporcional}}>
                                    S/. 486.00
                                </p>
                                <p style={{fontSize: 14 / proporcional, lineHeight: `${34 / proporcional}px`, marginBottom: 0, color: '#999999', fontWeight: 400,
                                    textDecorationLine: 'line-through'}}>
                                    S/. 512.00
                                </p>
                            </div>  
                        </div>
                    </div>
                </div>
                <div className='shadow rounded' style={{width: 270 / proporcional, height: 382 / proporcional, 
                        border: '1px solid #e5e5e5', padding: 20 / proporcional}}>
                    <div style={{width: 230 / proporcional, height: 342 / proporcional}}>
                        <div className='position-relative' style={{width: 228 / proporcional, height: 274 / proporcional}}>
                            <div style={{with: 228 / proporcional, height: 274 / proporcional, border: '1px solid rgba(229, 229, 229, 0.6)' }}/>
                            <div className='position-absolute' style={{width: 228 / proporcional, height: 75 / proporcional, top: 199 / proporcional }}>
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
                            <p style={{fontSize: 16 / proporcional, lineHeight: `${34 / proporcional}px`, color: '#333333', fontWeight: 700, marginBottom: 0}}>
                                Asus 550a
                            </p>
                            <div className='d-flex' style={{width: 228 / proporcional, height: 34 / proporcional}}>
                                <p style={{fontSize: 18 / proporcional, lineHeight: `${34 / proporcional}px`, marginBottom: 0, color: '#434377', fontWeight: 700,
                                        marginRight: 6 / proporcional}}>
                                    S/. 486.00
                                </p>
                                <p style={{fontSize: 14 / proporcional, lineHeight: `${34 / proporcional}px`, marginBottom: 0, color: '#999999', fontWeight: 400,
                                    textDecorationLine: 'line-through'}}>
                                    S/. 512.00
                                </p>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}