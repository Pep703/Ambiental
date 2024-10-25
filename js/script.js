document.addEventListener("DOMContentLoaded", function() {
    const plantas = [
      { nombre: 'Agave Victoriae', habitat: 'Desierto', descripcion: 'Una planta suculenta única...' },
      { nombre: 'Orquídea de Laelia', habitat: 'Bosques húmedos', descripcion: 'Flor ornamental...' },
    ];
  
    const listaPlantas = document.getElementById('lista-plantas');
    plantas.forEach(planta => {
      const item = document.createElement('div');
      item.innerHTML = `<h3>${planta.nombre}</h3><p>${planta.habitat}</p><p>${planta.descripcion}</p>`;
      listaPlantas.appendChild(item);
    });
    
  });
  
function buscarPlanta() {
  // Obtiene el valor de búsqueda
  let input = document.getElementById('buscador').value.toLowerCase();

  // Obtiene todas las tarjetas de plantas
  let tarjetas = document.getElementsByClassName('tarjeta-planta');

  // Recorre cada tarjeta
  for (let i = 0; i < tarjetas.length; i++) {
    // Obtiene el nombre de la planta en cada tarjeta
    let nombrePlanta = tarjetas[i].getElementsByTagName("h3")[0].innerText.toLowerCase();

    // Si el nombre de la planta coincide con el valor de búsqueda, muestra la tarjeta; de lo contrario, ocúltala
    if (nombrePlanta.includes(input)) {
      tarjetas[i].style.display = "";
    } else {
      tarjetas[i].style.display = "none";
    }
  }
}

function filtrarPlantas(habitat) {
  let tarjetas = document.getElementsByClassName('tarjeta-planta');
  
  for (let i = 0; i < tarjetas.length; i++) {
    if (habitat === 'todos') {
      tarjetas[i].style.display = '';
    } else if (tarjetas[i].classList.contains(habitat)) {
      tarjetas[i].style.display = '';
    } else {
      tarjetas[i].style.display = 'none';
    }
  }
}








