import { RouteObject } from "react-router-dom";
import OwnerLayout from "@/layout/OwnerLayout";
import OwnerHome from "@/pages/owner/HomePage";
import UserInfoPage from "@/pages/owner/UserInfoPage";
import RecruitListPage from "@/pages/owner/Recruit/RecruitListPage";

const OwnerRoutes: RouteObject[] = [
    {
        path: "/owner/",
        element: <OwnerLayout />,
        children: [
            {
                index: true,
                element: <OwnerHome />,
            },
            {
                path: "recruitments-ongoing",
                element: <RecruitListPage />,
            },
            {
                path: "userinfo",
                element: <UserInfoPage />,
            },
        ],
    },
];

export default OwnerRoutes;
