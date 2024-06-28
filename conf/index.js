const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('SABIA QUE DIRIAS SI MI REINA HERMOSA')
    alert('ME HACES LA PERSONA MAS FELIZ')
    alert('QUIERO QUE ESTA VEZ SALGA TODO MUY BIEN')
    alert('SEAMOS FELICES LOS DOS')
    alert('ME FACINAS DEMACIADO')
    alert('TE AMOOO LO SUFICIENTE PARA PONERME HACER ESTO')
    alert('Kamila Shirley Hernandez Chila, QUIERO SER FELIZ CONTIGO HASTA DONDE TU ME PERMITAS')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})