import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

export default function BarraMenu({proporcional}) {

    const navigate = useNavigate()
    const [menu, setMenu] = useState ('')

    return (
      <div style={{width: '100%', height: 75 / proporcional, background: '#434377', paddingLeft: 350 / proporcional, 
                   paddingRight: 350 / proporcional, paddingTop: 12.5 / proporcional, 
                   paddingBottom: 12.5 / proporcional}}>
          <div className='d-flex justify-content-center' style={{width: 1220 / proporcional, height: 50 / proporcional}}>
              <div style={{width: 152.5 / proporcional, height: 50 / proporcional, background: menu === 'inicio' ? 'white' : '#434377'}}>
                <p style={{fontSize: 20 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 0, color: menu === 'inicio' ? '#434377' : 'white', 
                          fontWeight: menu === 'inicio' ? 700 : 500,
                    textAlign: 'center', cursor: 'pointer'}} onMouseOver={() => setMenu('inicio')} onMouseLeave={() => setMenu('')}
                    onClick={() => navigate ('/')}>
                  Inicio
                </p>
              </div>
              <div style={{width: 152.5 / proporcional, height: 50 / proporcional, background: menu === 'moda' ? 'white' : '#434377'}}>
                <p style={{fontSize: 20 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 0, color: menu === 'moda' ? '#434377' : 'white', 
                          fontWeight: menu === 'moda' ? 700 : 500,
                    textAlign: 'center', cursor: 'pointer'}} onMouseOver={() => setMenu('moda')} onMouseLeave={() => setMenu('')}
                    onClick={() => navigate ('/moda')}>
                  Moda
                </p>
              </div>
              <div style={{width: 152.5 / proporcional, height: 50 / proporcional, background: menu === 'electronica' ? 'white' : '#434377'}}>
                <p style={{fontSize: 20 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 0, color: menu === 'electronica' ? '#434377' : 'white', 
                          fontWeight: menu === 'electronica' ? 700 : 500,
                    textAlign: 'center', cursor: 'pointer'}} onMouseOver={() => setMenu('electronica')} onMouseLeave={() => setMenu('')}
                    onClick={() => navigate ('/electronica')}>
                  Electrónica
                </p>
              </div>
              <div style={{width: 152.5 / proporcional, height: 50 / proporcional, background: menu === 'joyas' ? 'white' : '#434377'}}>
                <p style={{fontSize: 20 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 0, color: menu === 'joyas' ? '#434377' : 'white', 
                          fontWeight: menu === 'joyas' ? 700 : 500,
                    textAlign: 'center', cursor: 'pointer'}} onMouseOver={() => setMenu('joyas')} onMouseLeave={() => setMenu('')}
                    onClick={() => navigate ('/joyas')}>
                  Joyas
                </p>
              </div>
              <div style={{width: 152.5 / proporcional, height: 50 / proporcional, background: menu === 'tienda' ? 'white' : '#434377'}}>
                <p style={{fontSize: 20 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 0, color: menu === 'tienda' ? '#434377' : 'white', 
                          fontWeight: menu === 'tienda' ? 700 : 500,
                    textAlign: 'center', cursor: 'pointer'}} onMouseOver={() => setMenu('tienda')} onMouseLeave={() => setMenu('')}
                    onClick={() => navigate ('/tienda')}>
                  Tienda
                </p>
              </div>
              <div style={{width: 152.5 / proporcional, height: 50 / proporcional, background: menu === 'blog' ? 'white' : '#434377'}}>
                <p style={{fontSize: 20 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 0, color: menu === 'blog' ? '#434377' : 'white', 
                          fontWeight: menu === 'blog' ? 700 : 500,
                    textAlign: 'center', cursor: 'pointer'}} onMouseOver={() => setMenu('blog')} onMouseLeave={() => setMenu('')}
                    onClick={() => navigate ('/blog')}>
                  Blog
                </p>
              </div>
              <div style={{width: 152.5 / proporcional, height: 50 / proporcional, background: menu === 'nosotros' ? 'white' : '#434377'}}>
                <p style={{fontSize: 20 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 0, color: menu === 'nosotros' ? '#434377' : 'white', 
                          fontWeight: menu === 'nosotros' ? 700 : 500,
                    textAlign: 'center', cursor: 'pointer'}} onMouseOver={() => setMenu('nosotros')} onMouseLeave={() => setMenu('')}
                    onClick={() => navigate ('/nosotros')}>
                  Nosotros
                </p>
              </div>
              <div style={{width: 152.5 / proporcional, height: 50 / proporcional, background: menu === 'contacto' ? 'white' : '#434377'}}>
                <p style={{fontSize: 20 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 0, color: menu === 'contacto' ? '#434377' : 'white', 
                          fontWeight: menu === 'contacto' ? 700 : 500,
                    textAlign: 'center', cursor: 'pointer'}} onMouseOver={() => setMenu('contacto')} onMouseLeave={() => setMenu('')}
                    onClick={() => navigate ('/contacto')}>
                  Contacto
                </p>
              </div>
          </div>
      </div>
    )
}
