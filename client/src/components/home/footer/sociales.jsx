import React, { useState } from 'react'

import icono_email_white from '../../../assets/iconos/icono_email_white_96.png'
import icono_facebook_color from '../../../assets/iconos/icono_facebook_color_96.png'
import icono_twitter_color from '../../../assets/iconos/icono_twitter_color_96.png'
import icono_youtube_color from '../../../assets/iconos/icono_youtube_color_96.png'
import icono_linkedin_color from '../../../assets/iconos/icono_linkedin_color_96.png'
import icono_instagram_color from '../../../assets/iconos/icono_instagram_color_96.png'
import icono_tiktok_color from '../../../assets/iconos/icono_tiktok_color_96.png'

export default function FooterSociales({proporcional}) {

    const [correo, setCorreo] = useState('')
     
    return (
        <div style={{width: '100%', paddingRight: 350 / proporcional, paddingLeft: 350 / proporcional, paddingTop: 50 / proporcional,
                paddingBottom: 50 / proporcional, height: 'auto'}}>
            <div className='d-flex justify-content-between' style={{width: 1220 / proporcional, height: 'auto'}}>
                <div className='d-flex justify-content-start' style={{width: 610 / proporcional, height: 50 / proporcional}}>
                    <div style={{width: 100 / proporcional, heigth: 50 / proporcional, marginRight: 10 / proporcional}}>
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${50 / proporcional}px`, color: '#212121', fontWeight: 600, marginBottom: 0}}>
                            Noticias
                        </p>
                    </div>
                    <div className='d-flex' style={{width: 450 / proporcional, height: 50 / proporcional}}>
                        <input  
                            type='e-mail'
                            value={correo}
                            onChange={(event) => setCorreo(event.target.value)}
                            style={{width: 350 / proporcional, height: 48 / proporcional, border: '1px solid #bdbdbd', fontSize: 16 / proporcional,
                                    lineHeight: `${48 / proporcional}px`, borderTopRightRadius: 0, borderBottomRightRadius: 0, borderTopLeftRadius: 4 / proporcional,
                                    borderBottomLeftRadius: 4 / proporcional}}
                            className='form-control'
                            placeholder='Ingresa tu email'
                            id='correo'/>
                        <div style={{width: 50 / proporcional, height: 48 / proporcional, background: '#434377', borderTopRightRadius: 4 / proporcional,
                                borderBottomRightRadius: 4 / proporcional, cursor: 'pointer'}}>
                            <img src={icono_email_white} style={{width: 14 / proporcional, height: 14 / proporcional, marginTop: 17 / proporcional,
                                marginBottom: 17 / proporcional, marginLeft: 18 / proporcional, marginRight: 18 / proporcional}}/>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-end' style={{width: 610 / proporcional, height: 50 / proporcional}}>
                    <div style={{width: 150 / proporcional, heigth: 50 / proporcional, marginRight: 10 / proporcional}}>
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${50 / proporcional}px`, color: '#212121', fontWeight: 600, marginBottom: 0}}>
                            Redes sociales
                        </p>
                    </div>
                    <div className='d-flex' style={{width: 'auto', height: 50 / proporcional}}>
                        <img src={icono_facebook_color} style={{width: 40 / proporcional, height: 40 / proporcional, margin: 5 / proporcional}}/>
                        <img src={icono_instagram_color} style={{width: 40 / proporcional, height: 40 / proporcional, margin: 5 / proporcional}}/>
                        <img src={icono_youtube_color} style={{width: 40 / proporcional, height: 40 / proporcional, margin: 5 / proporcional}}/>
                        <img src={icono_tiktok_color} style={{width: 40 / proporcional, height: 40 / proporcional, margin: 5 / proporcional}}/>
                        <img src={icono_twitter_color} style={{width: 40 / proporcional, height: 40 / proporcional, margin: 5 / proporcional}}/>
                        <img src={icono_linkedin_color} style={{width: 40 / proporcional, height: 40 / proporcional, margin: 5 / proporcional}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}