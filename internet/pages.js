// media and entertainment
const mae = []; 

// food and drink
const fad = []; 

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
const tat = []; 

// fashion and health
const fah = []; 

const resultsec = document.getElementById('results-sec'); 
const resultseccont = resultsec.querySelector('.content');
const resultsfor = document.getElementById('resultsfor');
const maincontent = document.querySelector('.maincontent');
const urlph = document.getElementById('url-box').placeholder;
function SearchGroup(category){
    maincontent.style.display = 'none';
    resultsec.style.display = 'block';
    if (category == 'mae'){

    }else if (category == 'fad'){

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

    } else if (category == 'fah'){

    }
}
