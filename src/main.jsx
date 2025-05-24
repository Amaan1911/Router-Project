import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'
import LayOut from './LayOut.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import Github ,{ githubLoader } from './Components/Github/Github.jsx'

// const router=  createBrowserRouter([
// {
//   path : '/',
//   element : <LayOut />,
//   children : [
//     {
//       path : '',
//       element : <Home />,
//     },
//     {
//       path : 'about',
//       element : <About />,
//     },
//     {
//       path : 'contact',
//       element : <Contact />,
//     },
//   ],
// },


// ]) // this is 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<LayOut />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route
        loader={githubLoader}
        path='github' 
        element={<Github />} />
    </Route>
  )
) // this is new way to create router

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
