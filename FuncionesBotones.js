var nuevaTarea = {
	init: function(){
        
	var nueva_tarea = document.getElementById("nueva_tarea");
	nueva_tarea.addEventListener("click", function(){ 
	nuevaTarea.ventana.ventanaTarea(); 
});

    var cancelar_tarea = document.getElementById("cancelar_tarea");
	cancelar_tarea.addEventListener("click", function(){ 
	nuevaTarea.ventana.ocultarTarea(); 
});
    //por terminar    
    var enviar_tarea = document.getElementById("enviar_tarea");
	enviar_tarea.addEventListener("click", function(){ 
	nuevaTarea.ventana.enviarTarea(); 
        
});    
    
},

ventana : {

	
     ventanaTarea: function (){
                var ventana = document.getElementById("ventanaTarea").style.display= 'block'; 
                var fondo = document.getElementById("fadebox").style.display = 'block';
            },
            
     ocultarTarea: function (){
                document.getElementById("ventanaTarea").style.display = 'none';
                document.getElementById("fadebox").style.display = 'none';
             }     
}
}

