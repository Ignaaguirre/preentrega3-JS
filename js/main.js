document.querySelector("#mostrar-login").addEventListener("click", function(){
  document.querySelector(".login-popup").classList.add("active");
}
);
document.querySelector(".login-popup .close-btn").addEventListener("click", function(){
  document.querySelector(".login-popup").classList.remove("active");
}
);


document.querySelector("#mostrar-registrarse").addEventListener("click", function(){
  document.querySelector(".registrarse-popup").classList.add("active");
}
);
document.querySelector(".registrarse-popup .close-btn").addEventListener("click", function(){
  document.querySelector(".registrarse-popup").classList.remove("active");
}
);
  const usuarioEjemplo = {
    correoSesion: "usuario@gmail.com",
    contraseñaSesion:"contraseña"
  }
 //obtengo el boton de iniciar sesion 
  let iniciarSesion = document.getElementById("iniciar-sesion");

  // agrego event listener
  iniciarSesion.addEventListener("click", function(event) {
    event.preventDefault(); 

    // obtengo valores del input 
    var input1Valor = document.getElementById("inputEmail-1").value;
    var input2Valor = document.getElementById("inputContraseña-1").value;

    // comparo valores
    if (input1Valor === usuarioEjemplo.correoSesion && input2Valor === usuarioEjemplo.contraseñaSesion) {
     alert("SESION INICIADO CORRECTAMENTE.")


    } else {
      alert("CONTRASEÑA O CORREO INCORRECTO. INTENTE NUEVAMENTE");
    }
  });

    // Array vacio
    let inputRegistrarse = [];


    let nombreUsuario = document.getElementById("inputNombre");
    let emailUsuario = document.getElementById("inputEmail");
    let contraUsuario = document.getElementById("inputContraseña")  ;
    let edadUsuario = document.getElementById("inputEdad");
    let submitButton = document.getElementById("registrarse-btn");

    // agrego event listener
    submitButton.addEventListener("click", function() {
      //obtengo valores de los input
      let valorNombre = nombreUsuario.value;
      let valorEmail = emailUsuario.value;
      let valorContraseña = contraUsuario.value;
      let valorEdad = edadUsuario.value;

      // agrego valores al array
      inputRegistrarse.push(valorNombre, valorEmail, valorContraseña,valorEdad);



      //compruebo si anda (no me leia el email)
      console.log(inputRegistrarse);
      console.log(valorEmail)

 
    });





/* 
const productos = [ 
  {
     nombre: "BOTELLA ANBU",
     precio:1000,
     idProducto:1,
     categoria:"accesorio"
     ,imagen:"./assets/botellanbu.jpg"
   }, 
   {
      nombre: "REMERA ANBU",
      precio:2500,
      idProducto:2,
      categoria:"ropa"
      ,imagen:"./assets/remeraanbu.jpg"
     },
     {   
       nombre: "BUZO ANBU",
       precio:5000,
       idProducto:3,
       categoria: "ropa"
       ,imagen:"./assets/buzoanbu.jpg"
     } 
]

for (const producto of productos) {
  let div = document.createElement("div");
  div.className = "col-md-4 text-center";
  div.innerHTML = `<img src=${producto.imagen} class="img-fluid">
  <h3>${producto.nombre}</h3>
  <p>$${producto.precio}</p>
  <button type="submit" class="btn btn-secondary">Agregar al carrito</button>`
  ;
  document.getElementById("productos").appendChild(div);
}


 */
