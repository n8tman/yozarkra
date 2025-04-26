import { type NextAuthOptions } from "next-auth";
import { type Session } from "next-auth";
import { type JWT } from "next-auth/jwt";

// Basic auth options configuration
export const authOptions: NextAuthOptions = {
  providers: [],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async session({ session, token, user }: { session: Session; token: JWT; user: any }) {
      return session;
    },
    async jwt({ token, user, account, profile }) {
      return token;
    },
  },
}; 