// Wait for DOM to fully load before running script
document.addEventListener('DOMContentLoaded', function() {
    // Get references to HTML elements
    const dynamicText = document.getElementById('dynamic-text');
    const changeTextBtn = document.getElementById('change-text-btn');
    const toggleStyleBtn = document.getElementById('toggle-style-btn');
    const toggleElementBtn = document.getElementById('toggle-element-btn');
    const hiddenElement = document.getElementById('hidden-element');
    const mainHeading = document.getElementById('main-heading');
    
    // Array of texts to cycle through
    const textOptions = [
        "This text will change when you click the button below.",
        "You clicked the button! The text has changed.",
        "Click again for another message!",
        "JavaScript makes web pages interactive.",
        "Dynamic content makes websites engaging."
    ];
    
    // Keep track of current text index
    let currentTextIndex = 0;
    
    // Function to change text content
    function changeText() {
        currentTextIndex = (currentTextIndex + 1) % textOptions.length;
        dynamicText.textContent = textOptions[currentTextIndex];
        
        // Also update the heading to demonstrate another dynamic change
        mainHeading.textContent = `Interactive Web Page - Text #${currentTextIndex + 1}`;
    }
    
    // Function to toggle highlight style
    function toggleStyle() {
        dynamicText.classList.toggle('highlight');
        
        // Change button text based on current state
        if (dynamicText.classList.contains('highlight')) {
            toggleStyleBtn.textContent = 'Remove Highlight';
        } else {
            toggleStyleBtn.textContent = 'Add Highlight';
        }
    }
    
    // Function to toggle visibility of an element
    function toggleElement() {
        hiddenElement.classList.toggle('hidden');
        
        // Change button text based on current state
        if (hiddenElement.classList.contains('hidden')) {
            toggleElementBtn.textContent = 'Show Element';
        } else {
            toggleElementBtn.textContent = 'Hide Element';
        }
    }
    
    // Initial setup for button text
    toggleElementBtn.textContent = 'Show Element';
    
    // Add event listeners to buttons
    changeTextBtn.addEventListener('click', changeText);
    toggleStyleBtn.addEventListener('click', toggleStyle);
    toggleElementBtn.addEventListener('click', toggleElement);
    
    // Add a welcome message to console
    console.log('JavaScript loaded successfully!');
});