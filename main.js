//cambiar contenido dinamicamente con jquery
$(document).ready(function(){
    $('#agregar').click(function(){
        $('#container').load("addContacts.html")
    })
    $('#editar').click(function(){
        $('#container').load("editContacts.html")
    })
    $('#eliminar').click(function(){
        $('#container').load("deleteContact.html")
    })
})