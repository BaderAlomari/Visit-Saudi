   //import from firebase
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";
    import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";
    import { getDatabase, ref, set, child  } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";



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

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  const database = getDatabase();
  

      //Veribles decleraction
      var email = document.getElementById("SignUpEmail");
      var password = document.getElementById("SignUpPassword");
      var confirmpassword = document.getElementById("SignUpPasswordConfirm");
      var firstName = document.getElementById("firstname");
      var lastName = document.getElementById("lastname");
      var SignUpbuttonjs = document.getElementById("SignUpbutton");
  

      //Insert Sign up information to realtime database
  function InsertData() {

    set(ref(database, "Users/" + firstName.value),{
  
//Field Name---value
      email: email.value,
      firstName: firstName.value,
      lastName: lastName.value,
      last_login: Date.now()
  
    })
   .then(()=>{
  
    alert("user signed in database")
   })
   .catch((error)=> {
  
    alert("user didn't signed in database")
   });
   }


    //Event listener to signup button
    SignUpbuttonjs.addEventListener('click', function() {
      
      //check that that all fields are not empty and password match confirm password 
        if(email.value && password.value && confirmpassword.value && firstName.value && lastName.value !== null && password.value == confirmpassword.value) {

          //creat user
    createUserWithEmailAndPassword(auth, email.value, password.value)
     .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;

      //call insert function
      InsertData();
         
         console.log("User created successfully!");
          // ...
         // window.open("../html/index.html", "_self");
     })
         .catch((error) => {
          const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error);
// ..
       
});

        }

        else{
          alert("Please complete your information and check password match confirm password");
        }
});
