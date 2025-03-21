const downarrow = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>`;
const uparrow = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg>`;

const sortdirel = document.getElementById('sortdir');
let sortdir = 'none';
let carsData = []; // Store fetched cars

// Fetch car data
fetch('/internet/lm-cars/lm-cars.json')
    .then(response => response.json())
    .then(data => {
        carsData = data;
        displayCars(); // Show cars initially
    })
    .catch(error => console.error('Error loading car data:', error));

// Function to display sorted cars
function displayCars() {
    const carsContainer = document.querySelector('.cars');
    carsContainer.innerHTML = ''; // Clear previous cars

    carsData.forEach(car => {
        const carElement = document.createElement('div');
        carElement.classList.add('car');
        carElement.innerHTML = `
            <div class="cartop">
                <p class="category">${car.category.toUpperCase()}</p>
                <img src="/internet/lmseatsicon.png" alt="2 Seater">
            </div>
            <img src="/internet/lm-cars/${car.id}.png" alt="${car.model}"> 
            <div class="carbot">
                <p class="carname">${car.model.toUpperCase()}</p>
                <p class="carprice">$${car.price.toLocaleString()}</p>
            </div>
        `;
        carsContainer.appendChild(carElement);
    });
}

// Sorting function
function toggleSortDirection() {
    if (sortdir === 'none' || sortdir === 'up') {
        sortdir = 'down';
        sortdirel.innerHTML = downarrow;
        carsData.sort((a, b) => b.price - a.price); // Sort high to low
    } else {
        sortdir = 'up';
        sortdirel.innerHTML = uparrow;
        carsData.sort((a, b) => a.price - b.price); // Sort low to high
    }

    displayCars(); // Re-render sorted cars
}
