 // Import the functions you need from the SDKs you need
 import {initializeApp} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
 import {
     getAuth,
     createUserWithEmailAndPassword,
     signInWithEmailAndPassword,
     signOut
 } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
 import {getDatabase, set, ref, update} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";


 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
     apiKey: "AIzaSyCBVnhv5bnA_upRL2I8NmKkaDlOFnJc3Q4",
     authDomain: "femme-power.firebaseapp.com",
     projectId: "femme-power",
     storageBucket: "femme-power.appspot.com",
     messagingSenderId: "403660053180",
     appId: "1:403660053180:web:4901ddd0a40d01ad854eb9",
     measurementId: "G-H11S7S5J3P"
};

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth();
 const database = getDatabase(app);

 submitData.addEventListener('click', (e) => {

     var email = document.getElementById('email').value;
     var password = document.getElementById('psw').value;

     //sign up user
     createUserWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
             // Signed in
             const user = userCredential.user;
             // ... user.uid
             set(ref(database, 'users/' + user.uid), {
                 email: email,
                 password: password
             })
                 .then(() => {
                     // Data saved successfully!
                     alert('Account created successfully and Logged In');
                     location.href = "home.html";
     
                 })
                 .catch((error) => {
                     // The write failed...
                     alert(error);
                 });
         })
         .catch((error) => {
             const errorCode = error.code;
             const errorMessage = error.message;
             // ..
             alert('User Not Found!');
         });

     // log in user
     signInWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
             // Signed in
             const user = userCredential.user;
             // ...

             // save log in details into real time database
             var lgDate = new Date();
             update(ref(database, 'users/' + user.uid), {
                 last_login: lgDate,
             })
                 .then(() => {
                     // Data saved successfully!
                     alert('User Logged In');
                     location.href = "home.html";

                 })
                 .catch((error) => {
                     // The write failed...
                     alert(error);
                 });
         })
         .catch((error) => {
             const errorCode = error.code;
             const errorMessage = error.message;
             alert(errorMessage);
         });


     signOut(auth).then(() => {
            // Sign-out successful.
     }).catch((error) => {
         // An error happened.
     });
 });
