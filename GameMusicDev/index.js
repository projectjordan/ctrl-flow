const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Random index
        [array[i], array[j]] = [array[j], array[i]];  // Swap elements
    }
    return array;
};

const shuffleAnchors = () => {
    const container = document.getElementById('image-container');
    const anchors = Array.from(container.children); // Get all child <a> elements
    const shuffledAnchors = shuffleArray(anchors);  // Shuffle the array

    container.innerHTML = ''; // Clear the container
    shuffledAnchors.forEach(anchor => container.appendChild(anchor)); // Append shuffled anchors
};

// Run the randomization when the page loads
document.addEventListener("DOMContentLoaded", shuffleAnchors);
