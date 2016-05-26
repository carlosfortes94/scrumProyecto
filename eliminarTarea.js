var eliminarTarea = {
	recogerID: function(idTarea){
		console.log(idTarea);
		eliminarTarea.eliminar(idTarea);
	},
	
	eliminar: function(id_tarea){		
		logicaTarea.buscarIdEnBD(id_tarea, eliminarTarea.borrarTarea);
	},
	
	borrarTarea: function(datosTarea){
		var nombresDOM = document.querySelectorAll(".tarea");
		
		for (var i=0;i<nombresDOM.length;i++){
			if (datosTarea..estado == 1){
				var tabla = document.getElementById("por_hacer");
				tabla.removeChild(tareaDOM);
			} else if (datosTarea..estado == 2){
				var tabla = document.getElementById("en_proceso");
				tabla.removeChild(tareaDOM);
			} else if (datosTarea..estado == 3){
				var tabla = document.getElementById("terminado");
				tabla.removeChild(tareaDOM);
			} else if (datosTarea..estado == 4){
				var tabla = document.getElementById("por_terminar");
				tabla.removeChild(tareaDOM);
		}
	}
	}
};
