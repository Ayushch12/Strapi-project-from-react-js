import React from 'react'; // Import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';


const router = createBrowserRouter([
  {
    path:"/",
    element:<span>Accueil</span>
  },
  {
    path:"/Product/:id",
    element:<span>Product</span>
  },
  {
    path:"/Products/:id",
    element:<span>Product</span>
  },
  // {
  //   path:"/Quisommes/:id",
  //   element:<span>Qui Sommes-Nous
  //   </span>
  // },
  // {
  //   path:"/Contactez/:id",
  //   element:<span>Contactez-Nous</span>
  // },
])
function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
