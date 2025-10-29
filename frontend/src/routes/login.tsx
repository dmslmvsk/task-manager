import LoginForm from "@/components/forms/login-form";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
    component: Login,
});

function Login() {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center">
            <LoginForm />
        </div>
    );
}
