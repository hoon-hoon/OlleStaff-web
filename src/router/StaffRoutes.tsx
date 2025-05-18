import { RouteObject } from "react-router-dom";
import StaffLayout from "@/layout/StaffLayout";
import StaffHome from "@/pages/staff/HomePage";
import CompanionPage from "@/pages/staff/CompanionPage";
import UserInfoPage from "@/pages/staff/UserInfoPage";
import ApplicationWritePage from "@/pages/staff/ApplicationWritePage";
import AuthLayout from "@/layout/AuthLayout";
import AccompanyWritePage from "@/pages/staff/AccompanyWritePage";
import CategoryPage from "@/pages/staff/CategoryPage";

const StaffRoutes: RouteObject[] = [
    {
        path: "/staff",
        element: <StaffLayout />,
        children: [
            {
                index: true,
                element: <StaffHome />,
            },
            {
                path: "companion",
                element: <CompanionPage />,
            },
            {
                path: "companion/write",
                element: <AccompanyWritePage />,
            },
            {
                path: "userinfo",
                element: <UserInfoPage />,
            },
            {
                path: "guesthouse/category",
                element: <CategoryPage />,
            },
        ],
    },
    {
        path: "/staff/application",
        element: <AuthLayout />,
        children: [
            {
                path: "write",
                element: <ApplicationWritePage />,
            },
        ],
    },
];

export default StaffRoutes;
