import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Layout.module.css'
import { Link } from 'react-router-dom'

//Common background layout for all pages

const Layout = (props) => {
  return (
    <React.Fragment>
      <nav className={`flex flex-row justify-start pl-5 p-3`}>
        <Link to='/'><p className='text-3xl text-gray-300'>EQAIM BLOGS</p></Link>
      </nav>
      <main className='w-full pt-4 p-2'>{props.children}</main>
    </React.Fragment>
  )
}

export default Layout