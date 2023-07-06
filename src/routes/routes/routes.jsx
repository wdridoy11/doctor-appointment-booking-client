import React from 'react'
import {createBrowserRouter} from 'react-router-dom';
// page import
import Main from '../../layout/Main';
import Login from '../../pages/login/Login';
import About from '../../pages/about/About';
import Home from '../../pages/home/home/Home';
import Dashboard from '../../layout/Dashboard';
import Booking from '../../pages/booking/Booking';
import PrivetRoute from '../privetRoute/PrivetRoute';
import DoctorDetails from '../../pages/doctors/DoctorDetails';
import Registration from '../../pages/registration/Registration';
import ManageUser from '../../pages/dashboard/admin/manageUser/ManageUser';
import MyAppointment from '../../pages/dashboard/user/myBooking/MyAppointment';
import ManagePatient from '../../pages/dashboard/doctor/managePatient/ManagePatient';
import AddAppointment from '../../pages/dashboard/doctor/addAppointment/AddAppointment';
import ManageAppointment from '../../pages/dashboard/admin/manageAppointment/ManageAppointment';

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
                loader:({params})=>fetch(`https://doctor-booking-server.vercel.app/doctors/${params.id}`)
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
            },
            {
                path:"manage_patient",
                element:<ManagePatient></ManagePatient>
            }
        ]
    },
    {
        path:"dashboard",
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:"manage_user",
                element:<ManageUser></ManageUser>
            },
            {
                path:"Manage_appointment",
                element:<ManageAppointment></ManageAppointment>
            },
            {
                path:"add_appointment",
                element:<AddAppointment></AddAppointment>
            },
            {
                path:"manage_patient",
                element:<ManagePatient></ManagePatient>
            }
        ]
    }
])

export default router;