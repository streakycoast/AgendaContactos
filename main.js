const botonAdd = document.getElementById('btn-add')

   



const guardarForm =(e)=>{
    e.preventDefault(); //evita que la pagina se refresque cuando das click
  
    var nombre=document.getElementById('nombre').value
    var apellido=document.getElementById('apellido').value
    var telefono=document.getElementById('phone').value
    var correo=document.getElementById('email').value

    const datosContacto={
        "nombre":nombre,
        "apellido":apellido,
        "telefono": telefono,
        "correo":correo
      }
   
    

    let idAleatorio= Math.random(); // genera un id unico
  
    let contactoString=localStorage.setItem(idAleatorio, JSON.stringify(datosContacto)); //agregar el objeto al localStorage

   let stringAJson = localStorage.getItem(idAleatorio); //obtener el elemento del localStorage
   
    let contactos= (idAleatorio, JSON.parse(stringAJson)); //convertir ese elemento a json
    
    console.log(contactos)

    
      function mostrarDatos(){
          console.log("mostrando datos" ,contactos)
      }

      
          mostrarDatos();
      

    


}



const botonMostrar=document.getElementById('btn-mostrar');
    
botonAdd.addEventListener('click', guardarForm)



