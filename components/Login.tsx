"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

const Login = () => {
  return (
    <div className="bg-[#11A37F] h-screen flex flex-col items-center justify-center text-center">
      <Image
        src="https://links.papareact.com/2i6"
        width={300}
        height={300}
        alt="logo"
      />
      <button
        onClick={() => signIn("google")}
        className="text-white font-bold text-3xl animate-pulse button"
      >
        Sign In to use ChatGPT
      </button>
      <button
        onClick={() => signIn("azure-ad")}
        className="text-white font-bold text-3xl animate-pulse button"
      >
        Sign In with Azure AD
      </button>
      <button
        onClick={() => signIn("github")}
        className="text-white font-bold text-3xl animate-pulse button"
      >
        Sign In with Github
      </button>
    </div>
  );
};

export default Login;
