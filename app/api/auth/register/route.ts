import bcrypt from "bcrypt";
import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { z } from "zod";


export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password, name } = body;
    const hashedPassword = await bcrypt.hash(password, 12);
    const existingUser = await getUserByEmail(body.email);
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 409 }
      );
    }
    const user = await db.user.create({
      data: {
        ...body,
        password: hashedPassword,
      },
    });
    return NextResponse.json(user, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ message: err }, { status: 500 });
  }
}
