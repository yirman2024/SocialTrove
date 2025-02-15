document.addEventListener("DOMContentLoaded", function() {
    // Desplazamiento suave entre secciones
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Animaciones en botones y enlaces
    document.querySelectorAll('nav ul li a, .plan').forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.transform = 'scale(1.05)';
            element.style.transition = 'transform 0.3s ease';
        });
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'scale(1)';
        });
    });

    // Efecto de aparición con fade-in
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });

    // Modal emergente para contacto
    const modal = document.createElement('div');
    modal.innerHTML = `
        <div id="modal" class="modal">
            <div class="modal-content">
                <span class="close">&times;</span>
                <h2>Contacto</h2>
                <p>Correo: contacto@socialtrove.com</p>
                <p>WhatsApp: +[Tu número aquí]</p>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    
    const modalElement = document.getElementById("modal");
    const closeModal = document.querySelector(".close");
    document.querySelector("#contacto h2").addEventListener("click", () => {
        modalElement.style.display = "block";
    });
    closeModal.addEventListener("click", () => {
        modalElement.style.display = "none";
    });
    window.addEventListener("click", (event) => {
        if (event.target === modalElement) {
            modalElement.style.display = "none";
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const servicios = document.querySelectorAll(".servicio");

    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.85;

        servicios.forEach(servicio => {
            const servicioTop = servicio.getBoundingClientRect().top;
            if (servicioTop < triggerBottom) {
                servicio.style.opacity = "1";
                servicio.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Ejecutar en carga inicial por si ya están visibles
});


// Efecto de aparición al hacer scroll
document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        let section = document.getElementById("beneficios");
        if (!section) return; // Verifica que la sección existe
        
        let position = section.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;
        
        if (position < screenHeight * 0.75) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
});



// Función para abrir el modal y guardar el plan elegido
function elegirPlan(plan) {
    document.getElementById("modal").style.display = "flex";

    // Cambiar el enlace de WhatsApp con el plan elegido
    let whatsappLink = `https://wa.me/573117947704?text=Hola,%20quiero%20contratar%20el%20plan%20${plan}%20de%20SocialTrove`;
    document.getElementById("confirmar").setAttribute("onclick", `window.location.href='${whatsappLink}'`);
}

// Función para cerrar el modal
function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}

// Cerrar modal al hacer clic fuera de él
window.onclick = function(event) {
    let modal = document.getElementById("modal");
    if (event.target === modal) {
        cerrarModal();
    }
}



// Mostrar la ventana emergente cuando se carga la página
window.onload = function() {
    document.getElementById("popup").style.display = "flex";
    iniciarCuentaRegresiva();
};

// Cerrar la ventana emergente
function cerrarPopup() {
    document.getElementById("popup").style.display = "none";
}


// Función para iniciar la cuenta regresiva de 5 horas
function iniciarCuentaRegresiva() {
    let countdownElement = document.getElementById("countdown");

    // Verificamos si ya existe un tiempo de finalización guardado
    let tiempoFinal = localStorage.getItem("tiempoFinal");

    if (!tiempoFinal) {
        // Si no hay un tiempo guardado, establecemos uno nuevo (5 horas desde ahora)
        tiempoFinal = Date.now() + 5 * 60 * 60 * 1000;
        localStorage.setItem("tiempoFinal", tiempoFinal);
    }

    function actualizarCuenta() {
        let tiempoRestante = tiempoFinal - Date.now();

        if (tiempoRestante > 0) {
            let horas = Math.floor((tiempoRestante / (1000 * 60 * 60)) % 24);
            let minutos = Math.floor((tiempoRestante / (1000 * 60)) % 60);
            let segundos = Math.floor((tiempoRestante / 1000) % 60);

            countdownElement.innerHTML = `${horas}h ${minutos}m ${segundos}s`;

            setTimeout(actualizarCuenta, 1000);
        } else {
            countdownElement.innerHTML = "¡Oferta expirada!";
            localStorage.removeItem("tiempoFinal"); // Eliminamos el tiempo guardado
        }
    }

    actualizarCuenta();
}

// Iniciar la cuenta regresiva cuando cargue la página
document.addEventListener("DOMContentLoaded", iniciarCuentaRegresiva);


// Redirección a WhatsApp con la oferta especial
function aprovecharOferta() {
    let whatsappLink = `https://wa.me/573117947704?text=Hola,%20quiero%20aprovechar%20la%20oferta%20del%20Plan%20Élite%20por%20$99%20USD%20por%202%20meses`;
    window.location.href = whatsappLink;
}


// Función para redirigir a WhatsApp con mensaje predefinido
function redirectToWhatsApp() {
    window.open("https://wa.me/573117947704?text=¡Hola!%20Estoy%20interesado%20en%20sus%20servicios.%20¿Me%20pueden%20dar%20más%20información?", "_blank");
}

// Función para cargar comentarios almacenados en LocalStorage
function cargarComentarios() {
    let listaComentarios = document.getElementById("lista-comentarios");
    let comentariosGuardados = JSON.parse(localStorage.getItem("comentarios")) || [];

    listaComentarios.innerHTML = ""; // Limpiar lista antes de cargar

    comentariosGuardados.forEach(comentario => {
        let nuevoComentario = document.createElement("div");
        nuevoComentario.classList.add("comentario");
        nuevoComentario.innerHTML = `<p><strong>🔹 ${comentario.nombre}:</strong> ${comentario.mensaje}</p>`;
        listaComentarios.appendChild(nuevoComentario);
    });
}

// Función para agregar un nuevo comentario y guardarlo en LocalStorage
function agregarComentario() {
    let nombre = document.getElementById("nombre").value;
    let mensaje = document.getElementById("mensaje").value;

    if (nombre.trim() === "" || mensaje.trim() === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    let comentariosGuardados = JSON.parse(localStorage.getItem("comentarios")) || [];

    let nuevoComentario = {
        nombre: nombre,
        mensaje: mensaje
    };

    comentariosGuardados.push(nuevoComentario);
    localStorage.setItem("comentarios", JSON.stringify(comentariosGuardados));

    // Actualizar la lista de comentarios en la página
    cargarComentarios();

    // Limpiar los campos después de enviar
    document.getElementById("nombre").value = "";
    document.getElementById("mensaje").value = "";
}

// Cargar comentarios al iniciar la página
window.onload = cargarComentarios;
