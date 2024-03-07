import React from 'react'

export default function MarcasProveedores({proporcional}) {

    return (
        <div style={{width: '100%', height: 90 / proporcional, marginTop: 66 / proporcional, marginBottom: 55 / proporcional,
                paddingLeft: 350 / proporcional, paddingRight: 350 / proporcional}}>
            <div id="carouselProveedores" className="carousel slide" data-bs-ride='carousel'>
                <div className="carousel-inner">
                    <div className="carousel-item active" style={{width: '100%', height: 90 / proporcional}} 
                        data-bs-interval='2000'>
                        <div className='d-flex justify-content-between' style={{width:'100%'}}>
                            <div className='rounded shadow-sm' style={{width: 190 / proporcional, height: 88 / proporcional, border: '1px solid #e5e5e5',  
                                        background: 'white'}}>
                                        
                            </div>
                            <div className='rounded shadow-sm' style={{width: 190 / proporcional, height: 88 / proporcional, border: '1px solid #e5e5e5',  
                                        background: 'white'}}>
                                        
                            </div>
                            <div className='rounded shadow-sm' style={{width: 190 / proporcional, height: 88 / proporcional, border: '1px solid #e5e5e5',  
                                        background: 'white'}}>
                                        
                            </div>
                            <div className='rounded shadow-sm' style={{width: 190 / proporcional, height: 88 / proporcional, border: '1px solid #e5e5e5',  
                                        background: 'white'}}>
                                        
                            </div>
                            <div className='rounded shadow-sm' style={{width: 190 / proporcional, height: 88 / proporcional, border: '1px solid #e5e5e5',  
                                        background: 'white'}}>
                                        
                            </div>
                            <div className='rounded shadow-sm' style={{width: 190 / proporcional, height: 88 / proporcional, border: '1px solid #e5e5e5',  
                                        background: 'white'}}>
                                        
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" style={{width: '100%', height: 90 / proporcional}} 
                        data-bs-interval='2000'>
                        <div className='d-flex justify-content-between' style={{width:'100%'}}>
                            <div className='rounded shadow-sm' style={{width: 190 / proporcional, height: 88 / proporcional, border: '1px solid #e5e5e5',  
                                        background: 'white'}}>
                                        
                            </div>
                            <div className='rounded shadow-sm' style={{width: 190 / proporcional, height: 88 / proporcional, border: '1px solid #e5e5e5',  
                                        background: 'white'}}>
                                        
                            </div>
                            <div className='rounded shadow-sm' style={{width: 190 / proporcional, height: 88 / proporcional, border: '1px solid #e5e5e5',  
                                        background: 'white'}}>
                                        
                            </div>
                            <div className='rounded shadow-sm' style={{width: 190 / proporcional, height: 88 / proporcional, border: '1px solid #e5e5e5',  
                                        background: 'white'}}>
                                        
                            </div>
                            <div className='rounded shadow-sm' style={{width: 190 / proporcional, height: 88 / proporcional, border: '1px solid #e5e5e5',  
                                        background: 'white'}}>
                                        
                            </div>
                            <div className='rounded shadow-sm' style={{width: 190 / proporcional, height: 88 / proporcional, border: '1px solid #e5e5e5',  
                                        background: 'white'}}>
                                        
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" style={{width: '100%', height: 90 / proporcional}} 
                        data-bs-interval='2000'>
                        <div className='d-flex justify-content-between' style={{width:'100%'}}>
                            <div className='rounded shadow-sm' style={{width: 190 / proporcional, height: 88 / proporcional, border: '1px solid #e5e5e5',  
                                        background: 'white'}}>
                                        
                            </div>
                            <div className='rounded shadow-sm' style={{width: 190 / proporcional, height: 88 / proporcional, border: '1px solid #e5e5e5',  
                                        background: 'white'}}>
                                        
                            </div>
                            <div className='rounded shadow-sm' style={{width: 190 / proporcional, height: 88 / proporcional, border: '1px solid #e5e5e5',  
                                        background: 'white'}}>
                                        
                            </div>
                            <div className='rounded shadow-sm' style={{width: 190 / proporcional, height: 88 / proporcional, border: '1px solid #e5e5e5',  
                                        background: 'white'}}>
                                        
                            </div>
                            <div className='rounded shadow-sm' style={{width: 190 / proporcional, height: 88 / proporcional, border: '1px solid #e5e5e5',  
                                        background: 'white'}}>
                                        
                            </div>
                            <div className='rounded shadow-sm' style={{width: 190 / proporcional, height: 88 / proporcional, border: '1px solid #e5e5e5',  
                                        background: 'white'}}>
                                        
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselProveedores" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselProveedores" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )

}