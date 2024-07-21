import { auth, signOut } from "@/lib/auth";
import Link from "next/link";

export default async function Home() {
  const session = await auth();

  return (
    <main className="h-screen flex items-center justify-center">
      {session ? (
        <div>
          <p>{JSON.stringify(session.user?.email)}</p>
          <Link href="/dashboard">Go to dashboard</Link>
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <button>Log Out</button>
          </form>
        </div>
      ) : (
        <>
          <Link href="/auth/sign-in">
            <button>Sign In</button>
          </Link>
        </>
      )}
    </main>
  );
}
