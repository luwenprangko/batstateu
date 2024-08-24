// const firebaseConfig = {
//     apiKey: "AIzaSyAdssKrSZdB5MeO6bLlzs9ra42XSsQbNlg",
//     authDomain: "comlab-41b63.firebaseapp.com",
//     databaseURL: "https://comlab-41b63-default-rtdb.firebaseio.com",
//     projectId: "comlab-41b63",
//     storageBucket: "comlab-41b63.appspot.com",
//     messagingSenderId: "573050227714",
//     appId: "1:573050227714:web:8c3720298c64b470fb6b1b"
//   };


// firebase.initializeApp(firebaseConfig);

// // Reference to Firebase authentication and database
// const auth = firebase.auth();
// const database = firebase.database();

// // Get a reference to the register form
// const registerForm = document.getElementById('registerForm');

// // Handle form submission
// registerForm.addEventListener('submit', (e) => {
//   e.preventDefault(); // Prevent default form submission

//   // Get user input
//   const email = registerForm['email'].value;
//   const password = registerForm['password'].value;
//   const srcode = registerForm['srcode'].value; // Assuming srcode is a string here
//   const firstName = registerForm['firstName'].value;
//   const lastName = registerForm['lastName'].value;
//   const middleInitial = registerForm['middleInitial'].value;

//   // Check if srcode already exists in the database
//   database.ref('users/' + srcode).once('value')
//     .then((snapshot) => {
//       if (snapshot.exists()) {
//         // srcode already exists
//         alert('Registration failed. srcode already exists.');
//       } else {
//         // Register the user with Firebase authentication
//         auth.createUserWithEmailAndPassword(email, password)
//           .then((userCredential) => {
//             // User registered successfully
//             const user = userCredential.user;

//             // Save additional user data to Firebase database only if srcode doesn't exist
//             database.ref('users/' + srcode).transaction((currentData) => {
//               if (!currentData) {
//                 return {
//                   email: email,
//                   srcode: srcode,
//                   firstName: firstName,
//                   lastName: lastName,
//                   middleInitial: middleInitial
//                 };
//               } else {
//                 // Abort transaction, srcode already exists
//                 alert('Registration failed. srcode already exists.');
//                 return; // Abort transaction
//               }
//             })
//             .then((transactionResult) => {
//               if (transactionResult.committed) {
//                 // Data saved successfully
//                 alert('Registration successful!');
//                 // Clear the form after successful registration
//                 registerForm.reset();
//               } else {
//                 console.error('Transaction aborted:', transactionResult.error);
//                 alert('Registration failed. Please try again.');
//               }
//             })
//             .catch((error) => {
//               console.error('Error saving user data:', error.message);
//               alert('Registration failed. Please try again.');
//             });
//           })
//           .catch((error) => {
//             console.error('Error registering user:', error.message);
//             alert('Registration failed. Please try again.');
//           });
//       }
//     })
//     .catch((error) => {
//       console.error('Error checking srcode existence:', error.message);
//       alert('Registration failed. Please try again.');
//     });
// });


// const firebaseConfig = {
//     apiKey: "AIzaSyAdssKrSZdB5MeO6bLlzs9ra42XSsQbNlg",
//     authDomain: "comlab-41b63.firebaseapp.com",
//     databaseURL: "https://comlab-41b63-default-rtdb.firebaseio.com",
//     projectId: "comlab-41b63",
//     storageBucket: "comlab-41b63.appspot.com",
//     messagingSenderId: "573050227714",
//     appId: "1:573050227714:web:8c3720298c64b470fb6b1b"
// };

// firebase.initializeApp(firebaseConfig);

// // Reference to Firebase authentication and database
// const auth = firebase.auth();
// const database = firebase.database();

// // Get a reference to the register form
// const registerForm = document.getElementById('registerForm');

// // Handle form submission
// registerForm.addEventListener('submit', (e) => {
//     e.preventDefault(); // Prevent default form submission

//     // Get user input
//     const email = registerForm['email'].value;
//     const password = registerForm['password'].value;
//     const srcode = registerForm['srcode'].value; // Assuming srcode is a string here
//     const firstName = registerForm['firstName'].value;
//     const lastName = registerForm['lastName'].value;
//     const middleInitial = registerForm['middleInitial'].value;

//     // Check if all fields are filled
//     if (!email || !password || !srcode || !firstName || !lastName || !middleInitial) {
//         alert('Please fill out all fields.');
//         return;
//     }

//     // Check if srcode already exists in the database
//     database.ref('users/' + srcode).once('value')
//         .then((srcodeSnapshot) => {
//             if (srcodeSnapshot.exists()) {
//                 // srcode already exists
//                 alert('srcode already exists.');
//             } else {
//                 // Check if email already exists in the database
//                 database.ref('users').orderByChild('email').equalTo(email).once('value')
//                     .then((emailSnapshot) => {
//                         if (emailSnapshot.exists()) {
//                             // Email already exists
//                             alert('Email already exists.');
//                         } else {
//                             // Register the user with Firebase authentication
//                             auth.createUserWithEmailAndPassword(email, password)
//                                 .then((userCredential) => {
//                                     // User registered successfully
//                                     const user = userCredential.user;

