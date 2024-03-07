import React from 'react'

import image_00 from '../../assets/images/slider_image_1.png'
import image_01 from '../../assets/images/slider_image_2.png'
import image_02 from '../../assets/images/slider_image_3.png'
import image_03 from '../../assets/images/slider_image_4.png'

import icono_delivery from '../../assets/iconos/icono_delivery_white_96.png'
import icono_security from '../../assets/iconos/icono_security_white_96.png'
import icono_support from '../../assets/iconos/icono_support_white_96.png'

export default function SliderPrincipal({proporcional}) {

    return (
        <div className='position-relative' style={{width: '100%', heigth: 925 / proporcional, marginBottom: 30 / proporcional}}>
            <div id="carouselHomeSlider" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselHomeSlider" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselHomeSlider" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselHomeSlider" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselHomeSlider" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="position-relative carousel-item active" style={{width: '100%', height: 800 / proporcional}} data-bs-interval='3000'>
                        <img src={image_00} className=""  style={{width: 1920 / proporcional, height: 800 / proporcional}} alt="..."/>
                        <div className='position-absolute top-50 start-50 translate-middle shadow rounded' 
                            style={{width: 800 / proporcional, height: 300 / proporcional, background: 'rgba(239, 239, 239, 0.6)',
                            padding: 50 / proporcional}}>
                            <p style={{fontSize: 60 / proporcional, lineHeight: `${70 / proporcional}px`, color: 'white', fontWeight: 700, marginBottom: 10 / proporcional,
                                        textAlign: 'center'}}>
                                SUPER OFERTAS
                            </p>
                            <p style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, color: 'yellow', fontWeight: 700, marginBottom: 0,
                                        textAlign: 'center', marginBottom: 10 / proporcional}}>
                                Hasta el 50% de descuento
                            </p>
                            <div className='d-flex justify-content-center' style={{width: 700 / proporcional, height: 50 / proporcional}}>
                                <button className='btn' style={{width: 200 / proporcional, height: 50 / proporcional, background: '#434377', color: 'white',
                                    fontSize: 20 / proporcional, fontWeight: 500}}>
                                    Ir a comprar
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="position-relative carousel-item" style={{width: '100%', height: 800 / proporcional}} data-bs-interval='3000'>
                        <img src={image_01} className=""  style={{width: 1920 / proporcional, height: 800 / proporcional}} alt="..."/>
                        <div className='position-absolute top-50 start-50 translate-middle shadow rounded' 
                            style={{width: 800 / proporcional, height: 300 / proporcional, background: 'rgba(239, 239, 239, 0.6)',
                            padding: 50 / proporcional}}>
                            <p style={{fontSize: 60 / proporcional, lineHeight: `${70 / proporcional}px`, color: 'white', fontWeight: 700, marginBottom: 10 / proporcional,
                                        textAlign: 'center'}}>
                                SUPER OFERTAS
                            </p>
                            <p style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, color: 'yellow', fontWeight: 700, marginBottom: 0,
                                        textAlign: 'center', marginBottom: 10 / proporcional}}>
                                Hasta el 50% de descuento
                            </p>
                            <div className='d-flex justify-content-center' style={{width: 700 / proporcional, height: 50 / proporcional}}>
                                <button className='btn' style={{width: 200 / proporcional, height: 50 / proporcional, background: '#434377', color: 'white',
                                    fontSize: 20 / proporcional, fontWeight: 500}}>
                                    Ir a comprar
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="position-relative carousel-item" style={{width: '100%', height: 800 / proporcional}} data-bs-interval='3000'>
                        <img src={image_02} className=""  style={{width: 1920 / proporcional, height: 800 / proporcional}} alt="..."/>
                        <div className='position-absolute top-50 start-50 translate-middle shadow rounded' 
                            style={{width: 800 / proporcional, height: 300 / proporcional, background: 'rgba(239, 239, 239, 0.6)',
                            padding: 50 / proporcional}}>
                            <p style={{fontSize: 60 / proporcional, lineHeight: `${70 / proporcional}px`, color: 'white', fontWeight: 700, marginBottom: 10 / proporcional,
                                        textAlign: 'center'}}>
                                SUPER OFERTAS
                            </p>
                            <p style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, color: 'yellow', fontWeight: 700, marginBottom: 0,
                                        textAlign: 'center', marginBottom: 10 / proporcional}}>
                                Hasta el 50% de descuento
                            </p>
                            <div className='d-flex justify-content-center' style={{width: 700 / proporcional, height: 50 / proporcional}}>
                                <button className='btn' style={{width: 200 / proporcional, height: 50 / proporcional, background: '#434377', color: 'white',
                                    fontSize: 20 / proporcional, fontWeight: 500}}>
                                    Ir a comprar
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="position-relative carousel-item" style={{width: '100%', height: 800 / proporcional}} data-bs-interval='3000'>
                        <img src={image_03} className=""  style={{width: 1920 / proporcional, height: 800 / proporcional}} alt="..."/>
                        <div className='position-absolute top-50 start-50 translate-middle shadow rounded' 
                            style={{width: 800 / proporcional, height: 300 / proporcional, background: 'rgba(239, 239, 239, 0.6)',
                            padding: 50 / proporcional}}>
                            <p style={{fontSize: 60 / proporcional, lineHeight: `${70 / proporcional}px`, color: 'white', fontWeight: 700, marginBottom: 10 / proporcional,
                                        textAlign: 'center'}}>
                                SUPER OFERTAS
                            </p>
                            <p style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, color: 'yellow', fontWeight: 700, marginBottom: 0,
                                        textAlign: 'center', marginBottom: 10 / proporcional}}>
                                Hasta el 50% de descuento
                            </p>
                            <div className='d-flex justify-content-center' style={{width: 700 / proporcional, height: 50 / proporcional}}>
                                <button className='btn' style={{width: 200 / proporcional, height: 50 / proporcional, background: '#434377', color: 'white',
                                    fontSize: 20 / proporcional, fontWeight: 500}}>
                                    Ir a comprar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselHomeSlider" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselHomeSlider" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className='d-flex position-absolute botom-0 start-50 translate-middle shadow-lg rounded' 
                style={{width: 1220 / proporcional, height: 125 / proporcional, background: '#434377', zIndex: 99999}}>
                <div className='d-flex' style={{width: 406.6 / proporcional, height: 125 / proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional, 
                            paddingTop: 20 / proporcional, paddingBottom: 20 / proporcional}}>
                    <img src={icono_delivery} style={{width: 60 / proporcional, height: 60 / proporcional, marginLeft: 7.5 / proporcional, marginRight: 27.5 / proporcional,
                            marginTop: 7.5 / proporcional, marginBottom: 7.5 / proporcional}}/>
                    <div style={{width: 261.6 / proporcional, height: 85 / proporcional, paddingTop: 5 / proporcional, paddingBottom: 5 / proporcional}}>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${35 / proporcional}px`, marginBottom: 0, color: 'white', fontWeight: 700}}>Envío gratis</p>
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0, color: 'white', fontWeight: 500}}>Compras por encima de los S/.200</p>
                    </div>
                </div>
                <div className='d-flex' style={{width: 406.6 / proporcional, height: 125 / proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional, 
                            paddingTop: 20 / proporcional, paddingBottom: 20 / proporcional}}>
                    <img src={icono_security} style={{width: 60 / proporcional, height: 60 / proporcional, marginLeft: 7.5 / proporcional, marginRight: 27.5 / proporcional,
                            marginTop: 7.5 / proporcional, marginBottom: 7.5 / proporcional}}/>
                    <div style={{width: 261.6 / proporcional, height: 85 / proporcional, paddingTop: 5 / proporcional, paddingBottom: 5 / proporcional}}>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${35 / proporcional}px`, marginBottom: 0, color: 'white', fontWeight: 700}}>Gararantía de dinero</p>
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0, color: 'white', fontWeight: 500}}>Devolución a los 30 días.</p>
                    </div>
                </div>
                <div className='d-flex' style={{width: 406.6 / proporcional, height: 125 / proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional, 
                            paddingTop: 20 / proporcional, paddingBottom: 20 / proporcional}}>
                    <img src={icono_support} style={{width: 60 / proporcional, height: 60 / proporcional, marginLeft: 7.5 / proporcional, marginRight: 27.5 / proporcional,
                            marginTop: 7.5 / proporcional, marginBottom: 7.5 / proporcional}}/>
                    <div style={{width: 261.6 / proporcional, height: 85 / proporcional, paddingTop: 5 / proporcional, paddingBottom: 5 / proporcional}}>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${35 / proporcional}px`, marginBottom: 0, color: 'white', fontWeight: 700}}>Soporte en línea</p>
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0, color: 'white', fontWeight: 500}}>Soporte 24/7.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}