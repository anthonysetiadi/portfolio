import React from 'react'
import Navbar from '../Navbar/Navbar'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  )
}
