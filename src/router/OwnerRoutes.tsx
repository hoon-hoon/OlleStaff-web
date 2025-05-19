import { RouteObject } from "react-router-dom";
import OwnerLayout from "@/layout/OwnerLayout";
import OwnerHome from "@/pages/owner/HomePage";
import UserInfoPage from "@/pages/owner/UserInfoPage";
import RecruitListPage from "@/pages/owner/RecruitListPage";

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
                path: "recruits",
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
