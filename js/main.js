let email = document.getElementById("inputEmail4");
let emailError = document.getElementById("emailError");
if (email.value == "") {
    emailError.className = "text-light bg-danger p-1";
    emailError.innerHTML = "Error! Complete el campo Email!";
} else {
    emailError.innerHTML = "";
}



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
  <p>$${producto.precio}</p>`;
  document.getElementById("productos").appendChild(div);
}


