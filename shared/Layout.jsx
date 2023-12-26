import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div className="flex">
                <Sidebar />
                {children}
            </div>
        </div>
    )
}

export default Layout
