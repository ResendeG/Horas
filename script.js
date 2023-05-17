function carregar() {
    var msg = document.getElementById('msg')
    var bg = document.getElementById('fundo')
    var data = new Date()
    var hora =  data.getHours()
    
    if (hora >= 6 && hora < 12) {
        msg.innerHTML = `Bom dia`
        bg.style.backgroundImage = 'url(img/dia.jpg)'
        document.body.style.background = 'var(--manha)'
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML = `Boa tarde`
        bg.style.backgroundImage = 'url(img/tarde.jpg)'    
        document.body.style.background = 'var(--tarde)'
    } else if (hora >= 18 && hora < 24) {
        msg.innerHTML = `Boa noite`
        bg.style.backgroundImage = 'url(img/noite.jpg)'    
        document.body.style.background = 'var(--noite)'
    } else if (hora >=0 && hora < 6) {
        msg.innerHTML = `Boa noite`
        bg.style.backgroundImage = 'url(img/noite.jpg)'    
        document.body.style.background = 'var(--madrugada)'
    }
}

var horas = document.getElementById('horas');
var minutos = document.getElementById('minutos');
var segundos = document.getElementById('segundos');

var relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (s < 10) s = '0' + s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
})