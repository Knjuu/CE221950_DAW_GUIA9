var xmlhttp = false;

try {
  xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
} catch (e) {}

if (!xmlhttp) {
  try {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  } catch (E) {
    xmlhttp = false;
  }

  if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
    xmlhttp = new XMLHttpRequest();
  }
}

function makerequest(id) {
  const URL = "https://6538384da543859d1bb1518a.mockapi.io/api/example/cities/" + id;
  
  if (xmlhttp) {
    xmlhttp.open("GET", URL, true);
    
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        const cityJson = JSON.parse(xmlhttp.responseText);
        document.getElementById("cityImage").src = cityJson.image;
        document.getElementById("cityDescription").innerHTML = cityJson.description;
      }
    }
    
    xmlhttp.send(null);
  }
}
