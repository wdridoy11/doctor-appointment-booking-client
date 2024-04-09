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
import AddAppointment from '../../pages/dashboard/doctor/addAppointment/AddAppointment';
import Error from '../../pages/errorPage/Error';
import Appointment from '../../pages/dashboard/doctor/managePatient/Appointment';
import DoctorDashboard from '../../pages/dashboard/doctor/DoctorDashboard';

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
                loader:({params})=>fetch(`http://localhost:5000/doctors/${params.id}`)
                // loader:({params})=>fetch(`http://localhost:5000/bookings/${params.id}`)
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
    },
    {
        path:"dashboard",
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:"doctor",
                element:<DoctorDashboard />
            },
            {
                path:"manage_user",
                element:<ManageUser></ManageUser>
            },
            {
                path:"add_appointment",
                element:<AddAppointment />
            },
            {
                path:"appointment",
                element:<Appointment />
            },
        ]
    },
    {
        path:"*",
        element:<Error></Error>
    }
])

export default router;