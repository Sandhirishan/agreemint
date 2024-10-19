import admin from "firebase-admin";

const serviceAccount = {
    client_email: process.env.AUTH_FIREBASE_CLIENT_EMAIL,
    private_key: process.env.AUTH_FIREBASE_PRIVATE_KEY,
    project_id: process.env.AUTH_FIREBASE_PROJECT_ID,
}

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
  });
}

const db = admin.firestore();
const auth = admin.auth();

export { db, auth };
