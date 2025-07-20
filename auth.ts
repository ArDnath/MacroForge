import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "@/lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter"

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  adapter: PrismaAdapter(prisma),
});