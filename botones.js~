var botones = {
	init: function(){
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
		
		var btn_modificar_tarea = document.getElementById("modificar_tarea");
		btn_modificar_tarea.addEventListener("click", function(){
			modificarTarea.init();
		});
		
		var btn_eliminar_tarea = document.getElementById("eliminar_tarea");
		btn_eliminar_tarea.addEventListener("click", function(){
			eliminarTarea.ventana.mostrarVentanaEliminar();
		});
		
		var btn_si_eliminar =  document.getElementById("si_eliminar");
		btn_si_eliminar.addEventListener("click", function(){
			eliminarTarea.eliminar();
		});
		
		var btn_no_eliminar = document.getElementById("no_eliminar");
		btn_no_eliminar.addEventListener("click", function(){
			eliminarTarea.ventana.ocultarVentanaEliminacion
		});
	}
};
