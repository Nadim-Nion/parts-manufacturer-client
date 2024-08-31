import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/SharedComponent/ErrorPage/ErrorPage";
import Home from "../pages/HomePage/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register"
import Purchase from "../pages/PurchasePage/Purchase/Purchase";
import PrivateRoute from "./PrivateRoute";
import PartProvider from "../providers/PartProvider";
import DashboardLayout from "../layouts/DashboardLayout";
import MyOrders from "../pages/DashboardPage/MyOrders/MyOrders";
import Payment from "../pages/DashboardPage/Payment/Payment";
import AddReview from "../pages/DashboardPage/AddReview/AddReview";
import MyProfile from "../pages/DashboardPage/MyProfile/MyProfile";
import Blogs from "../pages/BlogsPage/Blogs/Blogs";
import MyPortfolio from "../pages/MyPortfolioPage/MyPortfolio/MyPortfolio";
import MakeAdmin from "../pages/DashboardPage/MakeAdmin/MakeAdmin";
import AddProduct from "../pages/DashboardPage/AddProduct/AddProduct";
import AdminRoute from "./AdminRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'purchase',
                element: <PrivateRoute><PartProvider><Purchase></Purchase></PartProvider></PrivateRoute>

            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'blogs',
                element: <Blogs></Blogs>
            },
            {
                path: 'portfolio',
                element: <MyPortfolio></MyPortfolio>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [

            // Regular Users only route
            {
                path: 'myOrders',
                element: <MyOrders></MyOrders>
            },
            {
                path: 'payment/:id',
                element: <Payment></Payment>
            },
            {
                path: 'addReview',
                element: <AddReview></AddReview>
            },

            // Common route for Users and Admin
            {
                path: 'myProfile',
                element: <MyProfile></MyProfile>
            },

            // Admin Only route
            {
                path: 'makeAdmin',
                element: <AdminRoute><MakeAdmin></MakeAdmin></AdminRoute>
            },
            {
                path: 'addProduct',
                element: <AdminRoute><AddProduct></AddProduct></AdminRoute>
            }
        ]
    }
]);


export default router;