// @types/next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    email: string;
    firstName?: string;
    lastName?: string;
  }

  interface Session {
    user: User;
  }
}
