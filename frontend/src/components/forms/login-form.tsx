import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Field,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field";

import { IoLogInOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { Input } from "@/components/ui/input";

const formSchema = z.object({
    email: z
        .email()
        .min(8, "Email must be at least 8 characters")
        .max(30, "Email must be at most 30 characters"),
    password: z
        .string()
        .min(8, "Password must be at least 8 characters")
        .max(20, "Password must be at most 20 characters"),
});

export const LoginForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });
    return (
        <Card className="flex flex-col items-center justify-center text-center shadow-lg w-1/4 bg-linear-to-b from-sky-200 via-sky-50 to-white">
            <CardHeader className="flex flex-col items-center justify-center gap-3 w-full">
                <div className="flex flex-row items-center justify-center gap-4">
                    <IoLogInOutline className="w-16 h-16 bg-white rounded-xl shadow-sm" />
                    <CardTitle className="text-3xl font-bold tracking-tight">
                        Sign in
                    </CardTitle>
                </div>
                <CardDescription className="text-gray-500 leading-relaxed w-2/3">
                    Improve your productivity and time management
                </CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center px-12">
                <form id="login-form" className="w-full flex flex-col gap-8">
                    <FieldGroup className="flex flex-col items-center justify-center">
                        <Controller
                            name="email"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="login-form-email">
                                        Email
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id="login-form-email"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Email"
                                        autoComplete="on"
                                        className="bg-gray-50 h-12"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError
                                            errors={[fieldState.error]}
                                        />
                                    )}
                                </Field>
                            )}
                        />

                        <Controller
                            name="password"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="login-form-password">
                                        Password
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id="login-form-password"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Password"
                                        autoComplete="on"
                                        className="bg-gray-50 h-12"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError
                                            errors={[fieldState.error]}
                                        />
                                    )}
                                </Field>
                            )}
                        />
                    </FieldGroup>
                    <FieldGroup className="flex flex-row gap-4 w-full justify-center">
                        <Field className="flex-1">
                            <Button className="h-12 w-full" type="submit">
                                Get Started
                            </Button>
                        </Field>
                        <Field className="flex-1">
                            <Button className="h-12 w-full">
                                Restore Password
                            </Button>
                        </Field>
                    </FieldGroup>
                </form>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
                <p className="text-gray-500">Or sign in with</p>
                <div className="flex flex-row gap-4 items-center justify-center">
                    <Button className="w-20 h-12 bg-white shadow-md flex items-center justify-center">
                        <FcGoogle className="w-16 h-16" />
                    </Button>
                    <Button className="w-20 h-12 bg-white shadow-md flex items-center justify-center">
                        <FaGithub className="w-16 h-16 text-black" />
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
};

export default LoginForm;
