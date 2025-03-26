import { createBrowserRouter } from "react-router-dom";
import AuthRoutes from "./AuthRoutes";
import OwnerRoutes from "./OwnerRoutes";
import StaffRoutes from "./StaffRoutes";

const router = createBrowserRouter([...AuthRoutes, ...OwnerRoutes, ...StaffRoutes]);

export default router;
