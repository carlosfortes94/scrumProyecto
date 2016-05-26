var modificarTarea = {
	
	init: function(tareaId){
		console.log(tareaId);
		logicaTarea.recogerDatosBD({id: tareaId, m2: "modificarTarea"}, modificarTarea.mostrarVentanaModificacion);
	},
		
	mostrarDatos: function(datosTarea){
		document.getElementById("nombre_tarea").value = datosTarea.nombre;
		document.getElementById("descripcion_tarea").value = datosTarea.descripcion;
		document.getElementById("lista_pruebas").value = datosTarea.pruebas;
		document.getElementById("coste_estimado").value = datosTarea.coste;
		document.getElementById("prioridad").value = datosTarea.prioridad;
	},
	
		mostrarVentanaModificacion : function(datosTarea){
			modificarTarea.mostrarDatos(datosTarea);
			mostrarDatos(datosTarea);
			document.getElementById("ventanaTarea").style.display = 'block';
			document.getElementById("fadebox").style.display = 'block';
			/*var color = document.getElementById().style.backgroundColor;*/
			document.getElementById("ventanaTarea").style.backgroundColor = color;
			
		}
};
