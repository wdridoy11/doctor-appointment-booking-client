import React from 'react'
import {createBrowserRouter} from 'react-router-dom';
// page import
import Main from '../../layout/Main';
import Login from '../../pages/login/Login';
import Home from '../../pages/home/home/Home';
import Booking from '../../pages/booking/Booking';
import PrivetRoute from '../privetRoute/PrivetRoute';
import Registration from '../../pages/registration/Registration';
import MyAppointment from '../../pages/dashboard/user/myBooking/MyAppointment';
import DoctorDetails from '../../pages/doctors/DoctorDetails';
import About from '../../pages/about/About';

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
                path:"/about",
                element:<About></About>
            },
            {
                path:"doctors/:id",
                element:<DoctorDetails></DoctorDetails>,
                loader:({params})=>fetch(`http://localhost:5000/doctors/${params.id}`)
            },
            {
                path:"booking/:id",
                element:<PrivetRoute><Booking></Booking></PrivetRoute>,
                loader:({params})=>fetch(`http://localhost:5000/bookings/${params.id}`)
            },
            {
                path:"my_booking",
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