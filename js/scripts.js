document.addEventListener("DOMContentLoaded", function() {
    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 80 },
            "size": { "value": 3 },
            "move": { "speed": 2 }
        }
    });
  
    console.log("🔥 Particles.js funcionando correctamente.");
  });
  
  
  
  
  document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío tradicional
  
    // Captura los datos ingresados
    let nombre = document.getElementById("nombre").value;
    let telefono = document.getElementById("telefono").value;
    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("mensaje").value;
  
    // Número de WhatsApp (cambiar por el número real)
    let numeroWhatsApp = "+573117947704"; 
  
    // Mensaje preformateado para WhatsApp
    let mensajeWhatsApp = `Hola, soy ${nombre}. 
  📞 Teléfono: ${telefono} 
  📧 Email: ${email} 
  💬 Mensaje: ${mensaje} 
  Quisiera más información sobre sus servicios.`;
  
    // Crear el enlace de WhatsApp
    let url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensajeWhatsApp)}`;
  
    // Abrir WhatsApp en una nueva pestaña
    window.open(url, "_blank");
  
    // Limpiar el formulario después de enviarlo
    document.getElementById("contact-form").reset();
  });
  
  
  ////////////////////////////////////////////////////////////////
  
  //JavaScript con Temporizador Persistente/////
  
      document.addEventListener("DOMContentLoaded", function() {
          var modal = document.getElementById("modalOferta");
          var closeBtn = document.querySelector(".close");
  
          // Mostrar modal después de 2 segundos
          setTimeout(function() {
              modal.style.display = "block";
          }, 2000);
  
          // Cerrar el modal al hacer clic en la "X"
          closeBtn.addEventListener("click", function() {
              modal.style.display = "none";
          });
  
          // Cerrar el modal si el usuario hace clic fuera del contenido
          window.onclick = function(event) {
              if (event.target == modal) {
                  modal.style.display = "none";
              }
          };
  
          // Configurar la cuenta regresiva
          var contador = document.getElementById("contador");
          var tiempoInicial = 24 * 60 * 60; // 24 horas en segundos
          var ahora = Math.floor(Date.now() / 1000); // Obtener el tiempo actual en segundos
  
          // Verificar si ya existe un tiempo guardado en LocalStorage
          var tiempoGuardado = localStorage.getItem("ofertaTiempo");
  
          if (!tiempoGuardado) {
              // Si no hay un tiempo guardado, establecer el tiempo de expiración en 24 horas desde ahora
              localStorage.setItem("ofertaTiempo", ahora + tiempoInicial);
              tiempoGuardado = ahora + tiempoInicial;
          }
  
          function actualizarContador() {
              var ahora = Math.floor(Date.now() / 1000);
              var tiempoRestante = tiempoGuardado - ahora;
  
              if (tiempoRestante <= 0) {
                  clearInterval(intervalo);
                  contador.innerHTML = "Oferta Expirada";
                  localStorage.removeItem("ofertaTiempo");
                  return;
              }
  
              var horas = Math.floor(tiempoRestante / 3600);
              var minutos = Math.floor((tiempoRestante % 3600) / 60);
              var segundos = tiempoRestante % 60;
  
              contador.innerHTML = horas + "h " + minutos + "m " + segundos + "s";
          }
  
          var intervalo = setInterval(actualizarContador, 1000);
          actualizarContador();
      });
  
      ////////////////////////////////////////////////////////////////////
  
  
      function abrirModal() {
        document.getElementById("modalPersonalizado").style.display = "block";
    }
    
    function cerrarModal() {
        document.getElementById("modalPersonalizado").style.display = "none";
    }
  //////////////////////////////////////////////////
  // Lista de servicios con sus precios
const opcionesPorPlan = {
    "Básico": [
        { nombre: "Gestión de Redes Sociales", precio: 50 },
        { nombre: "Publicidad en Facebook & Instagram", precio: 100 },
        { nombre: "Automatización de WhatsApp", precio: 80 }
    ],
    "Avanzado": [
        { nombre: "Gestión de Redes Sociales", precio: 80 },
        { nombre: "Publicidad en Facebook & Instagram", precio: 150 },
        { nombre: "Diseño de Páginas Web", precio: 200 },
        { nombre: "Automatización de WhatsApp", precio: 100 }
    ],
    "Premium": [
        { nombre: "Gestión de Redes Sociales", precio: 120 },
        { nombre: "Publicidad en Facebook & Instagram", precio: 200 },
        { nombre: "Diseño de Páginas Web", precio: 250 },
        { nombre: "Automatización de WhatsApp", precio: 120 },
        { nombre: "Email Marketing", precio: 140 }
    ],
    "Élite": [
        { nombre: "Gestión de Redes Sociales", precio: 150 },
        { nombre: "Publicidad en Facebook & Instagram", precio: 250 },
        { nombre: "Diseño de Páginas Web", precio: 300 },
        { nombre: "Automatización de WhatsApp", precio: 150 },
        { nombre: "Email Marketing", precio: 180 }
    ]
};

// Abrir y cerrar modal
function abrirModal() {
    document.getElementById("modalPersonalizado").style.display = "flex";
}

function cerrarModal() {
    document.getElementById("modalPersonalizado").style.display = "none";
}

// Event Listeners
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modalPersonalizado");
    const btnsAbrir = document.querySelectorAll(".personalizado-btn");
    const btnCerrar = document.querySelector(".close-personalizado");
    const form = document.getElementById("formPersonalizado");

    // Abrir modal al hacer clic en un botón de plan
    btnsAbrir.forEach(btn => {
        btn.addEventListener("click", function () {
            let planSeleccionado = this.getAttribute("data-plan");
            document.getElementById("nombrePlan").textContent = planSeleccionado;

            let opcionesServicios = document.getElementById("opcionesServicios");
            opcionesServicios.innerHTML = ""; // Limpiar opciones previas

            if (opcionesPorPlan[planSeleccionado]) {
                opcionesPorPlan[planSeleccionado].forEach((servicio) => {
                    let label = document.createElement("label");
                    label.classList.add("opcion-servicio");
                    label.innerHTML = `
                        <input type="checkbox" name="servicio" value="${servicio.nombre}" data-precio="${servicio.precio}"> 
                        ${servicio.nombre} - $${servicio.precio} USD
                    `;
                    opcionesServicios.appendChild(label);
                    opcionesServicios.appendChild(document.createElement("br"));
                });
            }

            modal.style.display = "flex";
        });
    });

    // Cerrar modal
    btnCerrar.addEventListener("click", cerrarModal);
    window.addEventListener("click", function (event) {
        if (event.target === modal) cerrarModal();
    });

    // Calcular precio total dinámicamente
    document.getElementById("opcionesServicios").addEventListener("change", function () {
        let total = 0;
        document.querySelectorAll("#opcionesServicios input[name='servicio']:checked").forEach(checkbox => {
            total += parseInt(checkbox.getAttribute("data-precio"));
        });
        document.getElementById("precioTotal").textContent = `$${total} USD`;
    });

    // Enviar solicitud por WhatsApp y limpiar selección
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let serviciosSeleccionados = [];
        let total = 0;

        document.querySelectorAll("#opcionesServicios input[name='servicio']:checked").forEach(checkbox => {
            serviciosSeleccionados.push(checkbox.value);
            total += parseInt(checkbox.getAttribute("data-precio"));
        });

        if (serviciosSeleccionados.length === 0) {
            alert("Por favor, selecciona al menos un servicio.");
            return;
        }

        let mensaje = `Hola, quiero solicitar un plan personalizado con los siguientes servicios:\n\n- ${serviciosSeleccionados.join("\n- ")}\n\nTotal estimado: $${total} USD.`;
        window.open(`https://wa.me/573117947704?text=${encodeURIComponent(mensaje)}`, "_blank");

        // Limpiar selección y cerrar modal
        form.reset();
        document.getElementById("precioTotal").textContent = "$0 USD";
        cerrarModal();
    });
});

