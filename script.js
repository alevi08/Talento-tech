//Seleccionar el formulario
const formulario = document.querySelector('#contacto');

if (formulario) {
    formulario.addEventListener('submit', (event) => {
        //Evita que el formulario se envíe
        event.preventDefault();

        //Obtener los valores del formulario
        const nombre = document.getElementById('nombre').value;
        const descripcion = document.getElementById('mensaje').value;
        const correo = document.getElementById('correo').value;
        const numero = document.getElementById('telefono').value;

        //Imprimir los valores en consola
        console.log('Nombre:', nombre);
        console.log('Correo:', correo);
        console.log('Celular:', numero);
        console.log('Mensaje:', descripcion);

        alert(`Hola ${nombre}, tu correo es ${correo}. Tu motivo de contacto es: "${descripcion}".`);
    });
} else {
    console.log('No se pudo encontrar el formulario con el ID #contacto');
}
