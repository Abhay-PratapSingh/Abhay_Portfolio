import React from 'react'
import Navbar from './assets/Navbar'
import { Outlet } from "react-router-dom";
import Footer from './component/Footer';

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-[#020617]">

            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main className="flex-grow ">
                <Outlet />
            </main>

            {/* Footer */}
            <Footer />

        </div>
    )
}

export default Layout;