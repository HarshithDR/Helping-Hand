// import { firebase } from 'firebase';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDKS3CRB7y5PVwzW3Di85rWa1kVP9flm7U",
    authDomain: "project111111-fbd93.firebaseapp.com",
    projectId: "project111111-fbd93",
    storageBucket: "project111111-fbd93.appspot.com",
    messagingSenderId: "187392440466",
    appId: "1:187392440466:web:f89b7397042dba1fed0e4b",
    measurementId: "G-HQS2ZF233K",
    databaseURL: "https://project111111-fbd93-default-rtdb.firebaseio.com/",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Refernece contactInfo collections
  let contactInfo = firebase.database().ref("results");
  
  // Listen for a submit
  document.querySelector(".contact-form").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    // //   Get input Values
    // let name = document.querySelector(".name").value;
    // let email = document.querySelector(".email").value;
    let message = {
        "noOfPerson": 1,
        "personCondition": "bad",
        "ageCategory": "child",
        "personSeenAt": "morning",
        "location": "-2.108899,36.297936",
        "category": "homeless"
    };
    console.log(message);
  
    saveContactInfo(message);
  
    document.querySelector(".contact-form").reset();
  }
  
  // Save infos to Firebase
  function saveContactInfo(message) {
    let newContactInfo = contactInfo.push();
  
    newContactInfo.set({
    //   name: name,
    //   email: email,
      message: message
    });
  }