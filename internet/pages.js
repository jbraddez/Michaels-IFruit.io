// media and entertainment
const mae = []; 

// food and drink
const fad = [
    ['lossantosfreegans.png','www.lossantosfreegans.com','Americans throw out 500 billion tons of edible food each day. We plan on eating it!','lossantos-freegans.html'],
    ['egochaser.png','www.egochaserenergybar.com',"Backed by literally weeks of top level research into sports nutrition, the EgoChaser is more than just a candy bar with some protein powder thrown in. It's perfectly evolved, just like you.",'egochaser.html'],
    ['tacobomb.png','www.taco-bomb.com','Taco Bomb is Mexican food done right, the American way. One set of four basic ingredients offered in a hundred different formats, smothered in cheese.','taco-bomb.html'],
    ['grainoftruth.png','www.grainoftruth.net','Your grocery store defines what kind of person you are. Join the organic elite at The Grain of Truth and shop with superiority. Food has never been this self-satisfying.','grainoftruth.html']
]; 

// money and services
const mas = [
    ['lcn.png', 'www.lcn-exchange.com', 'The Liberty City exchange index.', 'lcn-exchange.html'],
    ['bawsaq.png', 'www.bawsaq.com', "Dealing in life's ups and downs.", 'bawsaq.html'],
    ['dynasty8.png', 'www.dynasty8realestate.com', 'The leading realtor in Los Santos and Blaine County.', 'dynasty8.html'],
    ['mazebank.png', 'www.maze-bank.com', "Invest in the red. It's in your interest.", 'mazebank.html'],
    ['fleecabank.png', 'www.fleeca.com', 'We can help you with your money.', 'fleeca.html'],
    ['bolc.png', 'www.thebankofliberty.com', 'The bank of Liberty City.', 'bankofliberty.html']
]; 

// travel and transport
const tat = [
    ['elitastravel.png', 'www.elitastravel.com', 'Browse our current inventory of new and pre-owned aircraft. Helicopters or planes, we have everything.', 'elitastravel.html'],
    ['legendary_motorsport.png', 'www.legendarymotorsport.net', 'We sell exotic, ostentatious, high-performance vehicles to exotic, ostentatious, high-performance people.', 'legendary-motorsport.html'],
    ['warstock.png', 'www.warstock-cache-and-carry.com', "Our user-friendly online store combined with our 'deliver-anywhere' service has made us the number one armored vehicle dealer in the Los Santos area.", 'warstock.html'],
    ['docktease.png','www.docktease.com','Buy a boat today!','docktease.html'],
    ['pedalandmetal.png','www.pandmcycles.com','The premium store for cycling in San Andreas.','pedalandmetal.html'],
    ['southernsanandreas.png','www.southernsanandreassuperautos.com','Sammy Keller and the entire staff at Southern San Andreas Super Autos are here to meet your vehicular needs.','southern-san-andreas.html']
]; 

// fashion and health
const fah = [
    ['swallow.png','www.swallowco.com','A look that says... You are forever 16.','swallowco.html'],
    ['universaluniform.png','www.universaluniform.net','We are a clothing company that is uniquely American - we sexily advertise bland t-shirts by putting them on half dizzy sluts still woozy from a night of pounding.','universal-uniform.html'],
    ['toeshoesusa.png','www.toeshoesusa.com',"Toe Shoes. Modern on the outside, prehistoric on the inside. Don't judge a foot by its cover.", 'toeshoesusa.html'],
    ['preserveskincream.png','www.preservexskincream.com','The timeless beauty of formaldehyde.','preserve-skin-cream.html'],
    ['prop14.png','www.abstinentamerica.com','Imagine how fast paced and exciting a baseball game would be without beer.<span class="newline desc">Imagine how lovely a 6 hour wedding would be without wine.</span><span class="newline desc">Imagine the delights of Mexican food without Margaritas.</span>','abstinentamerica.html'],
['fabienlarouche.png','www.fabienlaroucheyoga.com',"Yoga unifies the mind and body while freeing you from the limitations of dignity and self-respect. It's a workout, a philosophy and a metaphor all rolled into one. It is everything. It is nothing. Be. Be nothing.",'fabien-larouche.html']
]; 

