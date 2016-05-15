var nuevoSprint = {
	init: function(){
        
	var nuevo_sprint = document.getElementById("nuevo_sprint");
	nuevo_sprint.addEventListener("click", function(){ 
	nuevoSprint.ventana.ventanaSprint(); 
});

    var cancelar_sprint = document.getElementById("cancelar_sprint");
	cancelar_sprint.addEventListener("click", function(){ 
	nuevoSprint.ventana.ocultarSprint(); 
});
    //por terminar    
    var enviar_sprint = document.getElementById("enviar_sprint");
	enviar_sprint.addEventListener("click", function(){ 
	nuevoSprint.ventana.enviarSprint(); 
        
});    
    
},

ventana : {

	
     ventanaSprint: function (){
                var ventana = document.getElementById("ventanaSprint").style.display= 'block'; 
                var fondo = document.getElementById("fadebox").style.display = 'block';
            },
            
     ocultarSprint: function (){
                document.getElementById("ventanaSprint").style.display = 'none';
                document.getElementById("fadebox").style.display = 'none';
             },

    enviarSprint: function (){
        //falta implementarlo en el html.
        var identificador = document.getElementById("id_sprint").value;
        var nombre = document.getElementById("nombre_sprint").value;
        var descripcion = document.getElementById("descripcion_sprint").value;
        var divCreado = sprint12.getSprint.init(descripcion);
        var nuevoDiv = document.getElementById("historia2");

        logicaSprint.enviarSprint({id: identificador, nom: nombre, des: descripcion}, nuevoSprint.ventana.anadirSprint);

        
    },

    anadirSprint : function (sprint){
        console.log(sprint);
    }     
}
};


