import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyB9Jnsx7cd7sxX8gmfVbIB3ek1d4v7LRoQ",
    authDomain: "cristhofermusic-839fe.firebaseapp.com",
    databaseURL: "https://cristhofermusic-839fe.firebaseio.com",
    projectId: "cristhofermusic-839fe",
    storageBucket: "",
    messagingSenderId: "138396196323"
  };
 firebase.initializeApp(config);

export const firebaseAuth=firebase.auth()
export const firebaseDatabase=firebase.database()
export default firebase