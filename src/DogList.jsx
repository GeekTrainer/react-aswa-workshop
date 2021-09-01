import React, { useState, useEffect } from 'react';
import { loadDogs } from './store'

function DogList() {
    // Registers a state object named dogs
    // and a function named setDogs to update the value
    const [dogs, setDogs] = useState([]);

    // Runs at load time
    useEffect(async () => {
        // Retrieve all dogs from the server
        const loadedDogs = await loadDogs();
        // Update the dogs array with loaded dogs from server
        setDogs([...loadedDogs]);
    }, []);

    // Create the list of dogs to display
    const dogDisplay = dogs.map(
        (dog, id) => <li key={id} className="list-group-item">{dog}</li>
    );

    // Generate the display
    return (
        <ul className="list-group">
            {dogDisplay}
        </ul>
    )
}

export default DogList;
