"use client"
 
import { z } from "zod"

export const UserValidation=z.object({
    profile_photo:z.string().url().nonempty(),
    name:z.string().min(2,{message:'MINIMUM 3 CHARACTER'}).max(20,{message:'NOT MORE THAN 20 CHARACTER'}),
    username:z.string().min(5,{message:'MINIMUM 5 CHARACTER'}).max(20,{message:'NOT MORE THAN 20 CHARACTER'}),
    bio:z.string().min(5).max(1000),
    
})