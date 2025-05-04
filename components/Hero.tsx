import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SignInButton from "./SignInButton";

function Hero() {
  return (
    <div className="min-h-[70vh] md:min-h-[60vh] lg:min-h-[90vh] flex flex-col md:flex-row justify-center items-center bg-white px-4 md:px-12 text-black">
      <div className="max-w-2xl">
        <h1 className="text-5xl pt-6 md:pt-0 md:text-7xl leading-tight font-semibold">
          Resell Anything, Anytime{" "}
        </h1>
        <p className="text-[#495057] mt-4">Your Marketplace, Your Rules</p>
        <p className="text-[#495057] mt-4">
          Turn Anything Into Opportunity – Resell with Confidence
        </p>
        <SignInButton />
      </div>
      <div>
        <Image src="/hero.png" alt="img" width={1000} height={1000} />
      </div>
    </div>
  );
}

export default Hero;
