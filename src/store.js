export async function loadDogs() {
    try {
        // Call the server side API
        const response = await fetch('/api/dogs');
        // If we got a successful response, return the values
        if(response.ok) {
            // Get the JSON
            const body = await response.json();
            // Return the dogs array
            return body.dogs; 
        } else { // An error occurred
            // Return an error code - likely that the server wasn't setup
            return ['Could not load dogs', 'Did you set up the server?']
        }
    } catch (ex) {
        // Something else went wrong
        // Print out the error to the console
        console.log(ex)
        // Return an error message for display
        return ['An error occurred']
    }
}