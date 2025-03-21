fwdbtn.addEventListener('click', () => {
    history.forward();
});


document.querySelector('.home').addEventListener('click', () => {
    sessionStorage.setItem('lastpage', 'home');
    window.location.href = "/apps/internet.html";
});