import firebase, { firestore } from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

const config = {
  apiKey: process.env.Firebase_Key,
  authDomain: process.env.Firebase_AuthDomain,
  databaseURL: process.env.Firebase_DatabaseURL,
  storageBucket: process.env.Firebase_StorageBucket,
  projectId: process.env.Firebase_ProjectID
}
  
export const firebaseApp = firebase.initializeApp(config)
export const docsRef = firebaseApp.database().ref('docs')
export const storageRef = firebaseApp.storage().ref()
