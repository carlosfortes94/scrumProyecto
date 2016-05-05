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
    
    enviarHistoria: function(){
        var nombre = document.getElementById("nombre_historia").value;
        var etiqueta = document.getElementById("etiqueta_historia").value;
        var descripcion = document.getElementById("descripcion_historia").value;
        var valor = document.getElementById("valor_historia").value;
        
       
        
       var divCreado = historia12.getHistoria.init(nombre,etiqueta,descripcion,valor);
        
        var cuadroRosa = document.getElementById("historia1");
        
        cuadroRosa.appendChild(divCreado);
    }
    
 }
}

