var solicitudAsinc;

function registrarManejadores() {
  const imgCss = document.getElementById("csstecprof");

  if (imgCss.addEventListener) {
    imgCss.addEventListener("mouseover", function() {
      obtenerContenido("1");
    }, false);
  } else if (imgCss.attachEvent) {
    imgCss.attachEvent("onmouseover", function() {
      obtenerContenido("1");
    });
  }

  if (imgCss.addEventListener) {
    imgCss.addEventListener("mouseout", borrarContenido, false);
  } else if (imgCss.attachEvent) {
    imgCss.attachEvent("onmouseout", borrarContenido);
  }

  const imgJava = document.getElementById("java8");

  if (imgJava.addEventListener) {
    imgJava.addEventListener("mouseover", function() {
      obtenerContenido("2");
    }, false);
  } else if (imgJava.attachEvent) {
    imgJava.attachEvent("mouseover", function() {
      obtenerContenido("2");
    });
  }

  if (imgJava.addEventListener) {
    imgJava.addEventListener("mouseout", borrarContenido, false);
  } else if (imgJava.attachEvent) {
    imgJava.attachEvent("onmouseout", borrarContenido);
  }

  const imgNinja = document.getElementById("jsninja");

  if (imgNinja.addEventListener) {
    imgNinja.addEventListener("mouseover", function() {
      obtenerContenido("3");
    }, false);
  } else if (imgNinja.attachEvent) {
    imgNinja.attachEvent("onmouseover", function() {
      obtenerContenido("3");
    });
  }

  if (imgNinja.addEventListener) {
    imgNinja.addEventListener("mouseout", borrarContenido, false);
  } else if (imgNinja.attachEvent) {
    imgNinja.attachEvent("onmouseout", borrarContenido);
  }

  const imgNode = document.getElementById("nodejs");

  if (imgNode.addEventListener) {
    imgNode.addEventListener("mouseover", function() {
      obtenerContenido("4");
    }, false);
  } else if (imgNode.attachEvent) {
    imgNode.attachEvent("onmouseover", function() {
      obtenerContenido("4");
    });
  }

  if (imgNode.addEventListener) {
    imgNode.addEventListener("mouseout", borrarContenido, false);
  } else if (imgNode.attachEvent) {
    imgNode.attachEvent("onmouseout", borrarContenido);
  }
}

function obtenerContenido(id) {
  const URL = "https://6538384da543859d1bb1518a.mockapi.io/api/example/" + id;

  try {
    solicitudAsinc = new XMLHttpRequest();

    if (solicitudAsinc.addEventListener) {
      solicitudAsinc.addEventListener("readystatechange", cambiarEstado, false);
    } else if (solicitudAsinc.attachEvent) {
      solicitudAsinc.attachEvent("onreadystatechange", cambiarEstado);
    }

    solicitudAsinc.open("GET", URL, true);
    solicitudAsinc.send(null);
  } catch (exception) {
    alert("No se procesó la petición AJAX");
  }
}

function borrarContenido() {
  document.getElementById("descriptions").innerHTML = "";
}

function cambiarEstado() {
  if (solicitudAsinc.readyState == 4 && solicitudAsinc.status == 200) {
    const jsonDescription = solicitudAsinc.responseText;
    document.getElementById("descriptions").innerHTML = JSON.parse(jsonDescription).description;
  }
}

if (window.addEventListener) {
  window.addEventListener("load", registrarManejadores, false);
} else if (window.attachEvent) {
  window.attachEvent("onload", registrarManejadores);
}
