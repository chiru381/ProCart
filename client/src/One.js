import React, { useState, useEffect } from "react";
import firebase from "firebase";

const auth = firebase.auth();

firebase.initializeApp({
  apiKey: "AIzaSyAqDjTl3hzUNw_jMGoXCmf7VHm6LOEyPOg",
  authDomain: "sign-in-project-89492.firebaseapp.com",
  projectId: "sign-in-project-89492",
  storageBucket: "sign-in-project-89492.appspot.com",
  messagingSenderId: "132262344596",
  appId: "1:132262344596:web:c1cbf01f384303d33bc181",
});

const One = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((person) => {
      if (person) {
        setUser(person);
      } else {
        setUser(null);
      }
    });
  });

  const signInWithGoogle = async () => {
    try {
      await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div>
        <center>
          {user ? (
            <div>
              <h1>Welcome To Home</h1>
              <button onClick={() => auth.signOut()}>Signout</button>
            </div>
          ) : (
            <button onClick={signInWithGoogle}>Sigin In With Google</button>
          )}
        </center>
      </div>
    </>
  );
};

export default One;
