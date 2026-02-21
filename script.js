// Select the button using its class
let btn = document.querySelector(".generate-btn");

// Add click event to generate random color
btn.addEventListener("click", function() {
    // Select the heading to display color text
    let h3 = document.querySelector(".color-name");
    
    // Select the div that will change background color
    let div = document.querySelector(".color-box");

    // Generate random color using function
    let randomColor = getRandomColor();

    // Update heading text with the generated color
    h3.innerText = randomColor;

    // Change the div's background color
    div.style.backgroundColor = randomColor;

    // Log to console for debugging
    console.log("Color updated:", randomColor);
});

// Function to generate random RGB color
function getRandomColor() {
    let red = Math.floor(Math.random() * 256); // 0-255
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}