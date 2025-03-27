const downarrow = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>`;
const uparrow = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg>`;

const sortdirel = document.getElementById('sortdir');
let sortdir = 'none';

function toggleSortDirection() {
    const row1 = document.querySelector('.row1');
    const row2 = document.querySelector('.row2');
    let bikes = Array.from(document.querySelectorAll('.bike'));

    bikes.sort((a, b) => {
        const priceA = parseInt(a.querySelector('.price').textContent.replace(/\D/g, ''));
        const priceB = parseInt(b.querySelector('.price').textContent.replace(/\D/g, ''));
        return sortdir === 'down' ? priceB - priceA : priceA - priceB;
    });

    sortdir = sortdir === 'none' || sortdir === 'up' ? 'down' : 'up';
    sortdirel.innerHTML = sortdir === 'down' ? uparrow : downarrow;

    row1.innerHTML = '';
    row2.innerHTML = '';
    bikes.slice(0, 3).forEach((bike) => row1.appendChild(bike));
    bikes.slice(3).forEach((bike) => row2.appendChild(bike));
}




const banner = document.querySelector('.banner');
const detailbanner = document.querySelector('.detailbanner');
const detailcont = document.querySelector('.detailcont');
const urlbox = document.getElementById('url-box');
function openBike(event) {
    backHome = true;
    const bike = event.currentTarget; 
    const name = bike.querySelector('.name').textContent.trim();
    const price = bike.querySelector('.price').textContent.trim();
    const shortName = bike.querySelector('.bikeimgcont').id;
    const imgSrc = `/internet/bikes/${shortName}.png`;
    const urlID = bike.dataset.urlid;
    const changeURL = `www.pandmcycles.com/bike-details${urlID}`;
    urlbox.placeholder = changeURL;
    const descriptions = {
        "bmx": "The classic bike for tooling the neighborhood or doing a double peg grind. Reinforced steel, super comfortable seat that won't cut off the circulation to your scrotum too bad. (i.e., for wimps!)\nA great deal for the cash-strapped.",
        "scorcher": "San Andreas is full of some epic places to take this off-road beast. Comes with a mud flap so your back doesn't look like you've had a train run on you by lumberjacks.\nHigh torque cranks sound really impressive if you know what it means, and also ensure it's nimble on a trail but also stable at high speed, when you are on the cusp of losing control and flying over the handlebars.",
        "whippet": "High strength carbon fiber frame, super-stable fork, alloy rims, this road bike will let people know you are serious about a sport made obsolete by combustion engines years ago.\nGet serious about working out by spending a lot of money on gear right now.",
        "cruiser": "This beach cruiser is top of the line relaxation. Made in America, which explains why you're paying 6 times the price of foreign-made beach cruisers. But when you're out for a beautiful day in the sunshine and feel like stopping by your ex-girlfriend's house to key her car, you want to look relaxed and inconspicuous.\nIt's for the guy who says \"I'm so god damn relaxed, I just don't care that I'm paying several grand for a bike that goes slowly on flat paths by the beach and doesn't even have brakes.\"",
        "tricycles": "Everyone at the triathlon will know you are serious about a sport where participants push themselves to the point of losing control of their bowels when you ride up on this beauty.\nAdjustable seat and padded grips make for an excellent afternoon in the park, hunched over on a bike you're terrified will get stolen if you stop for lunch.\nStep up. Pay up. Front up.",
        "endurex": "The Endurex is a step up from the original Whippet in that it's red which will perfectly match the bloody knees you will get from trying to maneuver a bike with wheels a half-inch wide.\nYou deserve this bike. You feel thinner already."
    };

    banner.src = '/internet/pandm-detail-banner.png';
    window.scrollTo(0, 0);

    detailbanner.style.display = 'block';
    detailcont.style.display = 'flex';

    document.getElementById('detailname').textContent = name;
    document.getElementById('detailprice').textContent = price;
    document.getElementById('detailimg').src = imgSrc;
    document.getElementById('detaildesc').textContent = descriptions[shortName] || "No description available.";

    const sortrow = document.querySelector('.sortrow');
    const bikescont = document.querySelector('.bikes');

    bikescont.classList.add('open');

    document.querySelector('.row1').style.maxWidth = '95%';
    document.querySelector('.row2').style.maxWidth = '95%';
    bikescont.prepend(sortrow);
}
