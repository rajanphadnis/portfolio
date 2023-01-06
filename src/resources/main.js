function openCity(projectType) {
    var i;
    var x = document.getElementsByClassName("proj");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(projectType).style.display = "block";  
  }