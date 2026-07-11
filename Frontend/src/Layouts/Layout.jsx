import React, { useState, useEffect, useContext } from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Search from '../components/Search'
import MovieContext from '../Context/MovieContext/MovieContext'
// import React from 'react'

const Layout = () => {
    const {m_name,setM_name} = useContext(MovieContext)
    // const[m_name,setM_name] = useState("")
    useEffect(() => {
    }, [m_name]);

  return (
    <div className='relative'>
      <Navbar m_name={m_name} set_name={setM_name} />
      <Outlet className="" />
      {/* <Search m_name={m_name} /> */}
    </div>
  );
}

export default Layout
