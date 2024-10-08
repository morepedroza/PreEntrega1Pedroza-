
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
let adivinado = false;


function adivinaNumero() {
    while (!adivinado) {
   
        const input = prompt("Adivina el número entre 1 y 100:");
        const numeroUsuario = parseInt(input, 10);

     
        if (isNaN(numeroUsuario)) {
            console.log("Por favor, ingresa un número válido.");
            continue; 
        }

        intentos++;

    
        if (numeroUsuario < 1 || numeroUsuario > 100) {
            console.log("El número debe estar entre 1 y 100. Intenta nuevamente.");
        } else if (numeroUsuario < numeroSecreto) {
            console.log("Demasiado bajo. Intenta otra vez.");
        } else if (numeroUsuario > numeroSecreto) {
            console.log("Demasiado alto. Intenta otra vez.");
        } else {
            console.log(`¡Felicidades! Adivinaste el número ${numeroSecreto} en ${intentos} intentos.`);
            adivinado = true;
        }
    }
}


adivinaNumero();
