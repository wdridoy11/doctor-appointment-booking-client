import React from 'react'
import {createBrowserRouter} from 'react-router-dom'
import Main from '../../layout/Main'
import Home from '../../pages/home/home/Home'
import Login from '../../pages/login/Login'
import Registration from '../../pages/registration/Registration'
import ServicesDetails from '../../pages/services/ServicesDetails'
import Checkout from '../../pages/checkout/Checkout'

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"services/:id",
                element:<ServicesDetails></ServicesDetails>,
                loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:"checkout/:id",
                element:<Checkout></Checkout>,
                loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:"login",
                element:<Login></Login>
            },

            {
                path:"Registration",
                element:<Registration></Registration>
            }
        ]
    }
])

export default router;