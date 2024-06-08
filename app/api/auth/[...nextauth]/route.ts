// app/api/auth/[...nextauth]/route.ts
import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import AzureADProvider from "next-auth/providers/azure-ad";
import GithubProvider from "next-auth/providers/github"

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    AzureADProvider({
        clientId: process.env.AZURE_AD_CLIENT_ID!,
        clientSecret: process.env.AZURE_AD_CLIENT_SECRET!,
        tenantId: process.env.AZURE_AD_TENANT_ID!,
      }),
      GithubProvider({
        clientId: process.env.GITHUB_ID!,
        clientSecret: process.env.GITHUB_SECRET!,
      }),
  ],
//   callbacks: {
//     async session({ session, token }) {
//       if (session.user) {
//         session.user.email = token.email as string;
//       }
//       return session;
//     },
//     async jwt({ token, user }) {
//       if (user) {
//         token.email = user.email;
//       }
//       return token;
//     },
//   },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
