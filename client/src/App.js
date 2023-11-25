import React from 'react'; // Import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';


const router = createBrowserRouter([
  {
    path:"/",
    element:<span>Accueil</span>
  },
  {
    path:"/Solutions/:id",
    element:<span>Solutions d'Assurance</span>
  },
  {
    path:"/Expertise/:id",
    element:<span>Expertise & Conseils</span>
  },
  {
    path:"/Quisommes/:id",
    element:<span>Qui Sommes-Nous
    </span>
  },
  {
    path:"/Contactez/:id",
    element:<span>Contactez-Nous</span>
  },
])
function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
