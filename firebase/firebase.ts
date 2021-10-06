import { initializeApp } from "firebase/app"
import { child, get, getDatabase, ref } from  "firebase/database"
import { Navigation, Page } from "../data";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

const app = initializeApp(firebaseConfig);

export const getNavigation = async (): Promise<Navigation | undefined> => getData(`config/navigation/`)

export const getPage = async (page: string): Promise<Page | undefined> => getData(`pages/${page}/`)

export const getData = async (path: string): Promise<any> => {
  try {
    const dbRef = ref(getDatabase(app))
    const snapshot = await get(child(dbRef, path))

    if (snapshot.exists()) {
      const res = snapshot.val()
      return res
    } else {
      return undefined
    }
  } catch {
    throw new Error(`Loading data form firebase failed.`)
  }
}