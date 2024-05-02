import { getUserByEmail } from "@/data/user";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { generateToken } from "@/actions/generate_jwt_token";

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    // console.log(body);
    const { email, password } = body;
    const existingUser = await getUserByEmail(email);
    if (!existingUser) {
      return NextResponse.json({ message: "User Not Found" }, { status: 404 });
    }
    const validPassword = await bcrypt.compare(password, existingUser.password);
    if (!validPassword) {
      return NextResponse.json(
        { message: "Password Not Matches" },
        { status: 401 }
      );
    }

    //generate token
    const token = generateToken(existingUser);

    //set token as a bearer in a cookie
    const authToken = `Bearer ${token}`;
    // const headers = {
    //   "set-cookie": `token=${cookieHeader}; HttpOnly;Secure;SameSite = Strict`,
    // };

    return NextResponse.json(
      {
        data: existingUser,
        authToken,
        status: true,
        message: "Login Successful",
      },
      { status: 200 }
    );
  } catch (err: any) {
    return NextResponse.json({ message: err }, { status: 500 });
  }
};
