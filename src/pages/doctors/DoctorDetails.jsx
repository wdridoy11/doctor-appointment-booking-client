import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { FaMapMarkerAlt } from 'react-icons/fa';
// react tab
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import  "./doctor.css";
import Overview from './Overview';
import Cover from '../../components/shared/cover/Cover';

const DoctorDetails = () => {
    const doctorData = useLoaderData();
    const {image,name,location,services} = doctorData;
  return (
      <div>
        <Cover title="Doctor Details" coverImg={image}></Cover>
          <div className="max-w-[1140px] px-5 mx-auto">
              <div>
                  <div className="grid md:grid-cols-3 gap-10 bg-white p-10">
                      <div>
                          <img className="rounded-lg" src={image} alt="" />
                      </div>
                      <div className="col-span-2">
                          <h3 className="text-4xl text-black font-bold mb-2">{name}</h3>
                          <p className="text-lg font-normal text-[#6C6B6B]">MBBS, MD - General Medicine</p>
                          <div className="flex gap-2 text-[#6C6B6B] items-center">
                              <p><FaMapMarkerAlt></FaMapMarkerAlt></p>
                              <p className="text-base font-normal mb-2">{location}</p>
                              <Link className='inline-block text-base font-medium bg-[#40d0c6] text-white px-7 py-2 rounded-md 
                             hover:bg-black duration-500'>Booking Now</Link>
                          </div>
                          <div className='flex gap-2 items-center mt-4'>
                            {/* {services.map((service,index)=><button key={index} className='py-2 px-5 border rounded-md font-semibold text-base'>{service}</button>)} */}
                          </div>
                      </div>
                  </div>
                  <div>
                      <Tabs>
                          <TabList>
                            <Tab>Overview</Tab>
                            <Tab>Locations</Tab>
                            <Tab>Reviews</Tab>
                            <Tab>Business Hours</Tab>
                          </TabList>
                              
                          <TabPanel>
                              <Overview doctorData={doctorData}></Overview>
                          </TabPanel>
                          <TabPanel>h</TabPanel>
                          <TabPanel>u</TabPanel>
                          <TabPanel>d</TabPanel>
                      </Tabs>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default DoctorDetails