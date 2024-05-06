//javascript password checking


import { auth } from './firebase.js';


document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;


    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          
            const user = userCredential.user;

            const isAdmin = checkIfAdmin(email);
            if (isAdmin) {

                window.location.href = 'adminpage.html';
            } else {
        
                window.location.href = 'userpage.html';
            }
        })
        .catch((error) => {
  
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorMessage);
            
        });
});

function checkIfAdmin(email) {
    
    return email.endsWith("@admin.com");
}
