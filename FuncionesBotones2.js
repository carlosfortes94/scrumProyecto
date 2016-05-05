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
	enviar_tarea.addEventListener("click", function(){ 
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
             }
 }
}

