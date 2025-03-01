// change name
const appName = document.getElementById('appnamecont');
const gridItems = document.querySelectorAll('.grid-item');
var appTarget = "contacts";
function ChangeName(name, event){
    appName.innerText = name;
    gridItems.forEach(el => el.firstChild.classList.remove('focus'));
    const clickedItem = event.currentTarget;
    clickedItem.firstChild.classList.add('focus');
    appTarget = name.toLowerCase().replace(' ', '');
}
gridItems[4].firstChild.classList.add('focus');

//open app
const plus = document.getElementById('plus');
plus.addEventListener('click', ()=>{
    window.location.href = `/apps/${appTarget}.html`;
})

