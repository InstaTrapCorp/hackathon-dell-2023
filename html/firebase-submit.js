<!-- Include Firebase SDK -->
<script src="https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.0.2/firebase-database.js"></script>

<!-- Firebase configuration (replace with your own) -->
<script>
  const firebaseConfig = {
    apiKey: "YOUR-API-KEY",
    authDomain: "YOUR-AUTH-DOMAIN",
    projectId: "YOUR-PROJECT-ID",
    storageBucket: "YOUR-STORAGE-BUCKET",
    messagingSenderId: "YOUR-MESSAGING-SENDER-ID",
    appId: "YOUR-APP-ID"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Reference to the Firebase Realtime Database
  const database = firebase.database();

  // Function to submit data to Firebase
  function submitDataToFirebase(data) {
    const ref = database.ref("your_data_path"); // Replace with your database path
    const newItemRef = ref.push(); // Generate a unique key for the new data
    newItemRef.set(data); // Set the data at the unique key
  }

  // Function to handle form submission
  function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    submitDataToFirebase(data);
  }
</script>
