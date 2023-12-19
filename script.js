// Evento de clic en el botón "decir"
document.getElementById("hablar").addEventListener("click", () => {
    decir(document.getElementById("texto").value);
});

// Función para realizar la síntesis de voz
function decir(texto) {
    // Crear un objeto de síntesis de voz y establecer el texto a hablar
    const utterance = new SpeechSynthesisUtterance(texto);
    
    // Realizar la síntesis de voz
    speechSynthesis.speak(utterance);
    
    // Ajustar el tono y la voz (nota: esta parte del código no funciona correctamente)
    texto.pitch = 2;
    texto.voices[7];
}
