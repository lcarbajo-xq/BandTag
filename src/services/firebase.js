// Import the functions you need from the SDKs you need
import firebase from 'firebase/app'

import 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGE_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID
}

export const saveTagsOnFirestore = (user, id, title, tags) => {
  const db = firebase.firestore()
  user &&
    db
      .collection('users')
      .doc(user)
      .collection('songs')
      .doc(id)
      .set({
        title,
        tags
      })
      .then(() => alert('Succesfully sent!'))
      .catch((error) => console.log(error))
}

export const getTagsFromFirestore = async (user, trackId) => {
  const db = firebase.firestore()
  const docRef = db
    .collection('users')
    .doc(user)
    .collection('songs')
    .doc(trackId)
  return (
    (await docRef
      .get()
      .then((doc) => {
        if (doc) {
          return doc.data()?.tags
        } else {
          console.log('No such document!', '=>', trackId)
          return []
        }
      })
      .catch((error) => {
        console.log('Error getting document:', error)
      })) || []
  )
}

export const tagsUpdate = (user, id) => {
  const db = firebase.firestore()
  const doc = db.collection('users').doc(user).collection('songs').doc(id)

  return (
    doc &&
    doc.onSnapshot((docSnapshot) => {
      return docSnapshot.data()
    })
  )
}

export const tagsUpdateUnsub = (user, id) => {
  const db = firebase.firestore()
  const unsub =
    user && db.collection('users').doc(user).collection('songs').doc(id)
  return unsub && unsub.onSnapshot(() => {})
}

export default function firebaseInit() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
    console.log('Firebase initialized')
  }

  //   saveTagsOnFirestore()
}
