var logicaTarea = {
	nombres_tarea : [],
	callbackNuevaTarea: function(tarea, creacionDivTarea){
		this.creacionDivTarea = creacionDivTarea;
	
        for (var i=0;this.nombres_tarea.length;i++){
            if (tarea.nombre === this.nombres_tarea[i]){
               	var error = "La tarea ya existe";
																this.creacionDivTarea(tarea);
                return;
            }
        }
        //preparando paso 4

        //ejecutar paso 3
        conexionServidor.solicitarAddTareaBD(tarea, logicaTarea.addTareaTerminada);
	}, 
		
		addTareaTerminada: function(tarea){
				if (typeof(tarea.error) == "undefined"){
									logicaTarea.nombres_tarea.push(tarea);
				} else {
					
				}
			
			logicaTarea.creacionDivTarea(tarea);
				}
};
