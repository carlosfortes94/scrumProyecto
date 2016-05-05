var tareaIn = {
	init: function(datos){
		this.nombre = datos[0];
		this.descripcion = datos[1];
		//AQUI VA LA LISTA DE PRUEBAS
		this.coste = datos[2];
		this.prioridad = datos[3];
	},
	validacionDatos: {
		recogidaDatos: function(){
			var datos = nuevaTarea.getDatosTarea();
			tareaIn.init(datos);
			tareaIn.validacionDatos.validacionTarea(datos);
			
		},
		validacionTarea: function(datos){
			var errores = "";

			if(datos[0] == ""){
				errores+="nombre, ";
			}

			if (datos[1] ==""){
				errores+= "descripción, ";
			}

			if (datos[2]<0 || datos[2] == ""){
				errores+="coste estimado, ";
			}
			if (datos[3]<=0 || datos[3] ==""){
				errores+="prioridad";
			}
		
			if (errores == ""){
				//Llamada a la clase que lo crea
				tareaIn.creacionDivTarea.tareaMostrar(datos);
			} else {
				alert("Los campos de " + errores + " no son correctos.");
			}
		}
	},
	creacionDivTarea: {
			tareaCreate: function(datos){
		var div = document.createElement("div");

		var tarea = "<ul>" + 
				"<li>" + datos[0] + "</li>" + 
				"<li>" + datos[3] + "</li>" +
				"<li>" + datos[2] + "</li>" +
			    "</ul>";
		

		div.setAttribute("id","tarea");
		div.setAttribute("draggable","true");
		div.innerHTML = tarea;
		return div;
	},
			tareaMostrar: function(datos){
				var div = tareaIn.creacionDivTarea.tareaCreate(datos);
				var tarea = document.getElementById("por_hacer");
				tarea.appendChild(div);
			}
}

};
