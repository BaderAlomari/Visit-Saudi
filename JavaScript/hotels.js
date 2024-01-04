  
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


//hamburger menu function
let header = document.querySelector('.header');
let hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerMenu.addEventListener('click', function () {
    header.classList.toggle('menu-open');
})

//cancel navigation function
function cancelnav() {
    header.classList.toggle('nav-list');
}

//form validation
const firstname = document.getElementById("name");
const checkin = document.getElementById("check-in");
const checkout = document.getElementById("check-out");
const adults = document.getElementById("adults");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");
const successmessage = document.getElementById("success");
const hotel = document.getElementById("hotel");

//Insert booking information into database
function InsertData() {

    set(ref(database, "Hotels/" + firstname.value),{
//Field Name---value
      firstName: firstname.value,
      checkin: checkin.value,
      checkout: checkout.value,
      adults: adults.value,
      hotel: hotel.value,
  
    })
   .then(()=>{
  
    alert("user signed in database")
   })
   .catch((error)=> {
  
    alert("user didn't signed in database")
   });
   }



form.addEventListener('submit', function(e) {
    let messages = []
    if (firstname.value === ' ') {
        messages.push('Name is required');
        successmessage.innerText = " "
    }

    if (firstname.value.length < 3) {
        messages.push('Name is required');
        successmessage.innerText = " "  
    }

    if (checkin.value < 9) {
        messages.push('Check-in is required');
        successmessage.innerText = " "
    }

    if (checkout.value < 9) {
        messages.push('Check-out is required');
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