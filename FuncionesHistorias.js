var nuevaHistoria = {
	init: function(){
        
	var nueva_historia = document.getElementById("nueva_historia");
	nueva_historia.addEventListener("click", function(){ 
	nuevaHistoria.ventana.ventanaHistoria(); 
});

    var cancelar_historia = document.getElementById("cancelar_historia");
	cancelar_historia.addEventListener("click", function(){ 
	nuevaHistoria.ventana.ocultarHistoria(); 
});
    //por terminar    
    var enviar_historia = document.getElementById("enviar_historia");
	enviar_historia.addEventListener("click", function(){ 
	nuevaHistoria.ventana.enviarHistoria(); 
        
});    
    
},

ventana : {
    

    ventanaHistoria: function(){
                var ventana = document.getElementById("ventanaHistoria").style.display= 'block'; 
                var fondo = document.getElementById("fadebox").style.display = 'block';
            },

     ocultarHistoria: function (){
                document.getElementById("ventanaHistoria").style.display = 'none';
                document.getElementById("fadebox").style.display = 'none';
             },
    /*        
    mensajeError: function(){
        alert("Ya existe en la base de datos");
            },
    */
    
    enviarHistoria: function(){
        var nombre = document.getElementById("nombre_historia").value;
        var etiqueta = document.getElementById("etiqueta_historia").value;
        var idsprint = document.getElementById("id_sprint").value;
        var descripcion = document.getElementById("descripcion_historia").value;
        var valor = document.getElementById("valor_historia").value;

        logicaBacklog.enviarHistoria({nom: nombre, etq: etiqueta, id: idsprint, des: descripcion, val: valor}, nuevaHistoria.ventana.anadirHistoria);

    },
    anadirHistoria: function(historia){
        if (!historia.hasOwnProperty('error')){
            var nombre = historia.nom;
            var etiqueta = historia.etq;
            var idsprint = historia.id;
            var descripcion = historia.des;
            var valor = historia.val;
            var datos = "";
            
            datos = " <ul>" +
                               " <li class='etiqueta_historia'>" + etiqueta + "</li>" +
                               " <li class='nombre_historia'>" + nombre + "</li>" +
                               " <li>"+ idsprint +"</li>"+
                               " </ul>" +
                               " <span class='valor_historia' title='Valor de negocio'>" + valor + "</span>" +
                               " <button class='btn_detalles_historia' >Mostrar detalles</button><button class='btn_borrar_historia'>Borrar historia</button>";
            
            var historiaCreada = document.createElement("div");
            historiaCreada.innerHTML = datos;
            var cuadro = document.getElementById("historia1");
            cuadro.appendChild(historiaCreada);
            
            
        }else{
            alert("No se ha podido insertar");
        }
            
    }
    
 }
};