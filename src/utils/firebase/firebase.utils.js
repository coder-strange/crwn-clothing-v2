import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, collection, addDoc, writeBatch, query, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCs-MNsdHjyWNXY3yB-4AARg-3tenOyD2Y",
  authDomain: "crown-clothing-c9dfc.firebaseapp.com",
  projectId: "crown-clothing-c9dfc",
  storageBucket: "crown-clothing-c9dfc.appspot.com",
  messagingSenderId: "201682867039",
  appId: "1:201682867039:web:d8ebc2002e43c463871cea",
  measurementId: "G-G5QCENJR5C"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthChangedListner = (callback) => onAuthStateChanged(auth, callback);

export const addCollectionAndDocuments = async (collectionName, documents) => {
  const collectionRef = collection(db, collectionName);
  const batch = writeBatch(db);

  documents.forEach(item => {
    const docRef = doc(collectionRef, item.title.toLowerCase());
    batch.set(docRef, item);
  });
  await batch.commit();
  console.log("DONE UPLOAD")
}

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};