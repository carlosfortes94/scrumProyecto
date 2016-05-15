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
        var descripcion = document.getElementById("descripcion_historia").value;
        var valor = document.getElementById("valor_historia").value;
        
       
        
       //var divCreado = historia12.getHistoria.init(nombre,etiqueta,descripcion,valor);
        //var cuadroRosa = document.getElementById("historia1");
        
        
        
        //-var objetoHistoria= {nom: nombre, etq: etiqueta, des: descripcion, val: valor};    
        // EN SU LUGAR:
        // Enviar a la lógica de neogico la historia para que lo gestione: comprobar si ya existe, si no existe insertar en BD...
        //LogicaBacklog.enviarHistoria({nombre: nombre, etq: etiqueta..},FuncionesBotones2.ventana.anadirHistoria);
        logicaBacklog.enviarHistoria({nom: nombre, etq: etiqueta, des: descripcion, val: valor}, nuevaHistoria.ventana.anadirHistoria);

    },
    anadirHistoria: function(historia){
        console.log("[FuncionesHistoria.anadirHistoria]");
        console.log(historia);    
    }
    
 }
};

