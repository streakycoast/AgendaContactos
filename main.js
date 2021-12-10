//cambiar contenido dinamicamente con jquery
$(document).ready(function(){
    $('#agregar').click(function(){
        $('#container').load("vistas/addContacts.html")
    })
    $('#editar').click(function(){
        $('#container').load("vistas/editContacts.html")
    })
    $('#eliminar').click(function(){
        $('#container').load("vistas/deleteContact.html")
    })
})