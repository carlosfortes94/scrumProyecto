var nuevaTarea = {
	ventana : {
		mostrar: function(){
			document.getElementById("ventanaTarea").style.display = 'block';
			document.getElementById("fadebox").style.display = 'block';
		},

		ocultar: function(){
			document.getElementById("ventanaTarea").style.display = 'none';
			document.getElementById("fadebox").style.display = 'none';
		},

		titulo: function(){
			var titulo_nuevaTarea = document.getElementById("titulo_tarea");
			titulo_nuevaTarea.innerHTML = "Añadir tarea a ";//aqui va la llamada al id de la historia
		},

		limpiarFields: function(){
			document.getElementById("nombre_tarea").value = "";
			document.getElementById("descripcion_tarea").value = "";
			document.getElementById("lista_pruebas").value = "";
			document.getElementById("coste_estimado").value = "";
			document.getElementById("prioridad").value = "";
		}
	},

	insertarNuevaTarea: {
		init: function(colorDiv){
			var datosTarea = nuevaTarea.insertarNuevaTarea.getDatosTarea();
			datosTarea.color = colorDiv;
			nuevaTarea.insertarNuevaTarea.validacionTarea(datosTarea);
		},

		getDatosTarea: function(){
			var tarea = new Object();
			tarea.id_historia = document.getElementById("id_historia").getContext;
			tarea.nombre = document.getElementById("nombre_tarea").value;
			tarea.descripcion = document.getElementById("descripcion_tarea").value;
			tarea.pruebas = document.getElementById("lista_pruebas").value;
			tarea.coste = document.getElementById("coste_estimado").value;
			tarea.prioridad = document.getElementById("prioridad").value;

			return tarea;
		},

		validacionTarea: function(tarea){
			var errores = "";

			if(tarea.nombre === ""){
				errores+="nombre, ";
			}

			if (tarea.descripcion === ""){
				errores+= "descripción, ";
			}

			if (tarea.coste<=0 || tarea.coste === ""){
				errores+="coste estimado, ";
			}
			
			if (tarea.prioridad<=0 || tarea.prioridad === ""){
				errores+="prioridad";
			}

			if (errores === ""){
				//Llamada a la clase que lo crea, preparar paso 5
				logicaTarea.callbackNuevaTarea({nombre: tarea.nombre, descripcion: tarea.descripcion, pruebas: tarea.pruebas, coste: tarea.coste, prioridad: tarea.prioridad, id_historia: tarea.id_historia, color: tarea.color}, nuevaTarea.creacionDivTarea.tareaCreate);		
			} else {
				alert("Los campos de " + errores + " no son correctos.");
			}
		}
	},
	
	creacionDivTarea: {
		tareaCreate: function(tarea){
			var div = document.createElement("div");

			var tareaBox = "<ul><li class='nombre_tarea'>" + tarea.nombre + "</li><li>" + tarea.prioridad + "</li></ul><span>" + tarea.coste + "</span><input type='image' src='editar.png' id='modificar_tarea' onclick='modificarTarea.init(this.parentNode.querySelector(\".nombre_tarea\").textContent)'/><input type='image' src='eliminar.png' id='eliminar_tarea' onclick='modificarTarea.init(this.parentNode.querySelector(\".nombre_tarea\").textContent)'/>";
			
			var id_tarea =tarea.nombre;

			div.setAttribute("class", "tarea");
			div.setAttribute("id", id_tarea);
			div.setAttribute("draggable","true");
			div.style.backgroundColor = tarea.color;
			div.innerHTML = tareaBox;

			var por_hacer = document.getElementById("por_hacer");
			por_hacer.appendChild(div);

		}
	}
};
