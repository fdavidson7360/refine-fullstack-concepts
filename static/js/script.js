// let welcomeMessage = document.getElementById('welcome');

// fetch('/about')
//     .then(response => response.json())
//     .then(data => {
//         welcomeMessage.textContent = data.message;
//         console.log('Welcome message fetched successfully:', data.message);
//     })
//     .catch(error => {
//         console.error('Error fetching welcome message:', error);
//     });

const welcomeMessage = document.getElementById('welcome');

const  data = window.AppContext.name;
welcomeMessage.textContent = data;

const clicker = document.getElementById('clickButton');

clicker.addEventListener('click', () => {
   const someData = document.getElementById('output');
   someData.textContent = "I clicked a button!";

   const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    
    // Clear or draw your object (e.g., a blue rectangle)
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#3498db';
    ctx.fillRect(50, 50, 150, 100); // Draws a rectangle
});
