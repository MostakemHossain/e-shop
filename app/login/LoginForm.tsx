/* eslint-disable react/no-unescaped-entities */
"use client"

import Link from "next/link";

import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { AiOutlineGoogle } from "react-icons/ai";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Input from "../components/inputs/input";


const LoginForm = () => {

    const [isLoading,setIsLoading]=useState(false);
    const {register,handleSubmit,formState:{errors}}= useForm<FieldValues>({
        defaultValues:{
            email:"",
            password:"",
        }
    });

    const onSubmit:SubmitHandler<FieldValues>=(data)=>{
        setIsLoading(true)
        
        

    }
    return ( 
        <>
        <Heading title="Sign in for E ~ Shop"/>
        <hr className="w-full h-px bg-slate-300" />
        
        <Input id="email" label="Email" disabled={isLoading} register={register} errors={errors} required/>
        <Input id="password" label="Password" disabled={isLoading} register={register} errors={errors} type="password" required/>
        <Button label={isLoading?'Loading':"Login" } onClick={handleSubmit(onSubmit)}/>

        <Button label="Continue with Google" outline icon={AiOutlineGoogle} onClick={ ()=>{}}/>


        <p className="text-sm">
            Don't have an account? <Link className="underline text-blue-600" href='/register'>
                Sign up
            </Link>
        </p>

        </>
     );
}
 
export default LoginForm;