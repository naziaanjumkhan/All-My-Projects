import { create } from "zustand";
import { persist } from "zustand/middleware";
import { auth } from "../config/firebase-config";

export const useAuth = create(persist(
    (set)=>({
        user:null,
        setUser:(payload)=>set(()=>({
            user:payload
        }))
    }),
    {name: "auth"}
))