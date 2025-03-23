const allSites = [
    ['lifeinvader.png','www.lifeinvader.com','The reason the world never gets anything done any more.','lifeinvader.html'],
    ['classic_vinewood.png','www.classicvinewood.com','Sequels, remakes, romantic comedy sequels, superheroes, CGI nonsense and one-dimensional androgynous vampires.','classicvinewood.html'],
    ['fameorshame.png','www.fameorshame.net','The talent show America deserves.','fameorshame.html'],
    ['lazerforce.png','www.kungfurainbowlazerforce.com','Hey Kung Fu Rainbow Lazer Force Fans! On our official website you can learn more about the show, the characters, and how you can spread the word!','kungfulazerforce.html'],
    ['princessrobotbubblegum.png','www.princessrobotbubblegum.com','The #3 hit show in Japan is back!','princessrobotbubblegum.html'],
    ['republicanspacerangers.png','www.republicanspacerangers.com','Finally America has some heroes who know there are bigger issues than fretting about baby seals or endangered lizards or so called alobal warming.','republican-space-rangers.html'],
    ['righteousslaughter7.png','www.righteousslaughter7.com','Misfire Games presents Righteous Slaughter 7: The Art of Contemporary Killing.','righteous-slaughter7.html'],
    ['lossantosfreegans.png','www.lossantosfreegans.com','Americans throw out 500 billion tons of edible food each day. We plan on eating it!','lossantos-freegans.html'],
    ['egochaser.png','www.egochaserenergybar.com',"Backed by literally weeks of top level research into sports nutrition, the EgoChaser is more than just a candy bar with some protein powder thrown in. It's perfectly evolved, just like you.",'egochaser.html'],
    ['tacobomb.png','www.taco-bomb.com','Taco Bomb is Mexican food done right, the American way. One set of four basic ingredients offered in a hundred different formats, smothered in cheese.','taco-bomb.html'],
    ['grainoftruth.png','www.grainoftruth.net','Your grocery store defines what kind of person you are. Join the organic elite at The Grain of Truth and shop with superiority. Food has never been this self-satisfying.','grainoftruth.html'],
    ['lcn.png', 'www.lcn-exchange.com', 'The Liberty City exchange index.', 'lcn-exchange.html'],
    ['bawsaq.png', 'www.bawsaq.com', "Dealing in life's ups and downs.", 'bawsaq.html'],
    ['dynasty8.png', 'www.dynasty8realestate.com', 'The leading realtor in Los Santos and Blaine County.', 'dynasty8.html'],
    ['mazebank.png', 'www.maze-bank.com', "Invest in the red. It's in your interest.", 'maze-bank.html'],
    ['fleecabank.png', 'www.fleeca.com', 'We can help you with your money.', 'fleeca.html'],
    ['bolc.png', 'www.thebankofliberty.com', 'The bank of Liberty City.', 'bankofliberty.html'],
    ['elitastravel.png', 'www.elitastravel.com', 'Browse our current inventory of new and pre-owned aircraft. Helicopters or planes, we have everything.', 'elitastravel.html'],
    ['legendary_motorsport.png', 'www.legendarymotorsport.net', 'We sell exotic, ostentatious, high-performance vehicles to exotic, ostentatious, high-performance people.', 'legendary-motorsport.html'],
    ['warstock.png', 'www.warstock-cache-and-carry.com', "Our user-friendly online store combined with our 'deliver-anywhere' service has made us the number one armored vehicle dealer in the Los Santos area.", 'warstock.html'],
    ['docktease.png','www.docktease.com','Buy a boat today!','docktease.html'],
    ['pedalandmetal.png','www.pandmcycles.com','The premium store for cycling in San Andreas.','pedalandmetal.html'],
    ['southernsanandreas.png','www.southernsanandreassuperautos.com','Sammy Keller and the entire staff at Southern San Andreas Super Autos are here to meet your vehicular needs.','southern-san-andreas.html'],
    ['swallow.png','www.swallowco.com','A look that says... You are forever 16.','swallowco.html'],
    ['universaluniform.png','www.universaluniform.net','We are a clothing company that is uniquely American - we sexily advertise bland t-shirts by putting them on half dizzy sluts still woozy from a night of pounding.','universal-uniform.html'],
    ['toeshoesusa.png','www.toeshoesusa.com',"Toe Shoes. Modern on the outside, prehistoric on the inside. Don't judge a foot by its cover.", 'toeshoesusa.html'],
    ['preserveskincream.png','www.preservexskincream.com','The timeless beauty of formaldehyde.','preserve-skin-cream.html'],
    ['prop14.png','www.abstinentamerica.com','Imagine how fast paced and exciting a baseball game would be without beer.<span class="newline desc">Imagine how lovely a 6 hour wedding would be without wine.</span><span class="newline desc">Imagine the delights of Mexican food without Margaritas.</span>','abstinentamerica.html'],
    ['fabienlarouche.png','www.fabienlaroucheyoga.com',"Yoga unifies the mind and body while freeing you from the limitations of dignity and self-respect. It's a workout, a philosophy and a metaphor all rolled into one. It is everything. It is nothing. Be. Be nothing.",'fabien-larouche.html']
    ['himplants.png','www.himplantsenhancementsurgery.com',"Women aren't the only ones with body image and Daddy issues any more. Get the male implants you need and finally become you.",'himplants.html'],
    ['maze-bank-foreclosures.png','foreclosures.maze-bank.com','The Number 1 site for foreclosed properties.','maze-bank-foreclosures.html']
]

function SearchRandom() {
    resultseccont.innerHTML="";
    maincontent.style.display = 'none';
    resultsec.style.display = 'block';

    sessionStorage.setItem('lastpage', 'random');
    resultsfor.textContent = 'RANDOM';
    urlbox.placeholder = urlph + "/search+random";
    

    let shuffledSites = [...allSites].sort(() => 0.5 - Math.random()).slice(0, 6);

    resultseccont.innerHTML = '';

    shuffledSites.forEach(site => {
        const resultRow = document.createElement('a');
        resultRow.href = "/internet/sites/" + site[3];
        resultRow.classList.add('result-row');
        resultRow.innerHTML = `
            <img src="${"/internet/" + site[0]}" alt="${site[1]}">
            <div class="url-desc">
                <p class="url">${site[1]}</p>
                <p class="desc">${site[2]}</p>
            </div>
        `;

        resultseccont.appendChild(resultRow);
    });
}

const featuredSites = document.querySelectorAll('.featured-site-img');

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

const shuffledSites = shuffleArray([...allSites]);

featuredSites.forEach((img, index) => {
    if (shuffledSites[index]) {
        const site = shuffledSites[index];
        img.src = "/internet/" + site[0];
        img.alt = site[1];
        img.parentElement.href = "/internet/sites/" + site[3];
    }
});


const wotmimg = document.getElementById('wotmimg');
const wotmlink = document.getElementById('wotmlink');
const wotmdesc = document.getElementById('wotmdesc');

let randomIndex = Math.floor(Math.random() * allSites.length);
const wotmsite = allSites[randomIndex];
wotmimg.src = "/internet/" + wotmsite[0];
wotmimg.alt = wotmsite[1];
wotmlink.textContent = wotmsite[1];
wotmlink.href = "/internet/sites/" + wotmsite[3];
wotmdesc.innerHTML = wotmsite[2];

wotmimg.onclick = function() {
    window.location.href = "/internet/sites/" + wotmsite[3];
};
