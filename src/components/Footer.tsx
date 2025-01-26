'use client';

import { company, solution, whatwedo } from "@/constants";
import Contact from "./Contact";
import Logo from "./Logo";
import Link from "next/link";

export default function Footer(){
    return (
        <section className="bg-[#11040E] text-white">
        <div className="max-w-7xl mx-auto p-8">
        <div className="flex flex-col md:grid md:grid-cols-4 gap-[5em]">
        <div className="flex flex-col gap-4 ">
         <Logo />
         <p>Tobams Group is an innovative consultancy firm reshaping the future of tech talent development in Africa, specializing in talent acquisition, internships, and skill development with a global perspective.</p>
         <div className=''>
            social
        </div>
        </div>

        <div className="flex flex-col gap-4">
            <h1 className="text-xl font-bold">
            What we Do
            </h1>
            <ul className="flex flex-col gap-3">
                {whatwedo.map((item, idx) => (
                    <Link href='/' key={idx}>
                        {item.label}
                    </Link>
                ))}
            </ul>
        </div>

        <div className="flex flex-col gap-4">
        <h1 className="text-xl font-bold">
            Company
            </h1>
            <ul className="flex flex-col gap-3">
                {company.map((item, idx) => (
                    <Link href='/' key={idx}>
                        {item.label}
                    </Link>
                ))}
            </ul>
        </div>

        <div className="flex flex-col gap-4">
            <h1 className="text-xl font-bold">
            Solution
            </h1>
            <ul className="flex flex-col gap-3">
                {solution.map((item, idx) => (
                    <Link href='/' key={idx} className="text-base">
                        {item.label}
                    </Link>
                ))}
            </ul>
        </div>

        </div>
         {/* <Copyright /> */}
         <Contact />
         <div className="flex justify-center items-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Tobams Group. All rights reserved.  |  Privacy Policy |  Terms of Service
            </div>
            </div>
        </section>
    )
}