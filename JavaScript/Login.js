

import { getAuth, signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";





// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCe6n6ywt7zChkOlBxKLEr1VeXSRCvZRMI",
    authDomain: "visitsaudi-f9d01.firebaseapp.com",
    databaseURL: "https://visitsaudi-f9d01-default-rtdb.firebaseio.com",
    projectId: "visitsaudi-f9d01",
    storageBucket: "visitsaudi-f9d01.appspot.com",
    messagingSenderId: "984901797260",
    appId: "1:984901797260:web:f2e185085465fe4bce82a9",
    measurementId: "G-752LJXJVTV"
  };


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


      //Veribles decleraction
var email = document.getElementById("emaillogin");
var password = document.getElementById("passwordlogin");
var button = document.getElementById("loginbutton");


button.addEventListener('click', function() {

  if(email.value && password.value !== null) {


    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      alert("User signed in ");
      window.open("../html/index.html", "_self");

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
    });

  }
  else {
    alert("Please enter your email and password");
  }

});

