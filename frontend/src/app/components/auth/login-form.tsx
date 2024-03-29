"use client"

import { CardWrapper } from "./card-wrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState, useTransition } from "react";

import { LoginSchema } from '@schemas/index'
import { FormError } from "@components/form-error";
import { FormSuccess } from "@components/form-success";
import axios from "axios";



export const LoginForm = () => {
    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState<string | undefined>('');
    const [success, setSuccess] = useState<string | undefined>('');

    const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    });

    const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
        setError('');
        setSuccess('');
    
        startTransition(async () => {
            try {
                const response = await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL + '/login', {
                    email: values.email,
                    password: values.password
                });
    
                if (response.data.error) {
                    setError(response.data.error);
                } else {
                    setSuccess(response.data.success);
                }
            } catch (error) {
                setError('An error occurred while logging in.');
                console.error(error);
            }
        });
    };

   return (
    <CardWrapper
        headerLabel="Login"
        backButtonLabel="Don't have an account?"
        backButtonHref="/register"
        showSocial
    >
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                disabled={isPending}
                    {...register("email")}
                    placeholder="john.doe@example.com"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md px-4 py-2"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                    disabled={isPending}
                    type="password"
                    {...register("password")}
                    placeholder="******"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md px-4 py-2"
                />
            </div>
            <FormError message={error} />
            <FormSuccess message={success}/>
            <button
                type="submit"
                className="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-black dark:bg-gray-700 hover:bg-indigo-700 dark:hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Submit
            </button>
            </form>
    </CardWrapper>
);
};