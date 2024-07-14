import React from 'react';
import { BsFillCartFill } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { FaBriefcase, FaHome } from 'react-icons/fa';
import { GrArticle } from 'react-icons/gr';
import { MdOutlineRateReview } from 'react-icons/md';
import { NavLink, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div className='flex'>

            {/* Dashboard Sidebar */}
            <div className='bg-indigo-950 min-h-screen w-72 text-white'>
                <ul className="menu p-4">
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
                        <NavLink to='/myPortfolio'>
                            <FaBriefcase />
                            My Portfolio
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* Dashboard Content */}
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;