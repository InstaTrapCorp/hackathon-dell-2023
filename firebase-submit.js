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
  