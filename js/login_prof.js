document.querySelector(".login-container form").addEventListener("submit", function(event) {

    event.preventDefault(); 
  
  
    
  
    var username = document.getElementById("username").value;
  
    var password = document.getElementById("password").value;
  
  
  
    
  
    if (username === "profe" && password === "123456789") {
  
     
  
      window.location.href = "dashboard_profe.html";
  
    } else {
  
      
  
      alert("EL nombre de usuario y contraseña es incorrecto...intentalo otra vez");
  
    }
  
  });