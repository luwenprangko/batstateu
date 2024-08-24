// Initialize Firebase with your project's config
const firebaseConfig = {
    apiKey: "AIzaSyAdssKrSZdB5MeO6bLlzs9ra42XSsQbNlg",
    authDomain: "comlab-41b63.firebaseapp.com",
    projectId: "comlab-41b63",
    storageBucket: "comlab-41b63.appspot.com",
    messagingSenderId: "573050227714",
    appId: "1:573050227714:web:8c3720298c64b470fb6b1b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to Firebase authentication and database
const auth = firebase.auth();
const database = firebase.database();

// Get a reference to the login form
const dataForm = document.getElementById('dataForm');

// Function to handle form submission
dataForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Get user input
    const srcode = dataForm['srcode'].value;
    const email = dataForm['email'].value;
    const password = dataForm['password'].value;
    const pcNumber = dataForm['pcNumber'].value;

    try {
        // Sign in user with Firebase authentication
        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        const user = userCredential.user;

        // Fetch user details (including fullName) from users node
        const userRef = database.ref('users/' + srcode);
        userRef.once('value', (snapshot) => {
            if (snapshot.exists()) {
                const userData = snapshot.val();
                const fullName = userData.firstName + ' ' + userData.middleInitial + ' ' + userData.lastName;

                // Record login timestamp and full name in attendance node
                const currentDate = new Date();
                const formattedTimeIn = currentDate.toLocaleTimeString('en-US', {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true
                });

                database.ref('attendance-lab-1/' + srcode).update({
                    timeIn: formattedTimeIn,
                    fullName: fullName,
                    pcNumber: pcNumber
                });

                // Clear the form after successful login
                dataForm.reset();

                // Display success message (you can replace with redirection or other logic)
                alert('Login successful!');
            } else {
                alert('User data not found. Please check your credentials and try again.');
            }
        });

    } catch (error) {
        // Handle errors during login
        console.error('Error signing in:', error.message);
        alert('Login failed. Please check your credentials and try again.');
    }
});
