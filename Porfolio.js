// 1. Inicialización de la librería EmailJS
emailjs.init("hZAoI7xClx4xxxTPc");//emailjs libreria. init inicia la conexion con el servidor
//lo que esta en el parentecis es al contraseña publica
// 2. Selección de elementos del DOM
const formulario = document.getElementById("form-contacto");// declara una variable de lectura
const botonEnviar = document.getElementById("btn-enviar");// declara una variable de lectura
// document representa todo el arbol del documento html en momoria(EL DOM)
//getElementById busca en el html el elemento que tenga el id que esta entre parentecis y lo guarda en la variable formulario

// 3. Escuchar el evento de envío (submit)
formulario.addEventListener("submit", function(evento) {
    //espera las acciones del usuario. submit se dispara si el formulario se intenta enviar
    // 4. Detener la recarga por defecto
    evento.preventDefault();
    //cancela la recarga de la pagina y procesa el envio del formulario

    // 5. Estado de carga en el botón
    botonEnviar.innerText = "Enviando...";//.innerText modifica el texto que hay en el boton una vez enviado el correo
    botonEnviar.disabled = true;//.disabled desactiva el boton para que el usuario no mande mas de una vez el mismo correo

    // 6. Identificadores de EmailJS
    const serviceID = "service_30bl28e";//claves
    const templateID = "template_ysjmcac";//claves

    // 7. Envío de los datos del formulario
    emailjs.sendForm(serviceID, templateID, this)//sendFrom sube todo lo que haya en los campos del formulario
        .then(function() {//se ejecuta si el correo se envio correctamente
            // 8. Manejo de éxito
            alert("¡Correo enviado con éxito!");//genera una alerta
            formulario.reset();//reincia el formulario
            botonEnviar.innerText = "Enviar Mensaje";//corrige el texto del boton
            botonEnviar.disabled = false;//activa el boton de nuevo
        })
        .catch(function(error) {//se ejecuta si el mensaje no se pudo enviar
            // 9. Manejo de errores
            alert("Hubo un error al enviar el mensaje.");
            console.error("Error EmailJS:", error);
            botonEnviar.innerText = "Enviar Mensaje";
            botonEnviar.disabled = false;
        });
});

// 1. "Atrapamos" el título usando su ID y lo guardamos en una variable
const elementoTitulo = document.getElementById('titulo-principal');
const elementoParrafo=document.getElementById('parrafo')
// 2. Guardamos el texto que queremos escribir en otra variable
const textoOriginal = "Ian Alejandro Miño";
const textoParrafo="Hola, Mi nombre es Ian, tengo 20 años y soy estudiante de Informatica. Me gusta el mundo de la tecnología en todas sus formas, desde el armado y mantenimiento de hardware hasta el desarrollo web. Actualmente me enfoco en aprender a crear sistemas funcionales y escribir código que resuelva problemas reales.";

// 3. Vaciamos el título en la pantalla para que arranque en blanco
elementoTitulo.innerHTML = "";
elementoParrafo.innerHTML="";

// 4. Creamos un contador para saber por qué letra vamos
let contador = 0;
let contadorP=0;
// 5. Creamos la función que va a escribir letra por letra
function efectoEscribir() {
    // Si el contador es menor a la cantidad de letras del texto...
    if (contador < textoOriginal.length) {
        // ...agregamos la letra que toca a la pantalla
        elementoTitulo.innerHTML += textoOriginal.charAt(contador);
        // ...y le sumamos 1 al contador para la próxima vuelta
        contador++;
        
        // Volvemos a llamar a la función después de 100 milisegundos
        setTimeout(efectoEscribir, 100);// funcion recursiva
    }
    if(contadorP <textoParrafo.length){
        elementoParrafo.innerHTML +=textoParrafo.charAt(contadorP);
        contadorP++;
        setTimeout(efectoEscribir,100);
    }
}
// 6. Damos la orden de que arranque el efecto
efectoEscribir();

// --- Lightbox: abrir certificados en grande ---

// Selecciona el modal, la imagen dentro del modal y el botón de cerrar
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCerrar = document.getElementById("lightbox-cerrar");

// Selecciona SOLO las imágenes de la sección de cursos/certificados
const imagenesCursos = document.querySelectorAll(".Cursos img");

// A cada certificado le agrego el evento de clic para abrirlo en grande
imagenesCursos.forEach(function (imagen) {
    imagen.addEventListener("click", function () {
        lightboxImg.src = imagen.src; // copia la imagen clickeada al modal
        lightboxImg.alt = imagen.alt;// copia la descripcion de la imagen clickeada
        lightbox.classList.add("activo"); // muestra el modal
    });
});

// Función para cerrar el modal
function cerrarLightbox() {
    lightbox.classList.remove("activo");
    lightboxImg.src = ""; // limpia la imagen (evita que siga cargada de fondo)
}

// Cerrar con el botón "X"
lightboxCerrar.addEventListener("click", cerrarLightbox);

// Cerrar haciendo clic en el fondo oscuro (fuera de la imagen)
lightbox.addEventListener("click", function (evento) {
    if (evento.target === lightbox) {/*se cierra si hago clic en el "div" que la contiene */
        cerrarLightbox();
    }
});

// Cerrar con la tecla Escape
document.addEventListener("keydown", function (evento) {
    if (evento.key === "Escape") {
        cerrarLightbox();
    }
});