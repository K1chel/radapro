"use client";

import { useCurrentUser } from "@/hooks/use-current-user";
import Link from "next/link";

const ClientPage = () => {
  const { isLoading, user } = useCurrentUser();

  if (isLoading) return <p>loading...</p>;

  if (!user) return <p>Not authenticated</p>;

  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <p>Client side</p>
      <span>{user.email}</span>
      <span>{user.id}</span>
      <Link href="/">Redirect to server page</Link>
    </div>
  );
};

export default ClientPage;
