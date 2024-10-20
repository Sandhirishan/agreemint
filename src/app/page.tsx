import Dashboard from "@/components/Dashboard";
import {auth} from "@/auth"
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  if (!session || !session.user) {
    redirect("/landing");
  }
  return (
    <div className="font-inter">
        <Dashboard />
    </div>
  );
}
