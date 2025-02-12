const boton=document.getElementById('edgarbebesin')
boton.addEventListener('click', function(){
    alert("Me gustas mucho edgar, te quieres casar with me?");
});
const boton2=document.getElementById('no')
boton2.addEventListener('click',() => {
    const windowWidth= window.innerWidth;
    const windowHeight= window.innerHeight;

    const newX=Math.random()*(windowWidth-boton2.offsetWidth);
    const newY=Math.random()*(windowHeight-boton2.offsetHeight);

    boton2.style.left= `${newX}px`;
    boton2.style.top=`${newY}px`;
});
const boton3=document.getElementById('si')
boton3.addEventListener('click', function(){
    alert("SIIII YO TAMBIEN QUIERO");
});