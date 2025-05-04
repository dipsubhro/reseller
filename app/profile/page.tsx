import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  // const { userId } = await auth();
  // if (!userId) {
  //   redirect("/sign-in");
  // }

  const user = await currentUser();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">
        Welcome, {user?.firstName || "User"}!
      </h1>
      <p>Email: {user?.emailAddresses[0]?.emailAddress}</p>
    </div>
  );
}
