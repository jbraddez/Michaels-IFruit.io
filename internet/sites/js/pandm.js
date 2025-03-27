const downarrow = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>`;
const uparrow = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg>`;

const sortdirel = document.getElementById('sortdir');
let sortdir = 'none';

function toggleSortDirection() {
    const row1 = document.querySelector('.row1');
    const row2 = document.querySelector('.row2');
    let bikes = Array.from(document.querySelectorAll('.bike'));

    // Sort based on price
    bikes.sort((a, b) => {
        const priceA = parseInt(a.querySelector('.price').textContent.replace(/\D/g, ''));
        const priceB = parseInt(b.querySelector('.price').textContent.replace(/\D/g, ''));
        return sortdir === 'down' ? priceB - priceA : priceA - priceB;
    });

    // Toggle sorting direction
    sortdir = sortdir === 'none' || sortdir === 'up' ? 'down' : 'up';
    sortdirel.innerHTML = sortdir === 'down' ? downarrow : uparrow;

    // Clear and reassign sorted bikes
    row1.innerHTML = '';
    row2.innerHTML = '';
    bikes.slice(0, 3).forEach((bike) => row1.appendChild(bike));
    bikes.slice(3).forEach((bike) => row2.appendChild(bike));
}
