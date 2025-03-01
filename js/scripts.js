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
  let numeroWhatsApp = "123456789"; 

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

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modalPersonalizado");
  const btnsAbrir = document.querySelectorAll(".personalizado-btn");
  const btnCerrar = document.querySelector(".close-personalizado");
  const form = document.getElementById("formPersonalizado");

  btnsAbrir.forEach(btn => {
      btn.addEventListener("click", function () {
          modal.style.display = "flex";
      });
  });

  btnCerrar.addEventListener("click", function () {
      modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
      if (event.target === modal) {
          modal.style.display = "none";
      }
  });

  form.addEventListener("submit", function (event) {
      event.preventDefault();

      let serviciosSeleccionados = [];
      document.querySelectorAll("input[name='servicio']:checked").forEach(checkbox => {
          serviciosSeleccionados.push(checkbox.value);
      });

      if (serviciosSeleccionados.length === 0) {
          alert("Por favor, selecciona al menos un servicio.");
          return;
      }

      const mensaje = encodeURIComponent(
          `Hola, quiero solicitar un plan personalizado con los siguientes servicios:\n\n- ${serviciosSeleccionados.join("\n- ")}`
      );

      const numeroWhatsApp = "+573117947704";
      const enlaceWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;

      window.open(enlaceWhatsApp, "_blank");

      form.reset();
      modal.style.display = "none";
  });
});
