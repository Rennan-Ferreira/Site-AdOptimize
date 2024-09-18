import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home/Home.jsx'
import Login from './routes/Login/Login.jsx'
import Campanhas from './routes/Campanhas/Campanhas.jsx'
import Segmentacao from './routes/Segmentacao/Segmentacao.jsx'
import PalavrasChave from './routes/PalavrasChave/PalavrasChave.jsx'
import PrevisaoDesempenho from './routes/PrevisaoDesempenho/PrevisaoDesempenho.jsx'
import Notificacoes from './routes/Notificacoes/Notificacoes.jsx'
import Relatorios from './routes/Relatorios/Relatorios.jsx'
import Error from './routes/Error/Error.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/Login",
        element: <Login/>
      },
      {
        path: "/Campanhas",
        element: <Campanhas/>
      },
      {
        path: "/Segmentacao",
        element: <Segmentacao/>
      },
      {
        path:"/Palavras-Chave",
        element: <PalavrasChave/>
      },
      {
        path:"/Previsao",
        element: <PrevisaoDesempenho/>
      },
      {
        path:"/Relatorios",
        element: <Relatorios/>
      },
      {
        path:"/Notificacoes",
        element: <Notificacoes/>
      }
    
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)