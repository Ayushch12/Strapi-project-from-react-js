
import React from 'react'; // Import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import Products from './pages/Products/Products';

const Layout = () =>{
  return(
    <div className='app'>
      <Navbar/>
      <Outlet/>
      <Footer/>
        
    </div>
  )
  
}

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/Products/:id",
    element:<Products/>
  },
  {
    path:"/Product/:id",
    element:<Product/>
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
