// Este es el archivo JavaScript para la página.

document.addEventListener('DOMContentLoaded', () => {
    // Obtenemos el botón y el párrafo del DOM
    const miBoton = document.getElementById('miBoton');
    const mensaje = document.getElementById('mensaje');

    // Agregamos un "event listener" al botón para cuando se haga clic
    miBoton.addEventListener('click', () => {
        // Cambiamos el texto del párrafo
        mensaje.textContent = '¡Gracias por hacer clic en el botón!';
        
        // También podemos cambiar el color del texto
        mensaje.classList.remove('text-gray-700');
        mensaje.classList.add('text-green-600');
    });
});
