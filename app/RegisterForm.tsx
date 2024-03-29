"use client"

import Link from "next/link";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { AiOutlineGoogle } from "react-icons/ai";
import Button from "./components/Button";
import Heading from "./components/Heading";
import Input from "./components/inputs/input";

const RegisterForm = () => {

    const [isLoading,setIsLoading]=useState(false);
    const {register,handleSubmit,formState:{errors}}= useForm<FieldValues>({
        defaultValues:{
            name:"",
            email:"",
            password:"",
        }
    });

    const onSubmit:SubmitHandler<FieldValues>=(data)=>{
        setIsLoading(true)
        
        

    }
    return ( 
        <>
        <Heading title="Sign up for E ~ Shop"/>
        <hr className="w-full h-px bg-slate-300" />
        <Input id="name" label="Name" disabled={isLoading} register={register} errors={errors} required/>
        <Input id="email" label="Email" disabled={isLoading} register={register} errors={errors} required/>
        <Input id="password" label="Password" disabled={isLoading} register={register} errors={errors} type="password" required/>
        <Button label={isLoading?'Loading':"Sign up" } onClick={handleSubmit(onSubmit)}/>

        <Button label="Sign up with Google" outline icon={AiOutlineGoogle} onClick={ ()=>{}}/>


        <p className="text-sm">
            Already have an account? <Link className="underline text-blue-600" href='/login'>
                Login
            </Link>
        </p>

        </>
     );
}
 
export default RegisterForm;