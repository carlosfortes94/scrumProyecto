var botones = {
	init: function(idTarea){
		var btn_nueva_tarea = document.getElementById("nueva_tarea");
		btn_nueva_tarea.addEventListener("click", function(){
			nuevaTarea.ventana.mostrar();
			nuevaTarea.ventana.limpiarFields();
			nuevaTarea.ventana.titulo();
		});
		
		var btn_enviar_tarea = document.getElementById("enviar");
		btn_enviar_tarea.addEventListener("click", function(){
			nuevaTarea.insertarNuevaTarea.init();
		});
		
		var btn_cancelar_tarea = document.getElementById("cancelar");
		btn_cancelar_tarea.addEventListener("click", function(){
			nuevaTarea.ventana.ocultar();
		});
	}
};
