var cargaDatos = {
	init: function(){
		cargaTareas();
	}
};

var modo;

function cargaTareas(){
	logicaTarea.solicitarCargarTareas(creacionTareas);
}

function creacionTareas(tareas){
	
	modo = 1;
	
	for (var i=0;i<tareas.length;i++){
		var div = document.createElement("div");
		
		var tareasBox = "<ul><li class='nombre_tarea'>" + tarea.nombre + "</li><li>" + tarea.prioridad + "</li></ul><span>" + tarea.coste + "</span><input type='image' src='editar.png' id='modificar_tarea' onclick='modificarTarea.init(this.parentNode.getElementByTagName(\"li\")[0].textContent)'/><input type='image' src='eliminar.png' id='eliminar_tarea' onclick='eliminarTarea.init(this.parentNode.getElementByTagName(\"li\")[0].textContent)'/>";
		
		var id_tarea = tarea.nombre;
		logicaTarea.subidaDatosArray(1, id_tarea);
		div.setAttribute("id", id_tarea);
		div.setAttribute("class", "tarea");
		div.setAttribute("draggable", "true");
		div.style.backgroundColor = tareas.color;
		div.innerHTML = tareasBox;
		
		if (tareas.estado == 1){
			var por_hacer = document.getElementById("por_hacer");
			por_hacer.appendChild(div);
		} else if (tareas.estado == 2){
			var en_proceso = document.getElementById("en_proceso");
			en_proceso.appendChild(div);
		} else if (tareas.estado == 3){
			var terminado = document.getElementById("terminado");
			terminado.appendChild(div);
		} else if (tareas.estado == 4){
			var por_terminar = document.getElementById("por_terminar");
			por_terminar.appendChild(div);
		}
	}
}

cargaTareas();
