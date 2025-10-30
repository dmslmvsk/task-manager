import { RegisterForm } from "@/components/forms/register-form";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/register")({
    component: Register,
});

function Register() {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center">
            <RegisterForm />
        </div>
    );
}
