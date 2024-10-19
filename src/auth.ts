import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { FirestoreAdapter } from "@auth/firebase-adapter"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  adapter: FirestoreAdapter(),
  theme: {
    colorScheme: "light", // "auto" | "dark" | "light"
  },
  pages: {
    signIn: '/', // Redirect here after sign in
    signOut: '/landing', // Redirect here after sign out
  },
  
})