//                                     // Save additional user data to Firebase database
//                                     database.ref('users/' + srcode).set({
//                                         email: email,
//                                         srcode: srcode,
//                                         firstName: firstName,
//                                         lastName: lastName,
//                                         middleInitial: middleInitial
//                                     })
//                                     .then(() => {
//                                         // Data saved successfully
//                                         alert('Registration successful!');
//                                         // Clear the form after successful registration
//                                         registerForm.reset();
//                                     })
//                                     .catch((error) => {
//                                         console.error('Error saving user data:', error.message);
//                                         alert('Registration failed. Please try again.');
//                                     });
//                                 })
//                                 .catch((error) => {
//                                     console.error('Error registering user:', error.message);
//                                     alert('Registration failed. Please try again.');
//                                 });
//                         }
//                     })
//                     .catch((error) => {
//                         console.error('Error checking email existence:', error.message);
//                         alert('Registration failed. Please try again.');
//                     });
//             }
//         })
//         .catch((error) => {
//             console.error('Error checking srcode existence:', error.message);
//             alert('Registration failed. Please try again.');
//         });
// });

const firebaseConfig = {
    apiKey: "AIzaSyDm9Qpv3uGByOVix841pKBCXIJhhblbwKQ",
    authDomain: "bsu-mabini-comlab.firebaseapp.com",
    databaseURL: "https://bsu-mabini-comlab-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "bsu-mabini-comlab",
    storageBucket: "bsu-mabini-comlab.appspot.com",
    messagingSenderId: "548993981418",
    appId: "1:548993981418:web:b1f35c7b026c253c27b093"
};

firebase.initializeApp(firebaseConfig);

// Reference to Firebase authentication and database
const auth = firebase.auth();
const database = firebase.database();

// Get a reference to the register form and the submit button
const registerForm = document.getElementById('registerForm');
const submitButton = document.getElementById('submitButton');

// Handle form submission
registerForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission

    // Disable the submit button to prevent multiple submissions
    submitButton.disabled = true;

    // Get user input
    const email = registerForm['email'].value;
    const password = registerForm['password'].value;
    const srcode = registerForm['srcode'].value; // Assuming srcode is a string here
    const firstName = registerForm['firstName'].value;
    const lastName = registerForm['lastName'].value;
    const middleInitial = registerForm['middleInitial'].value;

    // Check if all fields are filled
    if (!email || !password || !srcode || !firstName || !lastName) {
        alert('Please fill out all fields.');
        submitButton.disabled = false; // Re-enable the submit button
        return;
    }

    // Validate email domain
    const emailDomain = email.split('@')[1];
    console.log('Email domain:', emailDomain); // Log the email domain for debugging
    if (emailDomain !== 'g.batstate-u.edu.ph') {
        alert('Please use your @g.batstate-u.edu.ph email address.');
        submitButton.disabled = false; // Re-enable the submit button
        return;
    }

    // Check if srcode already exists in the database
    database.ref('users/' + srcode).once('value')
        .then((srcodeSnapshot) => {
            if (srcodeSnapshot.exists()) {
                // srcode already exists
                alert('srcode already exists.');
                submitButton.disabled = false; // Re-enable the submit button
            } else {
                // Check if email already exists in the database
                database.ref('users').orderByChild('email').equalTo(email).once('value')
                    .then((emailSnapshot) => {
                        if (emailSnapshot.exists()) {
                            // Email already exists
                            alert('Email already exists.');
                            submitButton.disabled = false; // Re-enable the submit button
                        } else {
                            // Register the user with Firebase authentication
                            auth.createUserWithEmailAndPassword(email, password)
                                .then((userCredential) => {
                                    // User registered successfully
                                    const user = userCredential.user;

                                    // Save additional user data to Firebase database
                                    database.ref('users/' + srcode).set({
                                        email: email,
                                        srcode: srcode,
                                        firstName: firstName,
                                        lastName: lastName,
                                        middleInitial: middleInitial
                                    })
                                    .then(() => {
                                        // Data saved successfully
                                        alert('Registration successful!');
                                        // Clear the form after successful registration
                                        registerForm.reset();
                                        submitButton.disabled = false; // Re-enable the submit button
                                    })
                                    .catch((error) => {
                                        console.error('Error saving user data:', error.message);
                                        alert('Registration failed. Please try again.');
                                        submitButton.disabled = false; // Re-enable the submit button
                                    });
                                })
                                .catch((error) => {
                                    console.error('Error registering user:', error.message);
                                    alert('Registration failed. Please try again.');
                                    submitButton.disabled = false; // Re-enable the submit button
                                });
                        }
                    })
                    .catch((error) => {
                        console.error('Error checking email existence:', error.message);
                        alert('Registration failed. Please try again.');
                        submitButton.disabled = false; // Re-enable the submit button
                    });
            }
        })
        .catch((error) => {
            console.error('Error checking srcode existence:', error.message);
            alert('Registration failed. Please try again.');
            submitButton.disabled = false; // Re-enable the submit button
        });
});
