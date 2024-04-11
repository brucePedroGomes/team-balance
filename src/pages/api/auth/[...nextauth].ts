import prisma from "@/libs/prisma";
import NextAuth, { AuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

export const authOptions: AuthOptions = {
  callbacks: {
    async signIn({ user }) {
      if (!user.email || !user.name) return false;

      await prisma.user.upsert({
        where: {
          email: user.email,
        },
        create: {
          id: user.id,
          email: user.email,
          image: user.image ?? "",
          name: user.name,
        },
        update: {
          image: user.image,
          name: user.name,
        },
      });

      return true;
    },
  },
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    }),
  ],
};

export default NextAuth(authOptions);
