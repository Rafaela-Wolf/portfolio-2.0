import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Pages 
import Home from './routes/Home.jsx';
import SobreMim from './routes/SobreMim.jsx';
import Habilidades from './routes/Habilidades.jsx';
import MeusProjetos from './routes/MeusProjetos.jsx';

const router = createBrowserRouter([
    {
      element: <App />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/sobremim',
          element: <SobreMim />
        },
        {
          path: '/habilidades',
          element: <Habilidades />
        },
        {
          path: '/meusprojetos',
          element: <MeusProjetos />
        },
      ]
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
