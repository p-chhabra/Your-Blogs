import React from 'react'

const Layout = (props) => {
  return (
    <React.Fragment>
    <main className='w-full pt-4 p-2'>{props.children}</main>
    </React.Fragment>
  )
}

export default Layout