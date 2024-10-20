import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { FirestoreAdapter } from "@auth/firebase-adapter"
import admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
        clientEmail: process.env.AUTH_FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.AUTH_FIREBASE_PRIVATE_KEY,
        projectId: process.env.AUTH_FIREBASE_PROJECT_ID,
    }),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
  });
}

const db = admin.firestore();
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  adapter: FirestoreAdapter(db),
  theme: {
    colorScheme: "light", // "auto" | "dark" | "light"
  },
  callbacks: {
    authorized: async ({ auth }) => {
      // Logged in users are authenticated, otherwise redirect to login page
      return !!auth
    },
  },

})