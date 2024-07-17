import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export async function GET(req: NextRequest, res: NextResponse) {
  const session = await auth();
  const user = session?.user;

  if (!user || user === null) {
    return new NextResponse("Not authenticated", { status: 401 });
  }

  return new NextResponse(JSON.stringify(user), { status: 200 });
}
