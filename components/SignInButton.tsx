"use client";

import { useRouter } from "next/navigation";

export default function SignInButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/sign-in")}
      className="mt-8 bg-[#212529] text-white px-3 py-2 rounded-md cursor-pointer"
    >
      Go to your Profile
    </button>
  );
}
