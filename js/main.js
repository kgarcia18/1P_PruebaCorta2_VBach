let root = document.querySelector("#root");
root.innerHTML = `
    <div class="cronometro">00:00</div>
    <div>
        <input type="text" class="input1" placeholder="minutos">
        <input type="text" class="input2" placeholder="segundos">
    </div>
    <div class="boton">Iniciar</div>
`;
let cronometro = document.querySelector(".cronometro");
let boton = document.querySelector(".boton");
let tiempo; // Variable para almacenar el intervalo del cronómetro

boton.addEventListener("click", () => {
    let minutos = parseInt(document.querySelector(".input1").value);
    let segundos = parseInt(document.querySelector(".input2").value);

    detener_cronometro();// Detener el cronómetro actual si está en marcha

    iniciar_cronometro(minutos, segundos); // Iniciar el nuevo cronómetro
});

function detener_cronometro() {
    clearInterval(tiempo);
}

function iniciar_cronometro(minutos, segundos) {
    function actualizar() {
        if (segundos <= 0 && minutos <= 0) {
            clearInterval(tiempo);
            cronometro.innerHTML = `00:00`;
            return; // Terminar la ejecución de la función actualizar
        }

        if (segundos <= 0) { // Actualizar segundos y minutos
            segundos = 59;
            minutos--;
        } else {
            segundos--;
        }

        // Actualizar la visualización del cronómetro con la condición
        if (minutos < 10 && segundos < 10) {
            cronometro.innerHTML = '0' + minutos + ":0" + segundos;
        } else if (minutos < 10) {
            cronometro.innerHTML = '0' + minutos + ":" + segundos;
        } else if (segundos < 10) {
            cronometro.innerHTML = minutos + ":0" + segundos;
        } else {
            cronometro.innerHTML = minutos + ":" + segundos;
        }
    }

    actualizar();
    tiempo = setInterval(actualizar, 1000);    // Iniciar el intervalo para actualizar el cronómetro cada segundo
}