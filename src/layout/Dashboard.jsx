import React, { useState } from 'react';

import Sidebar from '../components/DashboardComponents/Sidebar';
import Header from '../components/DashboardComponents/Header';
import AppoinmentBoard from '../pages/dashboard/doctor/appoinmentBoard/AppoinmentBoard';
import AppoinmentSummaey from '../pages/dashboard/doctor/patientsDetails/AppoinmentSummaey';
import AppoinmentRespons from '../pages/dashboard/doctor/appoinmentRespons/AppoinmentRespons';

function Dashboard() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-slate-100">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Cards */}
            {/* <div className="grid grid-cols-12 gap-6"> */}
              {/* <AppoinmentBoard />
              <AppoinmentSummaey />
              <AppoinmentInfo /> */}
            {/* </div> */}
            <AppoinmentBoard />
            <AppoinmentSummaey />
            <AppoinmentRespons />

          </div>
        </main>


      </div>
    </div>
  );
}

export default Dashboard;