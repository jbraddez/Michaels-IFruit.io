const downarrow = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>`;
const uparrow = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg>`;

const sortdirel = document.getElementById('sortdir');
let sortdir = 'none';
let carsData = []; 

fetch('/internet/lm-cars/lm-cars.json')
    .then(response => response.json())
    .then(data => {
        carsData = data;
        displayCars(); 
    })
    .catch(error => console.error('Error loading car data:', error));

    function displayCars() {
    const carsContainer = document.querySelector('.cars');
    carsContainer.innerHTML = ''; 

    carsData.forEach(car => {
        const carElement = document.createElement('div');
        carElement.classList.add('car');
        carElement.classList.add('clickable');
        
        carElement.setAttribute('data-name', car.model.replace(car.brand, '').trim());
        carElement.setAttribute('data-stats', JSON.stringify(car.statistics));        
        carElement.setAttribute('data-price', `$${car.price.toLocaleString()}`);
        carElement.setAttribute('data-desc', car.description || "Description currently unavailable");
        carElement.setAttribute('data-img', `/internet/lm-cars/${car.id}_details.png`);
        carElement.setAttribute('data-logo', `/internet/lm-cars/brands/${car.brand}.png`);
        carElement.setAttribute('data-id', car.id);
        
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
   loadDetailScript();
}

function toggleSortDirection() {
    if (sortdir === 'none' || sortdir === 'up') {
        sortdir = 'down';
        sortdirel.innerHTML = downarrow;
        carsData.sort((a, b) => b.price - a.price); 
    } else {
        sortdir = 'up';
        sortdirel.innerHTML = uparrow;
        carsData.sort((a, b) => a.price - b.price); 
    }

    displayCars(); 
}


//open details 
const carDetails = document.getElementById("cardetails");
const detailName = document.getElementById("detail-name");
const detailPrice = document.getElementById("detail-price");
const detailDesc = document.getElementById("detail-desc");
const detailImg = document.getElementById("detail-img");
const detailLogo = document.getElementById("detail-logo");
const detailStats = document.querySelector(".stats");
const urltochange = document.getElementById('url-box');

const speed = document.getElementById("speed");
const acceleration = document.getElementById("acceleration");
const braking = document.getElementById("braking");
const handling = document.getElementById("traction");
let backHome = false;


function loadDetailScript(){
const carElements = document.querySelectorAll(".car");
carElements.forEach(car => {
        car.addEventListener("click", ()=>{
            backHome = true;
            const name = car.getAttribute("data-name");
            const price = car.getAttribute("data-price");
            const desc = car.getAttribute("data-desc");
            const img = car.getAttribute("data-img");
            const logo = car.getAttribute("data-logo");
            const id = car.getAttribute("data-id");
            const stats = JSON.parse(car.getAttribute('data-stats'));

            speed.style.width = stats.speed + "%";
            acceleration.style.width = stats.acceleration + "%";
            braking.style.width = stats.braking + "%";
            handling.style.width = stats.handling + "%";
            
            detailName.textContent = name;
            detailPrice.textContent = price;
            detailDesc.textContent = desc;
            detailImg.src = img;
            detailLogo.src = logo;
            urltochange.placeholder = `www.legendarymotorsport.net/car-detail${id}`

            window.scrollTo(0, 0);
            carDetails.style.display = "block";
        });
    });
}