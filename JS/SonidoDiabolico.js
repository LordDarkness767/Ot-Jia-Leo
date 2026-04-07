const boton = document.querySelector('.JS_boton');
const audio = document.getElementById('MiSonido');

boton.addEventListener('click', () => {
    audio.play();
    console.log("Reproduciendo...")
});