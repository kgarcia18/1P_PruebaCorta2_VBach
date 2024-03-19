let root = document.querySelector("#root");
divs_root = `
    <div class="cronometro"></div>
    <input type="text" class="input">
    <button class="boton">iniciar</button>
`;

root.innerHTML = divs_root;







let div_cronometro = document.querySelector(".cronometro");
let tiempo;


function iniciar_cronometro(minutos,segundos){
    div_cronometro.innerHTML = `${minutos}:${segundos}`;

    function actualizar(){
        if(segundos==1 & minutos == 0){
            clearInterval(tiempo);
        }
        segundos--;

        if(segundos==0){
            if(minutos>=1){
                segundos = 60
                minutos--;
            }
        }

        div_cronometro.innerHTML = "";

        if(segundos<10){
            div_cronometro.innerHTML = `${minutos}:0${segundos}`;
        }else{
            div_cronometro.innerHTML = `0${minutos}:${segundos}`;
        }

    }

    tiempo = setInterval(actualizar, 1000);
}

iniciar_cronometro(10, 10);






