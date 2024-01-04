 //Firebase import
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
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
const database = getDatabase();

const firstName = document.getElementById("f_name");
const lastName = document.getElementById("l_name");
const dateOfBirth = document.getElementById("DOB");
const phone = document.getElementById("subject");
const email = document.getElementById("email");
const gender = document.getElementById("gender");
const reason = document.getElementById("reason");
const comment = document.getElementById("comment");
const file = document.getElementById("files");
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const errorElement = document.getElementById("error");
const successmessage = document.getElementById("success");
const button = document.getElementById("button");


//Insert booking information into database
function InsertData() {

    set(ref(database, "ContactUs/" + firstName.value),{
//Field Name---value
      firstName: firstName.value,
      lastName: lastName.value,
      dateOfBirth: dateOfBirth.value,
      phone: phone.value,
      email: email.value,
      gender: gender.value,
      reason: reason.value,
      comment: comment.value,
  
    })
   .then(()=>{
  
    alert("user signed in database")
   })
   .catch((error)=> {
  
    alert("user didn't signed in database")
   });
   }

   button.addEventListener('click', function(e) {
    let messages = []
    if (firstName.value === ' ') {
        messages.push('Name is required');
        successmessage.innerText = " "
    }

    if (lastName.value.length < 3) {
        messages.push('Name is required');
        successmessage.innerText = " "  
    }

    if (dateOfBirth.value < ' ') {
        messages.push('Birth date is required');
        successmessage.innerText = " "
    }
    
    if (phone.value < ' ') {
        messages.push('Phone no. is required');
        successmessage.innerText = " "
    }
    
    if (gender.value < ' ') {
        messages.push('Gender is required');
        successmessage.innerText = " "
    }
    if (reason.value < ' ') {
        messages.push('Reason is required');
        successmessage.innerText = " "
    }
    if (comment.value < ' ') {
        messages.push('Comment is required');
        successmessage.innerText = " "
    }

    if (email.value.match(mailformat)) {

        successmessage.innerText = " "
    } else {
        messages.push('Enter a valid email address');
        successmessage.innerText = " "
    }

    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(', ');
        successmessage.innerText = " "
    }

else {
    InsertData();
    errorElement.innerText = " "
       successmessage.innerText = "You have successfuly booked"
    }

   })
/*
button.addEventListener('submit', function(e) {
    let messages = []
    if (firstName.value === ' ') {
        messages.push('Name is required');
        successmessage.innerText = " "
    }

    if (lastName.value.length < 3) {
        messages.push('Name is required');
        successmessage.innerText = " "  
    }

    if (dateOfBirth.value < 9) {
        messages.push('Date is required');
        successmessage.innerText = " "
    }

    if (email.value.match(mailformat)) {

        successmessage.innerText = " "
    } else {
        messages.push('Enter a valid email address');
        successmessage.innerText = " "
    }

    if (adults.value < 1) {
        messages.push('Adults can not be 0');
        successmessage.innerText = " "
    }

    if (adults.value > 5) {
        messages.push('Adults can not be more than 5');
        successmessage.innerText = " "
    }

    if (children.value > 5) {
        messages.push('Children can not be more than 5');
        successmessage.innerText = " "
    }

    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(', ');
        successmessage.innerText = " "
    }

else {
    InsertData();
    errorElement.innerText = " "
       successmessage.innerText = "You have successfuly booked"
    }
})
*/