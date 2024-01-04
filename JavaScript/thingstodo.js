   
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


  //form validation
const firstname = document.getElementById("name");
const date = document.getElementById("date");
const tickets = document.getElementById("tickets");
const email = document.getElementById("email");
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const form = document.getElementById("form");
const errorElement = document.getElementById("error");
const successmessage = document.getElementById("success");
const ticket = document.getElementById("area");

//Insert booking information into database
  function InsertData() {

    set(ref(database, "Tickets/" + firstname.value),{
  
//Field Name---value
      firstName: firstname.value,
      email: email.value,
      date: date.value,
      tickets: tickets.value,
      activity: ticket.value,
  
    })
   .then(()=>{
  
    alert("user signed in database")
   })
   .catch((error)=> {
  
    alert("user didn't signed in database")
   });
   }


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

    if (date.value < 9) {
        messages.push('Date is required');
        successmessage.innerText = " "
    }

    if (email.value.match(mailformat)) {

        successmessage.innerText = " "
    } else {
        messages.push('Enter a valid email address');
        successmessage.innerText = " "
    }

    if (tickets.value < 1) {
        messages.push('Specify number of tickets');
        successmessage.innerText = " "
    }

    if (tickets.value > 5) {
        messages.push('Maximum tickets allowed is 5');
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