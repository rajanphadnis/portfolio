function openCity(projectType, buttonTrig) {
    var i;
    var x = document.getElementsByClassName("proj");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(buttonTrig).active = true;
    document.getElementById(projectType).style.display = "block";  
  }