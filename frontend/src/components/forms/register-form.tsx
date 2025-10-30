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

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { Input } from "@/components/ui/input";
import { Link } from "@tanstack/react-router";

import { motion } from "framer-motion";

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

export const RegisterForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-1/4"
        >
            <Card className="flex flex-col items-center justify-center text-center shadow-lg w-full bg-linear-to-b from-sky-200 via-sky-50 to-white">
                <CardHeader className="flex flex-col items-center justify-center gap-3 w-full">
                    <CardTitle className="text-4xl font-bold tracking-tight flex flex-row items-top justify-center">
                        Get started today
                    </CardTitle>
                    <CardDescription className="text-gray-500 leading-relaxed w-5/8 text-base">
                        Set your goals, stay productive, and make every day
                        count.
                    </CardDescription>
                </CardHeader>
                <CardContent className="w-full flex flex-col items-center justify-center px-12">
                    <form
                        id="register-form"
                        className="w-full flex flex-col gap-8"
                    >
                        <FieldGroup className="flex flex-col items-center justify-center gap-0">
                            <Controller
                                name="email"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel>Email</FieldLabel>
                                        <Input
                                            {...field}
                                            id="register-form-email"
                                            aria-invalid={fieldState.invalid}
                                            placeholder="Email"
                                            autoComplete="on"
                                            className="bg-white h-12 mb-4 focus:bg-gray-50"
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
                                        <FieldLabel>Password</FieldLabel>
                                        <Input
                                            {...field}
                                            id="register-form-password"
                                            aria-invalid={fieldState.invalid}
                                            placeholder="Password"
                                            autoComplete="on"
                                            className="bg-white h-12 focus:bg-gray-50 focus:border"
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
                                <Button
                                    className="h-12 w-full bg-sky-400 hover:cursor-pointer hover:bg-sky-500"
                                    type="submit"
                                >
                                    Sign up
                                </Button>
                            </Field>
                            <Field className="flex-1">
                                <Link to="/login">
                                    <Button className="h-12 w-full bg-sky-400 hover:cursor-pointer hover:bg-sky-500">
                                        Already have an account?
                                    </Button>
                                </Link>
                            </Field>
                        </FieldGroup>
                    </form>
                </CardContent>
                <CardFooter className="flex flex-col gap-2">
                    <p className="text-gray-500">Or sign in with</p>
                    <div className="flex flex-row gap-4 items-center justify-center">
                        <Button className="w-20 h-12 bg-gray-50 shadow-md flex items-center justify-center hover:cursor-pointer hover:bg-gray-300">
                            <FcGoogle className="w-16 h-16" />
                        </Button>
                        <Button className="w-20 h-12 bg-gray-50 shadow-md flex items-center justify-center hover:cursor-pointer hover:bg-gray-300">
                            <FaGithub className="w-16 h-16 text-black" />
                        </Button>
                    </div>
                </CardFooter>
            </Card>
        </motion.div>
    );
};

export default RegisterForm;
