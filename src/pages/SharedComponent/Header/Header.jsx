import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';
import useAdmin from '../../../hooks/useAdmin';

const Header = () => {
    const { user, logOut } = useAuth();
    const [isAdmin] = useAdmin();

    const navItems = <>
        <li className='font-bold'><Link to="/">Home</Link></li>
        <li className='font-bold'><Link to="/purchase">Purchase</Link></li>
        {
            user && isAdmin && <li className='font-bold'><Link to="/dashboard/makeAdmin">Dashboard</Link></li>
        }
        {
            user && !isAdmin && <li className='font-bold'><Link to="/dashboard/myOrders">Dashboard</Link></li>
        }
        <li className='font-bold'><Link to="/blogs">Blogs</Link></li>
        <li className='font-bold'><Link to="/portfolio">My Portfolio</Link></li>
        {
            user && <li className='font-bold mt-2'>{user?.displayName || user?.email}</li>
        }
    </>;

    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user?.displayName} logged out successfully`,
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => {
                console.log(error);
            })
    };

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {/* <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li> */}
                            {navItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl font-bold">CompParts Hub</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {/* <li><a>Item 1</a></li>
                        <li>
                            <details>
                                <summary>Parent</summary>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>Item 3</a></li> */}
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <button onClick={() => handleLogOut(logOut)} className="btn btn-outline btn-primary font-bold">Log Out</button>
                            :
                            <Link to="/login">
                                <button className="btn btn-outline btn-primary font-bold">Login</button>
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;