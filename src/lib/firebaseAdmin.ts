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

export { db };
