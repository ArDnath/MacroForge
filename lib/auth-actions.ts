"use server"

import { signIn, signOut } from "next-auth";

export const login = async () =>{
    await signIn("google", 
}