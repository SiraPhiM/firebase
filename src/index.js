
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-analytics.js";
import { getAuth , RecaptchaVerifier, signInWithPhoneNumber} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCx_F5snQgzHL-EmfxLACT1ocb4P_ftkZk",
  authDomain: "migrant-fc738.firebaseapp.com",
  databaseURL: "https://migrant-fc738-default-rtdb.firebaseio.com",
  projectId: "migrant-fc738",
  storageBucket: "migrant-fc738.appspot.com",
  messagingSenderId: "258763803332",
  appId: "1:258763803332:web:4abb9343a408a28a831791",
  measurementId: "G-DL6T1Z0YBW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

window.onload = function() {
  const auth = getAuth();
  window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);
  recaptchaVerifier.render();
}
 
//   const button = document.querySelector('SignUp'); 
//   console.log(button);
// button.addEventListener('click', AuthTest())

document.getElementById('SignUp').addEventListener('click', function(){
  const phoneNumber = document.getElementById('phone').value;
  const appVerifier = window.recaptchaVerifier;
  const auth = getAuth();
  console.log(phoneNumber, appVerifier);
signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        codeResult = confirmationResult;
        console.log (codeResult);
        alert('message sent');
    }).catch((error) => {
      
        alert(error.message);
    });
})

// function AuthTest() {
//   var phoneNumber = document.getElementById('phone').value;
//   const appVerifier = window.recaptchaVerifier;
//   const auth = getAuth();
//   console.log(phoneNumber);
// signInWithPhoneNumber(auth, phoneNumber, appVerifier)
//     .then((confirmationResult) => {
//         window.confirmationResult = confirmationResult;
//         codeResult = confirmationResult;
//         console.log (codeResult);
//         alert('message sent');
//     }).catch((error) => {
//         alert('message not sent');
//     });
// }





