var eliminarTarea = {
	recogerID: function(idTarea){
		console.log(idTarea);
		eliminarTarea.eliminar(idTarea);
	},
	
	ventana: {
		mostrarVentanaEliminar: function(){
				document.getElementById("eliminarTarea").style.display = 'block';
				document.getElementById("fadebox").style.display = 'block';
		},
		
		ocultarVentanaEliminacion: function(){
				document.getElementById("eliminarTarea").style.display = 'none';
				document.getElementById("fadebox").style.display = 'none';
		}
	},
	
	eliminar: function(id_tarea){		
		logicaTarea.buscarIdEnBD(id_tarea, eliminarTarea.borrarTarea);
	},
	
	borrarTarea: function(datosTarea){
		var div = document.getElementById(datosTarea.id);
		var tabla = document.getElementById(datosTarea.estado);
		tabla.removeChild(div);
	}
};