const resultsec = document.getElementById('results-sec'); 
const resultseccont = resultsec.querySelector('.contentrows');
const resultsfor = document.getElementById('resultsfor');
const maincontent = document.querySelector('.maincontent');
const urlph = document.getElementById('url-box').placeholder;
function SearchGroup(category){
    resultseccont.innerHTML="";
    maincontent.style.display = 'none';
    resultsec.style.display = 'block';
    if (category == 'mae'){
        sessionStorage.setItem('lastpage', 'mae');
        resultsfor.textContent = 'MEDIA AND ENTERTAINMENT';
        urlbox.placeholder = urlph +  "/search+media and entertainment"
        mae.forEach(service => {
            const resultRow = document.createElement('a');
            resultRow.href = "/internet/sites/" + service[3];
            resultRow.classList.add('result-row');
            resultRow.innerHTML += `<img src="${"/internet/" + service[0]}" alt="${service[1]}">
                 <div class="url-desc">
                        <p class="url">${service[1]}</p>
                        <p class="desc">${service[2]}</p>
                    </div>
            `;
            resultseccont.appendChild(resultRow);
        });


    }else if (category == 'fad'){
        sessionStorage.setItem('lastpage', 'fad');
        resultsfor.textContent = 'FOOD AND DRINK';
        urlbox.placeholder = urlph +  "/search+food and drink"
        fad.forEach(service => {
            const resultRow = document.createElement('a');
            resultRow.href = "/internet/sites/" + service[3];
            resultRow.classList.add('result-row');
            resultRow.innerHTML += `<img src="${"/internet/" + service[0]}" alt="${service[1]}">
                 <div class="url-desc">
                        <p class="url">${service[1]}</p>
                        <p class="desc">${service[2]}</p>
                    </div>
            `;
            resultseccont.appendChild(resultRow);
        });


    } else if (category == 'mas'){
        sessionStorage.setItem('lastpage', 'mas');
        resultsfor.textContent = 'MONEY AND SERVICES';
        urlbox.placeholder = urlph +  "/search+money and services"
        mas.forEach(service => {
            const resultRow = document.createElement('a');
            resultRow.href = "/internet/sites/" + service[3];
            resultRow.classList.add('result-row');
            resultRow.innerHTML += `<img src="${"/internet/" + service[0]}" alt="${service[1]}">
                 <div class="url-desc">
                        <p class="url">${service[1]}</p>
                        <p class="desc">${service[2]}</p>
                    </div>
            `;
            resultseccont.appendChild(resultRow);
        });

    } else if (category == 'tat'){
        sessionStorage.setItem('lastpage', 'tat');
        resultsfor.textContent = 'TRAVEL AND TRANSPORT';
        urlbox.placeholder = urlph +  "/search+travel and transport"
        tat.forEach(service => {
            const resultRow = document.createElement('a');
            resultRow.href = "/internet/sites/" + service[3];
            resultRow.classList.add('result-row');
            resultRow.innerHTML += `<img src="${"/internet/" + service[0]}" alt="${service[1]}">
                 <div class="url-desc">
                        <p class="url">${service[1]}</p>
                        <p class="desc">${service[2]}</p>
                    </div>
            `;
            resultseccont.appendChild(resultRow);
        });


    } else if (category == 'fah'){
        sessionStorage.setItem('lastpage', 'fah');
        resultsfor.textContent = 'FASHION AND HEALTH';
        urlbox.placeholder = urlph +  "/search+fashion and health"
        fah.forEach(service => {
            const resultRow = document.createElement('a');
            resultRow.href = "/internet/sites/" + service[3];
            resultRow.classList.add('result-row');
            resultRow.innerHTML += `<img src="${"/internet/" + service[0]}" alt="${service[1]}">
                 <div class="url-desc">
                        <p class="url">${service[1]}</p>
                        <p class="desc">${service[2]}</p>
                    </div>
            `;
            resultseccont.appendChild(resultRow);
        });


    }
}


const homebtn = document.querySelector('.home');
homebtn.addEventListener('click', () => {
    sessionStorage.setItem('lastpage','home');
});