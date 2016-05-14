var nuevaTarea = {
		init: function(tarea){
			
		},
	
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
										document.getElementById("coste_estimado").value = "";
										document.getElementById("prioridad").value = "";
		    },
		//ESTO ES PARA MODIFICAR
      mostrarDatos: function(id_tarea){
          var tarea = document.getElementById(id_tarea);  
     }
	},
	
	insertarNuevaTarea: {
						init: function(){
											var datosTarea = nuevaTarea.insertarNuevaTarea.getDatosTarea();
														nuevaTarea.insertarNuevaTarea.validacionTarea(datosTarea);
						},
		
						getDatosTarea: function(){
											var tarea = new Object();
											tarea.nombre = document.getElementById("nombre_tarea").value;
											tarea.descripcion = document.getElementById("descripcion_tarea").value;
											tarea.pruebas = document.getElementById("lista_pruebas");
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
																logicaTarea.callbackNuevaTarea(tarea, nuevaTarea.creacionDivTarea.tareaCreate);
																//ejecutar paso 2
																

															} else {
																alert("Los campos de " + errores + " no son correctos.");
															}
						}
		},
	creacionDivTarea: {
			tareaCreate: function(tarea){
                            var div = document.createElement("div");

                            var tareaBox = "<ul>" + 
                                            "<li>" + tarea.nombre + "</li>" + 
                                            "<li>" + tarea.prioridad + "</li>" +
                                           "</ul>" + 
                                          "<span>" + tarea.coste + "</span>" + 
																																										"<a href='#' id='modificar_tarea'><img src='eliminar.png'/></a>;
		

		div.setAttribute("id","tarea");
		div.setAttribute("draggable","true");
		div.innerHTML = tareaBox;
                
                var tareaBox1 = document.getElementById("por_hacer");
                tareaBox1.appendChild(div);
		
	}
}
};
