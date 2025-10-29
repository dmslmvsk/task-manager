import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

const RootLayout = () => (
    <div className="bg-linear-to-b from-sky-200 via-sky-50 to-white">
        <div>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/about">About</Link>
        </div>
        <hr />
        <Outlet />
        <TanStackRouterDevtools />
    </div>
);

export const Route = createRootRoute({ component: RootLayout });
