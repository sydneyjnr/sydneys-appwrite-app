"use client";
import useAuth from "@/context/useAuth";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Signup from "@/components/Signup";

const SignupPage = () => {
    const router = useRouter();
    const { authStatus } = useAuth();

    useEffect(() => {
        if (authStatus) {
            router.replace("/profile");
        }
    }, [authStatus, router]);

    // Optional: render nothing while redirecting
    if (authStatus) return null;

    return (
        <section className="px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
            <Signup />
        </section>
    );
}

export default SignupPage;
