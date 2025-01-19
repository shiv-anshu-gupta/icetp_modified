import { NextResponse } from "next/server";
import MembershipModel from "../model/MembershipModel";
import { error } from "console";

export async function GET() {
  try {
    const membership = await MembershipModel.getAllMemberships();
    return NextResponse.json(membership);
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { error: "Failed to fetch events" },
      { status: 500 }
    );
  }
}
