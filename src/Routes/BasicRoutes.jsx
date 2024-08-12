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
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [

            // regular users only route
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
            {
                path: 'myProfile',
                element: <MyProfile></MyProfile>
            }
        ]
    }
]);


export default router;