import { Firestore } from '@google-cloud/firestore';

export const db = new Firestore({
  projectId: process.env.PROJECT_ID,
  keyFilename: process.env.FIREBASE_KEY_FILE_NAME,
});
