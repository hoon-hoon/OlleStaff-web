import { RouteObject } from "react-router-dom";
import StaffLayout from "../layout/StaffLayout";
import StaffHome from "../pages/StaffHome";

const StaffRoutes: RouteObject[] = [
    {
        path: "/staff",
        element: <StaffLayout />,
        children: [
            {
                index: true,
                element: <StaffHome />,
            },
        ],
    },
];

export default StaffRoutes;
