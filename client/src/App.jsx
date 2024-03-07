import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './styles.css'

import PanelHome from './components/home/panel.jsx'
import PanelHomeTablet from './components/home/paneltablet.jsx'
import PanelHomeCell from './components/home/panelcell.jsx'

import BeginScreen from './components/begin/panel.jsx'
import BeginScreenTablet from './components/begin/paneltablet.jsx'
import BeginScreenCell from './components/begin/panelcell.jsx'

import DetallesProducto from './components/producto/panel.jsx'
import DetallesProductoTablet from './components/producto/paneltablet.jsx'
import DetallesProductoCell from './components/producto/panelcell.jsx'

function App() {
  const [width, setWidth] = useState (window.outerWidth)

  useEffect(() => {
    window.addEventListener('resize', handle_resize)

    return () => {
      window.removeEventListener('resize', handle_resize)
    }
  }, [])

  const handle_resize = () => {
    setWidth(window.outerWidth)
  }

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={width < 500 ? <PanelHomeCell   proporcional={499 / width}/> : 
                                     width < 991 ? <PanelHomeTablet proporcional={991 / width}/> : 
                                                   <PanelHome       proporcional={1920 / width} />}>
                <Route index element={width < 500 ? <BeginScreenCell   proporcional={499 / width}/> : 
                                      width < 991 ? <BeginScreenTablet proporcional={991 / width}/> : 
                                                    <BeginScreen       proporcional={1920 / width} />}/>
                                                    
                <Route path='producto/:producto/:id' element={width < 500 ? <DetallesProductoCell   proporcional={499 / width}/> : 
                                                              width < 991 ? <DetallesProductoTablet proporcional={991 / width}/> : 
                                                                            <DetallesProducto       proporcional={1920 / width} />}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
