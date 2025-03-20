//get day
const dayEl = document.getElementById("day");
function getDay(){
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const today = new Date();
    const dayName = days[today.getDay()];
    dayEl.textContent = dayName;
}
getDay();

//get weather
async function getWeather() {
    try {
        const response = await fetch("https://wttr.in/?format=%C"); 
        const weatherCondition = await response.text();
        updateImage(weatherCondition.trim().toLowerCase());
    } catch (error) {
        console.error("Error fetching weather:", error);
    }
}

function updateImage(condition) {
    const img = document.getElementById("weatherImage");
    
    const weatherImages = {
        "clear": "clear.png",
        "cloudy": "cloudy.png",
        "rain": "rain.png",
        "snow": "snow.png"
    };

    img.src = weatherImages[condition] ? "/weather/" + weatherImages[condition] : "/weather/clear.png";
}

getWeather();

//show article
var backURL = "";
const urlbox = document.getElementById('url-box');
function showArticle(){
    const news = document.querySelector('.news');
    const readfullarticle = document.getElementById('readfullarticle');
    const news_title = document.getElementById('newsstoryoftheday');
    const wotm = document.querySelector('.wotm');
    const featured_sites = document.querySelector('.featured-sites')

    news.classList.add('fullopen');
    urlbox.placeholder = 'www.eyefind.info/news';
    readfullarticle.style.display = 'none';
    featured_sites.style.display = 'none';
    wotm.style.display = 'none';
    news_title.style.display = 'none';
    backURL = "/apps/internet.html";
    document.querySelector('.backbtn').classList.add('active');
}




//stories loading
async function loadRandomStory() {
    try {
        const response = await fetch('/internet/stories.json');
        const stories = await response.json();

        if (stories.length > 0) {
            const randomIndex = Math.floor(Math.random() * stories.length);
            const story = stories[randomIndex];

            document.querySelector('#opennews img').src = story.image;
            document.querySelector('#homestoryname').textContent = story.title;
            document.querySelector('#homestory').innerHTML = `${story.writer} <span class="newline">${story.story}</span>`;
        }
    } catch (error) {
        console.error("Error loading stories:", error);
    }
}
loadRandomStory();


//sponsored ad
// -- - -- - -- -- -- --- -- -- -- - --  NEED TO ADD LINK ONCLICK WHEN PAGES MADE
const ads = [['/legendary-motorsport.jpg', 'Legendary Motorsport'],
['/elitastravel.png', 'Elitas Travel'],
['/docktease.png', 'Dock Tease']]
function loadAd(){
    const adImage = document.getElementById('ad-img');

    const randomIndex = Math.floor(Math.random() * ads.length);
    const ad = ads[randomIndex];
    adImage.src = "/internet" + ad[0];
    adImage.alt = ad[1];
}

loadAd();


