import React from 'react';
import { BsFillCartFill } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { FaBriefcase, FaHome } from 'react-icons/fa';
import { GrArticle } from 'react-icons/gr';
import { MdOutlineRateReview } from 'react-icons/md';
import { NavLink, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    const navItems = <>
        <li>
            <NavLink to="/dashboard/myOrders">
                <BsFillCartFill />
                My Order
            </NavLink>
        </li>
        <li>
            <NavLink to="/dashboard/addReview">
                <MdOutlineRateReview />
                Add a Review
            </NavLink>
        </li>
        <li>
            <NavLink to="/dashboard/myProfile">
                <CgProfile />
                My Profile
            </NavLink>
        </li>
        <div className="divider divider-info"></div>
        <li>
            <NavLink to='/'>
                <FaHome />
                Home
            </NavLink>
        </li>
        <li>
            <NavLink to='/blogs'>
                <GrArticle />
                Blogs
            </NavLink>
        </li>
        <li>
            <NavLink to='/portfolio'>
                <FaBriefcase />
                My Portfolio
            </NavLink>
        </li>
    </>;

    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="navbar bg-base-300 w-full">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </label>
                    </div>

                    <div className="mx-2 flex-1 px-2">Dashboard</div>
                    <div className="hidden flex-none lg:block">
                        <ul className="menu menu-horizontal">

                            {/* Navbar menu content here */}
                            {navItems}
                        </ul>
                    </div>
                </div>

                {/* Page content here */}
                <div className='m-4'>
                    <Outlet></Outlet>
                </div>

            </div>

            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 min-h-full w-80 p-4">
                    {/* Sidebar content here */}
                    {navItems}
                </ul>
            </div>
        </div>
    );
};

export default DashboardLayout;