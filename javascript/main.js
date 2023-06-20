//let userInput = prompt("Ingrese tu nombre:");

//let edad = prompt("Ingresa tu edad:");//
//if (edad <= 17){
 // alert("Lo siento, no tienes edad para ver esta pagina");
  // window.location.replace("https://www.google.com/search?q=prohibido+bebes&tbm=isch&ved=2ahUKEwj-ztXQ_-v9AhV5uJUCHYYMBNsQ2-cCegQIABAA&oq=prohibido+bebes&gs_lcp=CgNpbWcQDDIECCMQJzIFCAAQgAQyBggAEAcQHjIGCAAQCBAeUABYAGCPCWgAcAB4AIABaYgBaZIBAzAuMZgBAKoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=SRkZZL6GDfnw1sQPhpmQ2A0&bih=627&biw=1325&client=opera-gx&hs=fOB");
 //
 
 let userVar = prompt("Ya es cliente de ANBU GYM? :");
 if (userVar == "si" || userVar=="SI"|| userVar=="yes"|| userVar=="Si"|| userVar=="YES" ){
  const varContra = "contraseña";
  let maxIntentos = 3;
  
  for (let Cont = 1; Cont <= maxIntentos; Cont++) {
    let contraIngresada = prompt("Ingrese la contraseña (Intento n°" + Cont + " de " + maxIntentos + ")");
  
    if (contraIngresada === varContra) {
      alert("Contraseña Correcta. Acceso autorizado");
      break; 
    } else {
      if (Cont === maxIntentos) {
        alert("Exediste el maximo de intentos. Acceso denegado.");
      } else {
        alert("Contraseña incorrecta! intente nuevamente.");
      }
    }
  }
    alert("Bienvenido nuevamente!");
  }
  
 else{
 let nuevoNombre= prompt("Ingrese su nombre: ")
 let nuevaEdad= prompt("Ingrese su edad: ")
 if (nuevaEdad <= 17){
   alert("Lo siento, no tienes edad para ver esta pagina");
 
    window.location.replace("https://www.google.com/");
 
   }
 let nuevaDireccion= prompt("Ingrese su direccion: ")
 let nuevoPlan= prompt("Ingrese su plan deseado: ")
 const cliente1= new Cliente (nuevoNombre,nuevaEdad,nuevaDireccion,nuevoPlan);
 console.log(cliente1)
 
 cliente1.bienvenida()
 }
 function Cliente (nombreCliente, edadCliente,direccionCliente,planCliente){
   this.nombre=nombreCliente;
   this.edad=edadCliente;
   this.direccion=direccionCliente;
   this.plan=planCliente;
   this.bienvenida=function(){
     alert("Bienvenido "+ this.nombre)
   }
 }
 // la idea es tener una tienda de productos, que dependiendo el nivel de plan que tenes, te da un porcentaje  de descuento
 // producto numero 1=1000;
 // producto numero 2=2500;
 // producto numero 3=5000;
 const productos = [ 
     {
        nombre: "BOTELLA ANBU",
        precio:1000,
        idProducto:1,
        categoria:"accesorio"
      }, 
      {
         nombre: "REMERA ANBU",
         precio:2500,
         idProducto:2,
         categoria:"ropa"
        },
        {   
          nombre: "BUZO ANBU",
          precio:5000,
          idProducto:3,
          categoria: "ropa"
        } 
   ]
  // const afirmaciones=["si","SI","Si","sI","yes","YES"] // quise reemplazar el openTieda para que recorra el array y buscar el si en vez de estarlo escribiendolo siempre.
  let salida="";
  let contador=0;
  for(const producto of productos){
    contador+=1; 
   salida+=contador+"-" + producto.nombre+ "$ "+ producto.precio+ "\n"
  }
 
 let openTienda = prompt ("Desea comprar algo de nuestra tienda?"+ "\n"+ salida)
 if (openTienda == "si" || userVar=="SI"|| userVar=="yes"|| userVar=="Si"|| userVar=="YES" )
 {
  let compra = prompt("Ingrese el nombres del producto que quiere comprar")
  let encontrarObjeto = productos.find(function(object) {
    return object.nombre === compra;

  });
  if (encontrarObjeto) {
    console.log("Objecto a comprar:", encontrarObjeto);
  } else {
    console.log("Objecto no encontrado.");
  }
  alert("El precio de la compra es de $ "+encontrarObjeto.precio)
  let productosRopa=productos.filter(item => item.categoria=="ropa")
  console.log(productosRopa);

  let productosAccesorios=productos.filter(item => item.categoria=="accesorio")
  console.log(productosAccesorios);

  let categorias= productos.map(item=>item.categoria)
  console.log(categorias);
  

 }
 
 
 
 function descuentoRookie(precio)
 {
 let descuento = precio * 0.1; //descuento de 10%
 let precioDescontado= precio - descuento;
 return precioDescontado;
 }
 
 
 function descuentoIntermedio(precio)
 {
 let descuento = precio * 0.2; //descuento de 20%
 let precioDescontado= precio - descuento;
 return precioDescontado;
 }
 
 function descuentoAvanzado(precio)
 {
 let descuento = precio * 0.25; //descuento de 25%
 let precioDescontado= precio - descuento;
 return precioDescontado;
 }