document.getElementById("activityButton").addEventListener("click", () => {
    async function fetchUserData() {
     try {
       // Making the fetch request
       const response = await fetch('https://official-joke-api.appspot.com/random_joke');
       // Checking if the response is OK
       if (!response.ok) {
         throw new Error('Network response was not ok ' + response.statusText);
       }
       // Parsing the response as JSON
       const userData = await response.json();
       // Logging the user data
       console.log(userData);
     } catch (error) {
       // Handling any errors
       console.error('Fetch error:', error);
     }
   }
    // Calling the function
   fetchUserData();
 
 })