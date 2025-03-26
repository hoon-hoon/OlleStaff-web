import { Outlet } from "react-router-dom";

export default function OwnerLayout() {
    return (
        <div>
            <h1>Owner Layout</h1>
            <Outlet />
        </div>
    );
}
