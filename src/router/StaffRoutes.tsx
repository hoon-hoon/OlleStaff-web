import { RouteObject } from "react-router-dom";
import StaffLayout from "@/layout/StaffLayout";
import StaffHome from "@/pages/staff/HomePage";
import UserInfoPage from "@/pages/staff/UserInfoPage";
import ApplicationWritePage from "@/pages/staff/ApplicationWritePage";
import AuthLayout from "@/layout/AuthLayout";
import AccompanyWritePage from "@/pages/staff/AccompanyWritePage";
import CategoryPage from "@/pages/staff/CategoryPage";
import RecommendPage from "@/pages/staff/RecommendPage";
import AccompanyPage from "@/pages/staff/AccompanyPage";
import AccompanyDetailPage from "@/pages/staff/AccompanyDetailPage";

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
                path: "accompany",
                element: <AccompanyPage />,
            },
            {
                path: "accompany/write",
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
            {
                path: "guesthouse/recommend",
                element: <RecommendPage />,
            },
        ],
    },
    {
        path: "/staff",
        element: <AuthLayout />,
        children: [
            {
                path: "accompany/:id",
                element: <AccompanyDetailPage />,
            },
            {
                path: "application/write",
                element: <ApplicationWritePage />,
            },
        ],
    },
];

export default StaffRoutes;
