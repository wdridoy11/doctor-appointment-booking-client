import React from 'react'
import {createBrowserRouter} from 'react-router-dom';
// page import
import Main from '../../layout/Main';
import Login from '../../pages/login/Login';
import Home from '../../pages/home/home/Home';
import Booking from '../../pages/booking/Booking';
import PrivetRoute from '../privetRoute/PrivetRoute';
import MyAppointment from '../../pages/myBooking/MyAppointment';
import Registration from '../../pages/registration/Registration';
import ServicesDetails from '../../pages/services/ServicesDetails';

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
                path:"booking/:id",
                element:<PrivetRoute><Booking></Booking></PrivetRoute>,
                loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:"my_appointment",
                element:<MyAppointment></MyAppointment>,
            },
            {
                path:"login",
                element:<Login></Login>
            },

            {
                path:"registration",
                element:<Registration></Registration>
            }
        ]
    }
])

export default router;