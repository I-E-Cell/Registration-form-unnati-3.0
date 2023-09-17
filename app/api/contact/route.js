import connectDB from "@/app/lib/mongodb";
import Contact from "@/app/models/contact";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST(req) {
  const { teamname,member1,member2,member3, email1,email2,email3, phone1 ,phone2,phone3} = await req.json();

  try {
    await connectDB();
    await Contact.create({ teamname,member1,member2,member3, email1,email2,email3, phone1,phone2,phone3 });

    return NextResponse.json({
      msg: ["Registered successfully"],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.log(errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json({ msg: ["Unable to register."] });
    }
  }
}
