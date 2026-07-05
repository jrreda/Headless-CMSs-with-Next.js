import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");

  if (!secret) {
    return new Response("No", { status: 400 });
  }

  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET) {
    return new Response("No", { status: 401 });
  }

  const draft = await draftMode();
  draft.enable();

  // Redirect to the draft page (homepage since we are previewing the hero section)
  redirect("/");
}
